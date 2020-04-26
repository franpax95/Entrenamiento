import { GET, LOADING, ERROR, CHANGE_NAME, SAVE, RESET, SHOW } from '../types/categoriesTypes';

const INITIAL_STATE = {
    categories: [],
    exercises: [],
    loading: false,
    error: '',
    catName: '',
    goBack: false,
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case GET:
            return {
                ...state,
                categories: action.payload,
                loading: false,
                error: '',
                goBack: false
            }

        case SHOW:
            return {
                ...state,
                exercises: action.payload,
                loading: false,
                error: '',
                //goBack: false
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
                catName: action.payload
            }

        case SAVE:
            return {
                ...state, 
                categories: {}, //Reseteo las tareas para buscarlas nuevamente
                loading: false,
                error: '',
                catName: '',
                goBack: true
            }

        case RESET:
            return {
                ...state,
                catName: ''
            }


        default:
            return state;
    }
}