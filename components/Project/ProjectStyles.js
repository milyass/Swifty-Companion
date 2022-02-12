import {background, primary} from '../Common/palette';

module.exports = {
  container: {
    flex: 1,
    backgroundColor: background,
  },
  project_container: {
    borderRadius: 20,
    flex: 1,
    flexShrink: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    height: '100%',
    width: '100%',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.8,
    shadowRadius: 15,
  },
  project_info: {
    flex: 1,
    margin: 10,
    padding: 10,
    width: '100%',
    height: '100%',
  },
  project_title: {
    fontSize: 25, 
    fontWeight: 'bold'
  },
  project_time : {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 5,
    marginBottom: 5,
    color: 'white',
  },
  success_text : {
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: 5,
    color: 'green',
    shadowColor: 'green',
    shadowRadius: 20,
    shadowOpacity: 1,
  },
  failure_text: {
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: 5,
    color: '#C70039',
    shadowColor: 'red',
    shadowRadius: 20,
    shadowOpacity: 1,
  },
  normal_text: {
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: 5,
    color: 'black',
  },
  icon_text: {
    fontSize: 15, 
    fontWeight: 'normal'
  }
};
