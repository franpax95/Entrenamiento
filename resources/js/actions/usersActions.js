import { SET } from '../types/usersTypes';

export const set = (isLog) => (dispatch) => {
    dispatch({
        type: SET,
        payload: isLog
    });
}