import React, {useState, useEffect} from 'react';
import { SafeAreaView } from 'react-native';
import * as Progress from 'react-native-progress';
import {getUser, getCoalition, getLocation} from '../../actions/UsersActions';
import Profile from './Profile';
import {container} from './ProfileStyles';

function Profiles({route, navigation}) {
  if (!route || !route.params) {
    return <Error navigation={navigation} />;
  }
  const {username} = route.params;
  const [user, setUser] = useState(null);
  const [coalition, setCoalition] = useState([]);
  const [location, setLocation] = useState(null);

  useEffect(() => {
    navigation.setOptions({
      headerTitle: username && `${username.capitalize()}'s Profile`,
    });
  }, [false]);

  useEffect(() => {
    getUser(setUser, username, navigation);
  }, [false]);

  useEffect(() => {
    getCoalition(setCoalition, username, navigation);
  }, [false]);

  useEffect(() => {
    getLocation(setLocation, username, navigation);
  }, [false]);

  return (
    <>
      <SafeAreaView style={container}>
        {(user && (
          <Profile
            userData={user}
            coalitionData={coalition}
            locationData={location}
            navigation={navigation}
          />
        )) || (
          <Progress.CircleSnail
            size={150}
            color={['#B5DEFF', '#f890e7', '#D9D7F1']}
            indeterminate={true}
          />
        )}
      </SafeAreaView>
    </>
  );
}

export default Profiles;
