import React, { Component } from 'react';
import {Link, NavLink} from 'react-router-dom';
import {connect} from 'react-redux';

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
                <a className="navbar-brand" href="#">E-LEARNING</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink activeStyle={{color: 'orange'}} exact to="/" className="nav-link">Home</NavLink>
                        </li>
                    </ul>

                    <ul className="navbar-nav">
                    {this.props.credentials ? <li className="nav-item">
                            <span className="nav-link">Hi, {this.props.credentials.HoTen}</span>
                        </li> : <>
                        <li className="nav-item">
                            <NavLink activeStyle={{color: 'orange'}} to="/signup" className="nav-link">Sign up</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeStyle={{color: 'orange'}} to="/signin" className="nav-link">Sign in</NavLink>
                        </li>
                        </>}
                        
                    </ul>
                </div>
            </nav>

        )
    }
}

const mapStateToProps = state => {
    return{
        credentials: state.user.credentials
    }
}

export default connect(mapStateToProps)(Header);
