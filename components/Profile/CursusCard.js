import React from 'react';
import {View, Text, FlatList} from 'react-native';
import * as Progress from 'react-native-progress';
import { text_bold_white, text_bold_dark} from './ProfileStyles';

function CursusCard({cursus_users, color}) {
  const cursus = Array.isArray(cursus_users) && cursus_users
  const initialIndex = (cursus?.length - 1)
  return (
    
    <View
      style={{
        width: '100%',
        padding: 15,
        borderColor: color,
        borderRadius: 10,
        marginTop: 10,
        borderWidth: 3,
        overflow: 'hidden',
        shadowColor: 'black',
        shadowRadius: 15,
        shadowOpacity: 1,
      }}>
        <FlatList
        data={cursus}
        horizontal={true}
        disableIntervalMomentum={true}
        snapToInterval={320}
        renderItem={({item}) => {
          const progress_percent =
            (item.level &&
              Number(item.level).toFixed(2) - Math.trunc(Number(item.level))) ||
            0;
          return (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                height: 120,
                width: 320,
              }}>
              <Text style={text_bold_white}>{item.cursus.name}</Text>
              <Text style={text_bold_dark}>
                Grade: <Text style={text_bold_white}>{item.grade ?? '-'}</Text>
              </Text>
              <View
                style={{
                  margin: 10,
                  width: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  
                }}>
                <Progress.Bar
                  progress={progress_percent}
                  height={30}
                  color="rgba(255,255,255,0.5)"
                  unfilledColor="rgba(255,255,255,0.5)"
                  width={300}
                />
                <Text style={{...text_bold_dark, position: 'absolute'}}>
                  Level {parseInt(Number(item.level))}
                  {' - '}
                  {Math.round(progress_percent * 100)}
                  {'%'}
                </Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
}
export default CursusCard;
