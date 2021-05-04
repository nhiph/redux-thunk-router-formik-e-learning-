import {combineReducers} from 'redux';
import CourseReducer from './CourseReducer';

const RootReducer = combineReducers({
    course: CourseReducer
});

export default RootReducer;