import { combineReducers } from 'redux';
import categoriesReducer from './categoriesReducer';
import exercisesReducer from './exercisesReducer';
import routinesReducer from './routinesReducer';

export default combineReducers({
    categoriesReducer,
    exercisesReducer,
    routinesReducer
});