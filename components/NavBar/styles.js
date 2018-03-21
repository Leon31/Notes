import { StyleSheet } from 'react-native';
import vars from '../../commonStyle';

export default StyleSheet.create({
  nav_container: {
    height: 110,
    paddingLeft: 20,
    paddingTop: 35,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  nav_title: {
    color: 'black',
    fontFamily:'Roboto_Bold',
    fontSize: 35,
    marginBottom: vars.WINDOW.height == 812 ? 0 : 3,
  },
  nav_icon: {
    paddingTop: 3,
    paddingBottom: 3,
    height: 25,
    width: 25,
  },
  nav_icon__create: {
    height: 17,
    width: 17,
  },
  nav_buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '25%',
    right: 30,
  },
});
