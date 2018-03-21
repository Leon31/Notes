import { createStore} from 'redux';
import logger from 'redux-logger';

import reducers from '../reducers';


const store = createStore(
  reducers
);

export default store;
