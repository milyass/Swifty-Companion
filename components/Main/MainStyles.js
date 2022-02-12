import {StyleSheet} from 'react-native';
import {primary, faded_secondary,secondary, input_background,dark, background} from '../Common/palette';
module.exports = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: background,
  },

  svg: {
    alignItems: 'center',

  },

  app_title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: dark,
    margin: 10,

  },

  search_bar: {
    backgroundColor: input_background,
    color: 'white',
    padding: 20,
    margin: 20,
    width: '80%',
    height: 60,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',

  },

  search_button: {
    backgroundColor: primary,
    padding: 20,
    width: '80%',
    height: 60,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 200
  },
  search_button_text: {fontSize: 18, fontWeight: 'bold', color: '#fff'},
});
