import {combineReducers} from 'redux';
import beer from './beer/beerReducer'; 

const reducers = combineReducers({
  beer
})

export default reducers;