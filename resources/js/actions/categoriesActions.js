import axios from 'axios';
import { GET, LOADING, ERROR, CHANGE_NAME, SAVE, RESET, SHOW } from '../types/categoriesTypes';

export const get = () => async (dispatch) => {
    dispatch({ 
        type: LOADING 
    });

    try{
        const response = await axios.get('/api/categories');
        if(response.data.length){
            dispatch({
                type: GET,
                payload: response.data
            });
        }else{
            dispatch({
                type: ERROR,
                payload: 'No hay categorías todavía.'
            });
        }
    }catch(error){
        console.log('categoriesActionsError: ' + error.message);
        dispatch({
            type: ERROR,
            payload: 'No es posible acceder a categorías en este momento.'
        });
    }
}

export const getExercises = (category) => async (dispatch) => {
    dispatch({
        type: LOADING
    });

    try{
        const response = await axios.get(`/api/categories/${category.id}`);
        dispatch({
            type: SHOW,
            payload: response.data
        });
    }catch(error){
        console.log('categoriesActionsError: ' + error.message);
        dispatch({
            type: ERROR,
            payload: 'No es posible acceder a los ejercicios ahora mismo.'
        })
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