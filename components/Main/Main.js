import React, {useState, useEffect} from 'react';
import {
  container,
  svg,
  app_title,
  search_bar,
  search_button,
  search_button_text,
} from './MainStyles';
import { getAndSetToken } from '../../effects/UsersEffects';
import ft_logo from '../../assets/ft_logo';
import { SvgXml } from 'react-native-svg';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import { faChevronRight} from '@fortawesome/free-solid-svg-icons';
import {
    TextInput,
    Text,
    TouchableOpacity,
    SafeAreaView,
    View
  } from 'react-native';

function Main({ navigation }) {

  const [search, setSearch] = useState('');

  useEffect(() => {
    getAndSetToken(navigation);
  }, [false]);

  return (
    <SafeAreaView style={container}>

      <SvgXml xml={ft_logo} width={150} height={150} style={svg} />
      <Text style={app_title}>Swifty Companion</Text>
      <TextInput
        placeholder="Login.."
        placeholderTextColor="white" 
        style={search_bar}
        onChangeText={e => setSearch(e.trim())}
        value={search}
      />
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Profiles', {
            username: search,
          })
        }
        style={search_button}>
        <Text style={search_button_text}>Lets Go...</Text>
        <FontAwesomeIcon icon={faChevronRight} size={22} color="#fff" />
      </TouchableOpacity>

    </SafeAreaView>
  );
}

export default Main

