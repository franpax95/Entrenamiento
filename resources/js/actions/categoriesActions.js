import axios from 'axios';
import { GET, LOADING, ERROR, CHANGE_NAME, SAVE, RESET } from '../types/categoriesTypes';

export const get = () => async (dispatch) => {
    dispatch({ 
        type: LOADING 
    });

    try{
        const response = await axios.get('/api/categories');
        dispatch({
            type: GET,
            payload: response.data
        });
    }catch(error){
        console.log('categoriesActionsError: ' + error.message);
        dispatch({
            type: ERROR,
            payload: 'No es posible acceder a categorías en este momento.'
        });
    }
}

export const erase = (category_id) => async (dispatch) => {
    dispatch({
        type: LOADING
    });

    try{
        await axios.delete(`/api/categories/${category_id}`);
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

export const changeName = (newName) => (dispatch) => {
    dispatch({
        type: CHANGE_NAME,
        payload: newName
    });
}

export const addCategory = (category) => async (dispatch) => {
    dispatch({
        type: LOADING
    });

    try{
        await axios.post('/api/categories', category);

        dispatch({
            type: SAVE
        });
    }catch(error){
        dispatch({
            type: ERROR,
            payload: 'No se puedo agregar la categoría.'
        })
    }
}

export const editCategory = (category) => async (dispatch) => {
    dispatch({
        type: LOADING
    });

    try{
        await axios.put(`/api/categories/${category.id}`, category);
        dispatch({
            type: SAVE
        });
    }catch(error){
        dispatch({
            type: ERROR,
            payload: 'No se pudo editar la categoría: ' + error
        });
    }
}

export const resetForm = () => (dispatch) => {
    dispatch({
        type: RESET
    });
}