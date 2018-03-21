import { combineReducers } from 'redux';

import notes from './notes';
import nav from './navigation';
import pages from './pages';
import error from './error';

const reducers = combineReducers({
  nav,
  notes,
  error,
  pages,
});

export default reducers;
