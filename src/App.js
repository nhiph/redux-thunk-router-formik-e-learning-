import React, { Fragment } from 'react';
import CourseItem from './components/CourseItem';
import HomeScreen from './screens/Home/Home';
import CourseDetailScreen from './screens/Detail/index';
import SignUpScreen from './screens/SignUp/index';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './layouts/header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/detail/:courseId" component={CourseDetailScreen} />
        <Route path="/signup" component={SignUpScreen} />
        <Route path="/" component={HomeScreen} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
