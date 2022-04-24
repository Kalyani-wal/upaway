import React from "react";
import {
  Routes,
  Route
} from "react-router-dom";
import Splash from "./features/registration/splash/splash";
import Registration from "./features/registration/registration/registration";
import Login from "./features/registration/login/login";
import RegistrationSuccess from "./features/registration/registration-success/registrationSuccess";
import Dashboard from "./features/dashboard";
import Notifications from "./features/notifications/notifications";
import TravelersActivities from './features/travelers/travelers-activities/travelers-activities';
import TravelersProfile from './features/travelers/travelers-profile';
import Settings from './features/settings';
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.scss";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/splash" element={<Splash />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration-success" element={<RegistrationSuccess />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/travelers" element={<TravelersActivities />}></Route>
        <Route path="/travelers/1/profile" element={<TravelersProfile />}></Route>
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
}

export default App;
