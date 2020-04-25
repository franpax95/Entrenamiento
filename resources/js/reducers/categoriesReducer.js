import { GET, LOADING, ERROR } from '../types/categoriesTypes';

const INITIAL_STATE = {
    categories: [],
    loading: false,
    error: ''
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case GET:
            return {
                ...state,
                categories: action.payload,
                loading: false,
                error: ''
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