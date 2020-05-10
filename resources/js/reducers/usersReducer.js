import { SET } from '../types/usersTypes';

const INITIAL_STATE = { isOn: false }

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case SET:
            return {
                ...state,
                isOn: action.payload
            }

        default:
            return state;
    }
}