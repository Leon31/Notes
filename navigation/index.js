import React from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';
import NavBar  from '../components/NavBar';
import New from '../screens/New';
import Notes from '../screens/Notes';


const NavigatorWithRootScreen = (routeName, screen) => {
  return StackNavigator({
    [routeName] : {
      screen,
      navigationOptions:{
        gesturesEnabled:false,
        header:(<NavBar/>),
      }
    }
  });
};


const HomeStack = StackNavigator({
  Notes: {
    screen: NavigatorWithRootScreen('Notes', Notes),
    navigationOptions:{header:()=>null}
  },
  New: {
    screen: NavigatorWithRootScreen('New', New),
    navigationOptions:{header:()=>null}
  },
},
{
  mode: 'modal',
  headerMode: 'none'
}
);

export const AppNavigator = StackNavigator({
  HomeStack: {
    screen: HomeStack,
    navigationOptions: {
      gesturesEnabled: false,
    }
  }
});

class AppWithNavigationState extends React.Component {
  render() {
    const { dispatch, nav } = this.props;
    return (
      <AppNavigator
        navigation = {addNavigationHelpers({
          dispatch,
          state:nav,
        })}
      />
    );
  }
}

const mapStateToProps = state => ({
  nav:state.nav
});

export default connect(mapStateToProps)(AppWithNavigationState);
