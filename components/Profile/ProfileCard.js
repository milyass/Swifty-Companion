import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import SkillCard from './SkillCard';
import CursusCard from './CursusCard';
import moment from 'moment';
import {
  faEnvelope,
  faLocationArrow,
  faPhone,
  faGhost,
  faChevronCircleRight,
} from '@fortawesome/free-solid-svg-icons';
import {
  profile_card_container,
  name_container,
  profile_image_container,
  info_container,
  text_bold_dark,
  text_bold_white,
  text_normal,
  button_container,
  profile_button,
  button_text,
} from './ProfileStyles';

function ProfileCard({userData, coalitionData, locationData, navigation}) {
  const {cursus_users} = userData;
  const {login, achievements} = userData;
  const projects = userData.projects_users;
  const coalition = (Array.isArray(coalitionData) && coalitionData[0]) || null;
  const color = coalition?.color || 'grey';
  const campus_name =
    Array.isArray(userData?.campus) && userData?.campus[0]?.name;
  const user_location =
    (Array.isArray(locationData) && locationData[0]?.user?.location) ||
    'Unavailable';
  const skills =
    Array.isArray(cursus_users) &&
    cursus_users[cursus_users.length - 1]?.skills.length &&
    cursus_users[cursus_users.length - 1]?.skills;
  const cursus = cursus_users.length && cursus_users;
  return (
    <View
      style={{
        ...profile_card_container,
        backgroundColor: color,
        shadowColor: color,
      }}>
      <View style={{...name_container}}>
        {userData?.image_url && (
          <Image
            style={{
              ...profile_image_container,
            }}
            source={{
              uri: userData.image_url,
            }}
            resizeMode={'cover'}
          />
        )}
        <View style={{...info_container}}>
          <Text style={text_bold_dark}>
            {userData?.usual_full_name ?? 'N/A'}
          </Text>
          {userData['staff?'] && (
            <Text style={text_bold_white}>Staff Member</Text>
          )}
          <Text style={text_bold_dark}>
            Wallet:{' '}
            <Text style={text_bold_white}>
              {userData?.wallet ?? 'N/A'}
              {' ₳'}
            </Text>
          </Text>
          <Text style={text_bold_dark}>
            Score:{' '}
            <Text style={text_bold_white}>
              {coalitionData[0]?.score ?? 'N/A'}
            </Text>
          </Text>
        </View>
      </View>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          padding: 10,
        }}>
        <View
          style={{
            width: '60%',
          }}>
          <Text style={text_bold_dark}>
            Coalition: <Text style={text_bold_white}>{coalition?.name}</Text>
          </Text>
          <Text style={text_bold_dark}>
            Evaluation points:{' '}
            <Text style={{fontSize: 18, fontWeight: 'bold', color: '#fff'}}>
              {userData?.correction_point ?? 'N/A'}
            </Text>
          </Text>
          <Text style={text_bold_dark}>
            Location:{' '}
            <Text style={{fontSize: 18, fontWeight: 'bold', color: '#fff'}}>
              {user_location}
            </Text>
          </Text>
        </View>
        <View
          style={{
            width: '40%',
          }}>
          <Text style={text_bold_white}>
            <FontAwesomeIcon icon={faPhone} />
            {'  '}
            {userData?.phone}
          </Text>
          <Text style={text_bold_white}>
            <FontAwesomeIcon icon={faLocationArrow} />
            {'  '}
            {campus_name}
          </Text>
          <Text style={text_bold_white}>
            <FontAwesomeIcon icon={faGhost} />
            {'  '}
            {userData?.anonymize_date &&
              moment
                .utc(userData.anonymize_date)
                .local()
                .startOf('seconds')
                .fromNow()}
          </Text>
        </View>
      </View>
      <View
        style={{
          padding: 8,
        }}>
        <Text style={text_bold_white}>
          <FontAwesomeIcon icon={faEnvelope} />
          {'  '}
          {userData?.email}
        </Text>
      </View>
      {(cursus && <CursusCard cursus_users={cursus} color={color} />) || (
        <Text style={text_bold_dark}>No Cursus To Show</Text>
      )}
      {(skills && <SkillCard skills={skills} color={color} />) || (
        <Text style={text_bold_dark}>No Skills To Show</Text>
      )}
      <View style={button_container}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Projects', {projects, login})}
          style={profile_button}>
          <Text style={button_text}>
            {'  '}
            {login.capitalize()}'s Projects
          </Text>
          <FontAwesomeIcon icon={faChevronCircleRight} size={22} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Achievements', {achievements, login})
          }
          style={profile_button}>
          <Text style={button_text}>
            {'  '}
            {login.capitalize()}'s Achievements
          </Text>
          <FontAwesomeIcon icon={faChevronCircleRight} size={22} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default ProfileCard;
