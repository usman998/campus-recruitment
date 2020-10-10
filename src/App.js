import React from 'react';
import Navigation from './config/routes'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
// import DashboardAdmin from './Dashboard/Admin/index'



function App() {
  return (
    <div>
      <Router>
        <Navigation />
      </Router>
    </div>
  );
}
export default App;
