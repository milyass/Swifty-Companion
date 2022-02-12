import React from 'react';
import {View, Text, FlatList} from 'react-native';
import * as Progress from 'react-native-progress';
import {
  text_normal,
  text_bold_white,
  text_bold_dark
} from './ProfileStyles';

function SkillCard({skills, color}) {
  return (
      <View
        style={{
          width: '100%',
          padding: 15,
          borderColor: color,
          borderRadius: 10,
          borderWidth: 3,
          marginTop: 10,
          overflow: 'hidden',
          shadowColor: 'black',
          shadowRadius: 20,
          shadowOpacity: 1,
        }}>
        <FlatList
          data={skills}
          horizontal={true}
          disableIntervalMomentum={true}
          snapToInterval={320}
          renderItem={({item}) => {
            const progress_percent =
              (item.level &&
                Number(item.level).toFixed(2) -
                  Math.trunc(Number(item.level))) ||
              0;
            return (
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: 240,
                  width: 320,
                }}>
                <Text style={text_bold_white}>{item.name} </Text>
                <View
                  style={{
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 20,
                  }}>
                  <Progress.Circle
                    size={150}
                    progress={progress_percent}
                    color="rgba(0,0,0,0.8)"
                    unfilledColor="rgba(0,0,0,0.1)"
                    thickness={10}
                  />
                  <Text
                    style={{
                      ...text_normal,
                      position: 'absolute',
                      fontSize: 30,
                    }}>
                    {Number(item.level).toFixed(2)}
                  </Text>
                </View>
              </View>
            );
          }}
        />
      </View>
  );
}
export default SkillCard;
