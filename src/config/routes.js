import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from '../components/Home';
import Userlogin from '../components/UserLogin/index';
import AdminSignup from '../components/Admin/Signup/index';
import CompanySignup from '../components/Company/Signup/index';
import StudentSignup from '../components/Student/Signup/index';
import CustomNavbar from '../component-common/Navbar'
import DashboardStudent from '../Dashboard/Student/index'
import DashboardCompany from '../Dashboard/Company/index'
import DashboardAdmin from '../Dashboard/Admin/index'
import AdminNav from '../component-common/AdminNav'

function Navigation() {
  return (
    <div>
      <Router>
        <CustomNavbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/Login' component={Userlogin} />
          <Route path='/AdminSignup' component={AdminSignup} />
          <Route path='/StudentSignup' component={StudentSignup} />
          <Route path='/CompanySignup' component={CompanySignup} />
          {/* { <AdminNav />} */}
          <Route path='/DashboardStudent' component={DashboardStudent} />
          <Route path='/DashboardCompany' component={DashboardCompany} />
          <Route path='/DashboardAdmin' component={DashboardAdmin} />
        </Switch>
      </Router>
    </div>
  )
}



export default Navigation;