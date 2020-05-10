import { GET, LOADING, ERROR, SAVE, SET, SET_KEY } from '../types/routinesTypes';

const INITIAL_STATE = {
    routines: [],
    routine: {},
    exercise: {},
    currentKey: '',
    loading: false,
    error: '',
    goBack: false
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case GET:
            return {
                ...state,
                routines: action.payload,
                loading: false,
                error: '',
                goBack: false
            }

        case LOADING:
            return {
                ...state, 
                loading: true
            }

        case SAVE:
            return {
                ...state,
                routines: {},
                loading: false,
                error: '',
                goBack: true
            }
        
        case ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            }

        case SET:
            return {
                ...state,
                routine: action.payload.routine,
                exercise: action.payload.exercise
            }

        case SET_KEY:
            return {
                ...state,
                currentKey: action.payload
            }

        default:
            return state;
    }
}