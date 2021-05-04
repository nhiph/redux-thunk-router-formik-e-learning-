import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {courseSerVice} from '../../Services/index';
import {createAction} from '../../redux/actions';
import { FETCH_COURSE_DETAIL } from '../../redux/actions/types';


class CourseDetailScreen extends Component {

    componentDidMount(){
        courseSerVice
        .fetchCourseDetail()
        .then(
            (res) => {
                console.log(res.data);
                this.props.dispatch(createAction(FETCH_COURSE_DETAIL, res.data))
            }
        )
        .catch(
            (err) => {
                console.log(err);
            }
        )
    }

    render() {
        return (
            <div>
                <img src={this.props.courseDetail.hinhAnh} />
                <h3>{this.props.courseDetail.tenKhoaHoc}</h3>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    courseDetail: state.course.courseDetail || {
        MaKhoaHoc: '',
        TenKhoaHoc: '',
        HinhAnh: '',
        NguoiDung: {
            TaiKhoan: '',
            HoTen: ''
        }
    }
})

export default connect(mapStateToProps)(CourseDetailScreen);