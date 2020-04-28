import { GET, LOADING, ERROR } from '../types/routinesTypes';

const INITIAL_STATE = {
    routines: [],
    routine: {},
    loading: false,
    error: ''
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case GET:
            return {
                ...state,
                routines: action.payload,
                loading: false,
                error: '',
            }

        case LOADING:
            return {
                ...state, 
                loading: true
            }
        
        case ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        default:
            return state;
    }
}