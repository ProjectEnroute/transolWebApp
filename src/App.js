import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './Component/pages/HomePage';
import OurService from './Component/pages/OurService';
import SignUpPage from './Component/pages/SignUpPage';
import TollService from './Component/pages/TollService';
import AdminPage from './Component/pages/AdminPage';
import 'antd/dist/antd.css';
import HireRanger from './Component/pages/HireRanger';
import TransolOffice from './Component/pages/TransolOffice';
import Profile from './Component/pages/Profile';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/homepage" component={HomePage} />
        <Route exact path="/ourservices" component={OurService} />
        <Route exact path="/tollservices" component={TollService} />
        <Route exact path="/adminpanel" component={AdminPage} />
        <Route exact path="/hire" component={HireRanger} />
        <Route exact path="/transoloffice" component={TransolOffice} />
        <Route exact path="/profile" component={Profile} />
      </Switch>
    </Router>
  );
}

export default App;
