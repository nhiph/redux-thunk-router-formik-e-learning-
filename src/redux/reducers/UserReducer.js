import {FETCH_CREDENTIALS} from '../actions/types';

let initialState = {
    credentials: null //ban dau chua dang nhap => null
}

const UserReducer = (state = initialState, action) => {
    switch (action.type){
        case FETCH_CREDENTIALS: 
            state.credentials = action.payload;
            return {...state};
        default:
            return state;
    }
}
export default UserReducer;