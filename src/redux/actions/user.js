import { userSerVice } from '../../Services';
import {FETCH_CREDENTIALS} from './types';
import {createAction} from './index';

export const login = (user) => {
    return (dispatch) => {
        userSerVice.signIn(user)
        .then(res => {
            console.log(res.data);
            dispatch(createAction(FETCH_CREDENTIALS, res.data));
            localStorage.setItem('credentials', JSON.stringify(res.data))
        })
        .catch(err => {console.log(err)})
    }
}