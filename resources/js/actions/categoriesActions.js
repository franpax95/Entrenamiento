import axios from 'axios';
import { GET, LOADING, ERROR } from '../types/categoriesTypes';

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