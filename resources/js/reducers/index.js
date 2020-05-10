import { combineReducers } from 'redux';
import categoriesReducer from './categoriesReducer';
import exercisesReducer from './exercisesReducer';
import routinesReducer from './routinesReducer';
import usersReducer from './usersReducer';

export default combineReducers({
    categoriesReducer,
    exercisesReducer,
    routinesReducer,
    usersReducer
});