import axios from 'axios';

class CourseService{

    fetchCourses(){
        return axios({
            url: 'http://svcy.myclass.vn/api/QuanLyTrungTam/DanhSachKhoaHoc',
            method: 'GET'
        })
    }

    fetchCourseDetail(){
        return axios({
            url: '/api/QuanLyTrungTam/ChiTietKhoaHoc/{111}',
            method: 'GET'
        })
    }
}

export default CourseService;