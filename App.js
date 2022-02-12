import React from 'react';
import Achievements from './components/Achievement/Achievements'
import Projects from './components/Project/Projects'
import {primary, dark} from './components/Common/palette';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Main from './components/Main/Main'
import Profiles from './components/Profile/Profiles'

const Stack = createNativeStackNavigator();

// My Capitalize function
String.prototype.capitalize = function(){
  return this.charAt(0).toUpperCase() + this.slice(1)
}

function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          component={Main}
          name="Main"
          options={{headerShown: false}}
        />

        <Stack.Screen
          component={Profiles}
          name="Profiles"
          options={{
            headerTransparent: true,
            headerTitleStyle: {color: dark},
            headerTintColor: primary,
            headerBackTitle: 'Search',
            headerLargeTitle: true,
          }}
        />
        <Stack.Screen
          component={Achievements}
          name="Achievements"
          options={{
            headerTransparent: true,
            headerTitle:'User Achievements',
            headerTitleStyle: {color: dark},
            headerTintColor: primary,
            headerBackTitle: 'Profile',
            headerBlurEffect: 'prominent'
          }}
        />
        <Stack.Screen
          component={Projects}
          name="Projects"
          options={{
            headerTransparent: true,
            headerTitle:'User Projects',
            headerTitleStyle: {color: dark},
            headerTintColor: primary,
            headerBackTitle: 'Profile'
          }}
        />
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}



export default App;
