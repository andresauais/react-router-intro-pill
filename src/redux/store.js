import { createStore } from 'redux';
import reducers from './reducers';

const store = createStore(reducers); //middleware

export default store;