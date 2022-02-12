import axios from 'axios';
import {Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  TOKEN_KEY,
  FT_OAUTH_URL,
  FT_OAUTH_URL_PARAMS,
} from '../config/index';

module.exports = {
  getAndSetToken: async (navigation) => {
    try {
        const response = await axios.post(FT_OAUTH_URL, FT_OAUTH_URL_PARAMS, {
          timeout: 5000,
        });
        await AsyncStorage.setItem(TOKEN_KEY, response.data?.access_token);
      return;
    } catch (error) {
      Alert.alert('Error', error.message, [
        {
          text: "Ok",
          onPress: () => navigation.navigate('Main')
        },
      ]);
    }
  },
};
