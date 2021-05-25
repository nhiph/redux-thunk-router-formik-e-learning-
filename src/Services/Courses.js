import axios from 'axios';

class CourseService{

    fetchCourses(){
        return axios({
            url: 'http://svcy.myclass.vn/api/QuanLyTrungTam/DanhSachKhoaHoc',
            method: 'GET'
        })
    }

    fetchCourseDetail(id){
        return axios({
            url: `/api/QuanLyTrungTam/ChiTietKhoaHoc/${id}`,
            method: 'GET'
        })
    }
}

export default CourseService;