import { combineReducers } from 'redux';
import simpleReducer from './simpleReducer';
import owners from './landOwners'
export default combineReducers({
    owners
});
