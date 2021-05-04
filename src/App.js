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

function App() {

  const getCredentiaslLocal = () => {
    let credentials = localStorage.getItem('credentials');
    if(credentials){
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
      </Switch>
    </BrowserRouter>
  );
}

export default App;
