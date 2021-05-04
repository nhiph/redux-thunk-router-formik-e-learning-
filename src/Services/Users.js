import axios from 'axios';
import * as yup from 'yup';

export const signupUserSchema = yup.object().shape({
    TaiKhoan: yup.string().required('*Field is required!'),
    MatKhau: yup.string().required('*Field is required!'),
    HoTen: yup.string().required('*Field is required!'),
    Email: yup
        .string()
        .required('*Field is required!')
        .email('*Email is invalid'),
    SoDT: yup.string().required().matches(/^[0-9]+$/),
    MaLoaiNguoiDung: yup.string().required('*Field is required!')
})

class UserSerVice{
    signUp(data){
        return axios({
            url: 'http://svcy.myclass.vn/api/QuanLyTrungTam/DangKy',
            method: 'POST',
            data: data
        });
    }
}

export default UserSerVice;