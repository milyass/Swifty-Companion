import React, { useEffect } from 'react';
import {SafeAreaView, View} from 'react-native';

import Achievement from './Achievement'
import { container } from './AchievementStyles'

function Achievements({route, navigation }) {
    if(!route || !route.params) {
      return <Error navigation={navigation}/>
    }
    const login = route.params.login
    useEffect(() => {
      navigation.setOptions({
        headerTitle: `${login.capitalize()}'s Achievements`,
      });
    }, [false]);
    const achievements = route.params.achievements
    return (
      <SafeAreaView
        style={container}>
        <Achievement achievements={achievements} />
      </SafeAreaView>
    );
  }

export default Achievements