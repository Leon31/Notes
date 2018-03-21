import { StyleSheet } from 'react-native';
import vars from '../../commonStyle';

export default StyleSheet.create({
  list_container:{
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  list_empty:{
    fontSize: 15,
    fontFamily: 'Roboto_Medium',
    top: -100,
  },
  list:{
    width: '100%',
    height: '100%',
  },
  list_row:{
    backgroundColor: 'white',
    margin: '5%',
    paddingTop: 20,
    paddingBottom: 30,
    paddingHorizontal: 30,
    borderRadius: 15,
    width: '90%',
    shadowColor: '#444',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
  },
  list_row_content:{
    fontSize: 15,
    fontFamily: 'Roboto',
  },
  button_container:{
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 13,
    width: 60,
    height: 60,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
  },
  button_right:{
    backgroundColor: vars.appColorRed,
    shadowColor: vars.appColorRed,
  },
  button_left:{
    backgroundColor: vars.appColorBlue,
    shadowColor: vars.appColorBlue,
  },
  button_icon: {
    height: 20,
    width: 20,
  },
});
