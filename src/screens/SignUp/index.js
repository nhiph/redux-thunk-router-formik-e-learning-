import React, { Component } from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import {userSerVice} from '../../Services';
import {signupUserSchema} from '../../Services/Users';


class SignUpScreen extends Component {
    handleSubmit = (values) => {
        userSerVice
        .signUp(values)
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        })

    }

    render() {
        return (
            <div className="w-50 mx-auto">
                <h1 className="display-4 text-center">Sign Up</h1>
                <Formik 
                initialValues = {{
                    TaiKhoan: '',
                    MatKhau: '',
                    HoTen: '',
                    Email: '',
                    SoDT: '',
                    MaLoaiNguoiDung: 'GP01'
                }}
                validationSchema={signupUserSchema}
                onSubmit={this.handleSubmit}
                render={(formikProps) => (
                    <Form>
                    <div className="form-group">
                        <label>Username: </label>
                        <Field 
                            type="text" 
                            className="form-control" 
                            name="TaiKhoan" 
                            onChange={formikProps.handleChange} />
                        <ErrorMessage name="TaiKhoan"/>
                    </div>
                    <div className="form-group">
                        <label>Password: </label>
                        <Field 
                            type="password" 
                            className="form-control" 
                            name="MatKhau" 
                            onChange={formikProps.handleChange}/>
                        <ErrorMessage name="MatKhau"/>
                        
                    </div>
                    <div className="form-group">
                        <label>Fullname: </label>
                        <Field 
                            type="text" 
                            className="form-control" 
                            name="HoTen" 
                            onChange={formikProps.handleChange}/>
                        <ErrorMessage name="HoTen"/>
                        
                    </div>
                    <div className="form-group">
                        <label>Email: </label>
                        <Field 
                            type="text" 
                            className="form-control" 
                            name="Email" 
                            onChange={formikProps.handleChange}/>
                        <ErrorMessage name="Email"/>
                        
                    </div>
                    <div className="form-group">
                        <label>Phone number: </label>
                        <Field 
                            type="text" 
                            className="form-control" 
                            name="SoDT" 
                            onChange={formikProps.handleChange}/>
                        <ErrorMessage name="SoDT">
                            {
                                (msg) => <div className="alert alert-danger">{msg}</div> 
                            }
                        </ErrorMessage>
                        
                    </div>
                    <div className="form-group">
                        <label>ID group: </label>
                        <Field 
                            component = "select"
                            className="form-control" 
                            name="MaLoaiNguoiDung"
                            onChange={formikProps.handleChange}>
                            <option>GP01</option>
                            <option>GP02</option>
                            <option>GP03</option>
                            <option>GP04</option>
                            <option>GP05</option>
                            <option>GP06</option>
                            <option>GP07</option>
                            <option>GP08</option>
                            <option>GP09</option>
                            <option>GP10</option>
                        </Field>
                        <ErrorMessage name="MaLoaiNguoiDung"/>

                    </div>
                    <div className="text-center">
                        <button className="btn btn-success">Submit</button>
                    </div>
                </Form>
                )}/>
            </div>
        )
    }
}

export default SignUpScreen;