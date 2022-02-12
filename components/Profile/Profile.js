import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import ProfileCard from './ProfileCard';
import {
  scroll_container,
} from './ProfileStyles';

function Profile({userData, coalitionData, locationData, navigation}) {
  return (
    <SafeAreaView>
      <ScrollView
        style={scroll_container}>
        <ProfileCard
          userData={userData}
          coalitionData={coalitionData}
          locationData={locationData}
          navigation={navigation}
        /> 
      </ScrollView>
    </SafeAreaView>
  );
}

export default Profile;
