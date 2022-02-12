import React from 'react';
import {View, Text, SafeAreaView, ScrollView, Dimensions} from 'react-native';
import {SvgUri} from 'react-native-svg';
import {faded_secondary, achievement_color} from '../Common/palette';
import {scroll_view_container, achievement_container, achievement_icon , achievement_text_container, text_title, text_description } from './AchievementStyles'

function Achievement({ navigation, achievements }) {
  const everyDataIsNotNull = achievements.every(key => key);
  return (
    <SafeAreaView>
      {(everyDataIsNotNull && (
        <ScrollView
          style={scroll_view_container}>
          <View
            style={{
              marginBottom: 40,
            }}>
            {achievements &&
              achievements.map(achievement => {
                const color =
                  achievement_color[achievement.kind] || faded_secondary;
                return (
                  <View
                    key={achievement.id}
                    style={{
                      ...achievement_container,
                      backgroundColor: color,
                      shadowColor: color,
                    }}>
                    <View
                      style={achievement_icon}>
                      {achievement.image && (
                        <SvgUri
                          width={50}
                          height={50}
                          uri={`https://api.intra.42.fr/${achievement.image}`}
                        />
                      )}
                    </View>
                    <View
                      style={achievement_text_container}>
                      <Text style={text_title}>
                        {achievement.name}
                      </Text>
                      <Text
                        style={text_description}>
                        {achievement.description}
                      </Text>
                    </View>
                  </View>
                );
              })}
          </View>
        </ScrollView>
      )) || <Text>No Achievements</Text>}
    </SafeAreaView>
  );
}

export default Achievement;
