import {background} from '../Common/palette';

module.exports = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: background,
    width: '100%',
  },
  scroll_view_container: {
    flex: 1,
    padding: 10,
    width: 390,
  },
  achievement_container: {
    borderRadius: 20,
    flex: 1,
    marginTop: 20,
    height: '100%',
    width: '100%',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.8,
    shadowRadius: 15,
  },
  achievement_icon: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginLeft: 20,
    marginTop: 10,
  },
  achievement_text_container: {
    flex: 1,
    margin: 20,
  },
  text_title: { 
    fontSize: 22, 
    fontWeight: 'bold' 
  },
  text_description: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
};
