const initialState = {
    courses: [],
    courseDetail: {}
}

const CourseReducer = (state = initialState, action) => {
    switch(action.type){

        case 'FETCH_COURSES': {
            const {payload} = action;
            console.log(action);
            state.courses = payload;
            return {...state};
        }

        case 'FETCH_COURSE_DETAIL':{
            state.courseDetail = action.payload;
            return {...state};
        }

        default: 
            return state;
    }
};
 
export default CourseReducer;
