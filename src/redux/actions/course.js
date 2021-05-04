import {courseSerVice, courseService} from '../../Services/index';
import { createAction } from '.';
import { FETCH_COURSES } from './types';
import { FETCH_COURSE_DETAIL } from './types';

// actions async (loai 2)

export const fetchCourses = () => {
    return (dispatch) => {
        // axios return promise ES6. k bk khi nao  callAPI xong, promise object co 2 phuong thuc .then va catch
        courseSerVice
        .fetchCourses()
        .then(
            (res) => {
                dispatch(createAction(FETCH_COURSES, res.data))
            })
        .catch(
            (err) => {console.log(err);
            })
    }
}

export const fetchDetailCourse = (id) => {
    return (dispatch) => {
        courseSerVice
        .fetchCourseDetail(id)
        .then(
            (res) => {
                console.log(res.data);
                dispatch(createAction(FETCH_COURSE_DETAIL, res.data))
            }
        )
        .catch(
            (err) => {
                console.log(err);
            }
        )
    }
}