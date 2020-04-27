import { GET, LOADING, ERROR, CHANGE_NAME, CHANGE_CATEGORY, CHANGE_DESCRIPTION, CHANGE_IMAGE, SAVE } from '../types/exercisesTypes';

const INITIAL_STATE = {
    exercises: [],
    exercise: [],
    loading: false,
    error: '',
    exName: '',
    exCategory: '',
    exDescription: '',
    exImg: '',
    goBack: false
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case GET:
            return {
                ...state,
                exercises: action.payload,
                loading: false,
                error: '',
                goBack: false
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

        case CHANGE_NAME:
            return {
                ...state,
                exName: action.payload
            }

        case CHANGE_CATEGORY:
            return {
                ...state,
                exCategory: action.payload
            }

        case CHANGE_DESCRIPTION:
            return {
                ...state,
                exDescription: action.payload
            }

        case CHANGE_IMAGE:
            return{
                ...state,
                exImg: action.payload
            }

        case SAVE:
            return {
                ...state,
                exercises: {},
                loading: false,
                error: '',
                exName: '',
                exCategory: '',
                exDescription: '',
                goBack: true
            }

        default:
            return state;
    }
}