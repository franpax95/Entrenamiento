import { combineReducers } from 'redux';
import categoriesReducer from './categoriesReducer';
import exercisesReducer from './exercisesReducer';

export default combineReducers({
    categoriesReducer,
    exercisesReducer
});