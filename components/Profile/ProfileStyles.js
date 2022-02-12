import {background, primary} from '../Common/palette';


module.exports = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: background,
  },
  scroll_container: {
    width: 390,
    height: 320,
    padding: 5,
  },
  profile_card_container: {
    borderRadius: 20,
    alignItems: 'center',
    flex: 1,
    padding: 10,
    height: '100%',
    width: '100%',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.8,
    shadowRadius: 15,
    marginTop: 20,
    marginBottom: 50,
  },
  name_container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    width: '100%',
  },
  info_container: {
    flex: 1,
    padding: 15,
    justifyContent: 'center',
    width: '100%',
  },
  profile_image_container: {
    width: 110,
    height: 110,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: 'white'
  },
  text_title: {
    margin: 8, 
    fontSize: 30, 
    fontWeight: 'bold'
  },
  text_bold_dark: { marginTop: 6, fontSize: 18, fontWeight: 'bold'},
  text_bold_white: {
    marginTop: 6,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  text_normal: {
    marginTop: 6,
    fontSize: 16,
    fontWeight: '500',
    color: 'white',
  },
  button_container: {
    width: '90%',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  profile_button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 6,
    padding: 12,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#fff',
    backgroundColor: 'rgba(0,0,0,0.1)',
    width: '100%',
    height: 50,
  },
  button_text: {fontSize: 16, fontWeight: 'bold', color: '#fff'},
  skill_card_container: {
    flex: 1,
    width: '100%',
    height: '100%',
    padding: 20,
    marginTop: 10,
    backgroundColor: primary,
    borderRadius: 15,
    shadowColor: primary,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 4.65,
    elevation: 24,
    marginBottom: 40,
  },
  one_skill_container: {marginBottom: 10, width: '100%'}
};
