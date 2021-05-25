import React, { Component } from 'react';
import { connect } from 'react-redux';
import CourseItem from '../../components/CourseItem';
import {fetchCourses} from '../../redux/actions/course';

class HomeScreen extends Component {

    componentDidMount() {
        this.props.dispatch(fetchCourses()) //tuong duong mapDispatchToProps
    }

    render() {
        return (
            <div>
                <h1 className="display-4 text-center">Danh sach khoa hoc</h1>
                <div className="container">
                    <div className="row">
                        {this.props.courseList.map((item, index) => {
                            return <div className="col-3">
                                <CourseItem item={item} />  
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