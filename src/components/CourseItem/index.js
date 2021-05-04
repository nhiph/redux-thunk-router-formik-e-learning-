import React, { Component } from 'react'

export default class CourseItem extends Component {
    render() {
        let {HinhAnh, TenKhoaHoc, NguoiTao} = this.props.item;
        return (
            <div className="card p-2 mb-4">
                <img src={HinhAnh} style={{width: "100%", height: 280}}/>
                <p className="lead">{TenKhoaHoc}</p>
                <p className="lead">{NguoiTao}</p>
                <p className="lead">5.0</p>
                <button className="btn btn-success">Go to Detail</button>
            </div>
        )
    }
}
