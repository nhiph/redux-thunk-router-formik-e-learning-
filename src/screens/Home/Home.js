import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import CourseItem from '../../components/CourseItem';
import {courseSerVice, courseService} from '../../Services/index';
import {createAction} from '../../redux/actions';
import { FETCH_COURSES } from '../../redux/actions/types';

class HomeScreen extends Component {

    componentDidMount(){
        // axios return promise ES6. k bk khi nao  callAPI xong, promise object co 2 phuong thuc .then va catch
        courseSerVice
        .fetchCourses()
        .then(
            (res) => {console.log(res.data);
                this.props.dispatch(createAction(FETCH_COURSES, res.data))
            })
        .catch(
            (err) => {console.log(err);
            })
    }

    render() {
        return (
            <div>
                <h1 className="display-4 text-center">Danh sach khoa hoc</h1>
                <div className="container">
                <div className="row">
                    {this.props.courseList.map((item, index) => {
                        return <div className="col-3">
                            <CourseItem item={item}/>
                        </div>
                    })}
                </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    courseList: state.course.courses
})

export default connect(mapStateToProps)(HomeScreen);