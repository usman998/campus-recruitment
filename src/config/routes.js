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
// import AdminNav from '../component-common/AdminNav'
//                                  navbar 
// import Cv from '../Dashboard/Student/Cv'
// import StudentHome from '../Dashboard/Student/studenthome'
// import StudentProfile from '../Dashboard/Company/studentprofiles'
// import CompanyJobs from '../Dashboard/Student/companyjobs'

// import CompanyHome from '../Dashboard/Company/companyhome'
// import CreateJob from '../Dashboard/Company/createjobs'
// import CrJob from '../Dashboard/Company/createjobs'
import Studentdata from '../Dashboard/Admin/studentdata'
import Companydata from '../Dashboard/Admin/companydata'
// import Studentdeatil from '../Dashboard/Admin/studentdeatil'
import Companydeatil from '../Dashboard/Admin/companydeatil'
// import DashboardNavbar from '../Dashboard/DashboardNavbar'
function Navigation() {
  //   const [isAutheticated, setisAutheticated] = useState(false);

  //   function login() {
  //     setisAutheticated(true);
  //     console.log("loggedInUser:" + isAutheticated)
  //   }

  //   function logout() {
  //     setisAutheticated(false);
  //     console.log("loggedInUser:" + isAutheticated)
  //   }
  return (
    // isAutheticated ?
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

          {/* <Route path='/cv' component={Cv} />
          <Route path='/studenthome' component={StudentHome} />
          <Route path='/profile' component={StudentProfile} />
          <Route path='/companyjobs' component={CompanyJobs} /> */}

          {/* <Route path='/companyhome' component={CompanyHome} /> */}
          {/* <Route path='/createjobs' component={CreateJob} /> */}

          {/* <Route path='/companydata' component={Companydata} /> */}
          {/* <Route path='/studentdata' component={Studentdata} /> */}
          {/* <Route path='/companydeatil' component={Companydeatil} /> */}
          {/* <Route path='/studentdeatil' component={Studentdeatil} /> */}
          {/* <Route path='/dashboardnavbar' component={DashboardNavbar} /> */}
        </Switch>
      </Router>
    </div>
  )
}



export default Navigation;