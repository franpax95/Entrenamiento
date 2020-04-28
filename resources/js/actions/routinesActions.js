import axios from 'axios';
import { 
    GET, 
    LOADING, 
    ERROR,
    SAVE
} from '../types/routinesTypes';

export const get = () => async (dispatch) => {
    dispatch({ 
        type: LOADING 
    });

    try{
        const response = await axios.get('/api/routines');
        dispatch({
            type: GET,
            payload: response.data
        });
    }catch(error){
        console.log('routinesActionsError: ' + error.message);
        dispatch({
            type: ERROR,
            payload: 'No es posible acceder a rutinas en este momento.'
        });
    }
}

export const addRoutine = (routine) => async (dispatch) => {
    dispatch({
        type: LOADING
    });

    try{
        await axios.post('/api/routines', routine);

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