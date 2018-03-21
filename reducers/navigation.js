import { NavigationActions } from 'react-navigation';
import { AppNavigator } from '../navigation/index.js';

const secondAction = AppNavigator.router.getActionForPathAndParams('Notes');
const initialNavState = AppNavigator.router.getStateForAction({
  secondAction
});

const nav = (state = initialNavState, action) => {
  let nextState;
  switch (action.type) {
  case 'NAVIGATE':
    nextState = AppNavigator.router.getStateForAction(
      NavigationActions.navigate({ routeName: action.screen }),
      state
    );
    break;
  case 'NAVIGATE_BACK':
    nextState = AppNavigator.router.getStateForAction(
      NavigationActions.back(),
      state
    );
    break;
  default:
    break;
  }
  return nextState || state;
};

export default nav;
