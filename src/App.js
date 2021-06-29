import React from 'react';
import {
  BrowserRouter as BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import 'antd/dist/antd.css';

// page imports -------------------------
import HomePage from './Components/Pages/HomePage/HomePage';
import OurService from './Components/Pages/OurServicesPage/OurServicesPage';
import SignUpPage from './Components/Pages/SignUpPage/SignUpPage';
import TollService from './Components/Pages/TollServicePage/TollServicesPage';
import AdminPage from './Components/Pages/AdminPage/AdminPage';
import HireRanger from './Components/Pages/HireRangerPage/HireRangerPage';
import TransolOffice from './Components/Pages/TransolOfficePage/TransolOfficePage';
import Profile from './Components/Pages/ProfilePage/ProfilePage';
import WelcomePage from './Components/Pages/WelcomePage/WelcomePage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={WelcomePage} />
        <Route exact path="/signup" component={SignUpPage} />
        <Route exact path="/homepage" component={HomePage} />
        <Route exact path="/ourservices" component={OurService} />
        <Route exact path="/tollservices" component={TollService} />
        <Route exact path="/adminpanel" component={AdminPage} />
        <Route exact path="/hire" component={HireRanger} />
        <Route exact path="/transoloffice" component={TransolOffice} />
        <Route exact path="/profile" component={Profile} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
