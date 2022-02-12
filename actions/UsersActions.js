import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {TOKEN_KEY, FT_URL} from '../config/index';
import {Alert} from 'react-native';
import * as rax from 'retry-axios';
import { getAndSetToken } from '../effects/UsersEffects';

const ft_api = axios.create();
ft_api.defaults.raxConfig = {
  instance: ft_api,
  statusCodesToRetry: [[100, 199], [429, 429], [500, 599]],
};

const interceptorId = rax.attach(ft_api);

module.exports = {
  getUser: async (setUser, slug, navigation) => {
    try {
      if (!slug) throw new Error('Please provide login');
      const username = String(slug).toLowerCase();
      const token = await AsyncStorage.getItem(TOKEN_KEY);
      const headers = {
        Authorization: `Bearer ${token}`,
      }
      const user = await ft_api.get(`${FT_URL}/v2/users/${username}`, { headers })
      const user_data = user?.data
      if(user_data) user_data.cursus_users.reverse()
      return setUser(user_data);
    } catch (error) {
      let title = 'Something Went Wrong'
      let message = error.message
      if(error?.response?.status === 404){
        title = 'User Not Found Sorry'
        message = 'Check if login is correct and try again.'
      }
      if(error?.response?.status === 401){
        getAndSetToken()
      } 
      Alert.alert(title,message, [
        {
          text: 'Ok',
          onPress: () => navigation.navigate('Main'),
        },
      ]);
    }
  },

  getCoalition: async (setCoalition, slug, navigation) => {
    try {
      const username = String(slug).toLowerCase();
      const token = await AsyncStorage.getItem(TOKEN_KEY);
      const headers = {
        Authorization: `Bearer ${token}`,
      }
      const coalition = await ft_api.get(`${FT_URL}/v2/users/${username}/coalitions`,{ headers })
      return setCoalition(coalition.data);
    } catch (error) {
      return null
    }
  },

  getLocation: async (setLocation, slug, navigation) => {
    try {
      const username = String(slug).toLowerCase();
      const token = await AsyncStorage.getItem(TOKEN_KEY);
      const headers = {
        Authorization: `Bearer ${token}`,
      }
      const location = await ft_api.get(`${FT_URL}/v2/users/${username}/locations`,{ headers })
      return setLocation(location.data);
    } catch (error) {
      return null
    }
  },

};
