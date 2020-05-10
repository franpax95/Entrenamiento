import axios from 'axios';
import { 
    GET, 
    LOADING, 
    ERROR, 
    CHANGE_NAME, 
    CHANGE_CATEGORY, 
    CHANGE_DESCRIPTION, 
    CHANGE_IMAGE, 
    SAVE, 
    SHOW
} from '../types/exercisesTypes';

export const get = () => async (dispatch) => {
    dispatch({ 
        type: LOADING 
    });

    try{
        const response = await axios.get('/api/exercises');
        if(response.data.length){
            dispatch({
                type: GET,
                payload: response.data
            });
        }else{
            dispatch({
                type: ERROR,
                payload: 'No hay ejercicios todavía.'
            });
        }
    }catch(error){
        console.log('exercisesActionsError: ' + error.message);
        dispatch({
            type: ERROR,
            payload: 'No es posible acceder a ejercicios en este momento.'
        });
    }
}

export const show = (exercise) => async (dispatch) => {
    dispatch({
        type: LOADING
    });

    try{
        const response = await axios.get(`/api/exercises/${exercise.id}`);
        dispatch({
            type: SHOW,
            payload: response.data
        });
    }catch(error){
        console.log(error.message);
        dispatch({
            type: ERROR,
            payload: 'No se puede acceder a este ejercicio en este momento'
        });
    }
}

export const changeName = (newName) => (dispatch) => {
    dispatch({
        type: CHANGE_NAME,
        payload: newName
    });
}

export const changeCategory = (newCategory) => (dispatch) => {
    dispatch({
        type: CHANGE_CATEGORY,
        payload: newCategory
    });
}

export const changeDescription = (newDescription) => (dispatch) => {
    dispatch({
        type: CHANGE_DESCRIPTION,
        payload: newDescription
    });
}

export const changeImage = (newImg) => (dispatch) => {
    dispatch({
        type: CHANGE_IMAGE,
        payload: newImg
    });
}

export const addExercise = (formData) => async (dispatch) => {
    dispatch({
        type: LOADING
    });

    try{
        await axios.post('/api/exercises', formData);

        dispatch({
            type: SAVE
        });
    }catch(error){
        dispatch({
            type: ERROR,
            payload: error.message
        })
    }
}

export const erase = (exercise_id) => async (dispatch) => {
    dispatch({
        type: LOADING
    });

    try{
        await axios.delete(`/api/exercises/${exercise_id}`);
        dispatch({
            type: GET,
            payload: {}
        });
    }catch(error){
        dispatch({
            type: ERROR,
            error: error.message
        });
    }
}

export const clean = () => (dispatch) => {
    dispatch({
        type: GET,
        payload: {}
    });
}