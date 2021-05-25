import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import {connect} from 'react-redux';
import {login} from '../../redux/actions/user';

class SigninScreen extends Component {
    render() {
        return (
            <Formik
                initialValues={{
                    TaiKhoan: '',
                    MatKhau: ''
                }}
                onSubmit={(values) => {
                    console.log(values);
                    this.props.dispatch(login(values))
                }}
                render={(formikProps) => (
                    <Form className="w-50 mx-auto">
                        <h1>Sign In</h1>
                        <div className="form-group">
                            <label>Username: </label>
                            <Field 
                                type="text" 
                                className="form-control" 
                                name="TaiKhoan"
                                onChange={formikProps.handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Password: </label>
                            <Field 
                                type="password" 
                                className="form-control" 
                                name="MatKhau"
                                onChange={formikProps.handleChange}    
                            />
                        </div>
                        <button type="submit" className="btn btn-success">Submit</button>
                    </Form>
                )}
            />
        )
    }
}

export default connect()(SigninScreen);