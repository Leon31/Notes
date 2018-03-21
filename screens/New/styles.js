import { StyleSheet } from 'react-native';
import vars from '../../commonStyle';

export default StyleSheet.create({
  new_container:{
    flex: 1,
    alignItems: 'center',
    backgroundColor:'white',
  },
  new_input: {
    fontSize: 15,
    margin: '12%',
    fontFamily: 'Roboto',
    color: '#444',
    paddingTop: 30,
    paddingHorizontal: 30,
    borderRadius: 15,
    width: '90%',
    height: 150,
    shadowColor: '#444',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
  },
  new_add_btn:{
    borderRadius: 10,
    backgroundColor: vars.appColorBlue,
    marginTop: 30,
    marginLeft: '10%',
    width: '80%',
    shadowColor: vars.appColorBlue,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 8,
  },
});
