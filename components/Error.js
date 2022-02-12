import React from 'react';
import {Text, SafeAreaView, TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import { dark, background, primary } from './Common/palette';
import { faSadTear } from '@fortawesome/free-solid-svg-icons';

function Error({ message, navigation }) {
  return (
    <SafeAreaView
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: background,
    }}><Text style={{
      fontSize: 30,
      fontWeight: 'bold',
      color: dark,
      margin: 20,
    }}>Something Went Wrong</Text>
    <TouchableOpacity
        onPress={() =>
          navigation.navigate('Main')
        }
        style={{
          backgroundColor: primary,
          padding: 20,
          width: '80%',
          height: 60,
          borderRadius: 5,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text style={{fontSize: 18, fontWeight: 'bold', color: '#fff'}}>
          Go Back
        </Text>
        <FontAwesomeIcon icon={faSadTear} size={22} color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Error;