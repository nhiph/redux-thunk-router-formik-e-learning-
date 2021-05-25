import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {courseSerVice} from '../../Services/index';
import {createAction} from '../../redux/actions';
import {fetchDetailCourse} from '../../redux/actions/course';


class CourseDetailScreen extends Component {
    
    componentDidMount(){
        this.props.dispatch(fetchDetailCourse(this.props.match.params.courseId))
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
    //neu lay tren store null thi se lay object {} ben duoi 
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