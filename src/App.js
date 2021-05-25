import React, { Fragment, useEffect } from 'react';
import CourseItem from './components/CourseItem';
import HomeScreen from './screens/Home/Home';
import CourseDetailScreen from './screens/Detail/index';
import SignUpScreen from './screens/SignUp/index';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './layouts/header';
import SigninScreen from './screens/SignIn/index';
import { createAction } from './redux/actions';
import { FETCH_CREDENTIALS } from './redux/actions/types';
import {connect} from 'react-redux'

function App() {

  const getCredentiaslLocal = () => {
    let credentials = localStorage.getItem('credentials');
    if(credentials){ // khi tat may, credentials tren store mat di, nen set credentials trong local, 
      // vua mo ung dung, neu local co user, truyen user tu local len store
      this.props.dispatch(createAction(FETCH_CREDENTIALS,JSON.parse(credentials)))
    }
  }

  useEffect(() => {
    getCredentiaslLocal()
  }, [])

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/detail/:courseId" component={CourseDetailScreen} />
        <Route path="/signup" component={SignUpScreen} />
        <Route path="/signin" component={SigninScreen} />
        <Route path="/" component={HomeScreen} />
        {/* Cach2: gan exact attribute vao 4 route */}
      </Switch>
    </BrowserRouter>
  );
}

export default connect()(App);
