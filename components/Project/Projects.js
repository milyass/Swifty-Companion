import React, {useEffect} from 'react';
import {View, SafeAreaView,ScrollView} from 'react-native';
import Project from './Project';
import Error from '../Error';
import { container } from './ProjectStyles'

function Projects({route, navigation}) {
  if (!route || !route.params) {
    return <Error navigation={navigation} />;
  }
  const login = route.params.login;
  useEffect(() => {
    navigation.setOptions({
      headerTitle: `${login.capitalize()}'s Projects`,
    });
  }, [false]);
  const projects = route.params.projects;

  return (
    <SafeAreaView style={container}>
      <ScrollView>
        {
         projects && projects.map( project => {
            return (<View 
              key={project.id}
              style={{
              padding: 10,
            }}><Project project={project}/></View>)
          })
        }
      </ScrollView>
    </SafeAreaView>
  );
}

export default Projects;
