import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class CourseItem extends Component {
    render() {
        let {HinhAnh, TenKhoaHoc, NguoiTao, MaKhoaHoc} = this.props.item;
        return (
            <div className="card p-2 mb-4" style={{width: "100%", height: "450px"}}>
                <img src={HinhAnh} style={{width: "100%", height: "280px"}}/>
                <p className="lead">{TenKhoaHoc}</p>
                <p className="lead">{NguoiTao}</p>
                <p className="lead">5.0</p>
                <Link to={`/detail/${MaKhoaHoc}`} className="btn btn-success">Go to Detail</Link>
            </div>
        )
    }
}
