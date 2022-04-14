import React from "react";
import {
  Routes,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Splash from "./features/registration/splash/splash";
import Registration from "./features/registration/registration/registration";
import Login from "./features/registration/login/login";
import RegistrationSuccess from "./features/registration/registration-success/registrationSuccess";
import Dashboard from "./features/dashboard";
import Notifications from "./features/notifications/notifications";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.scss";

function App() {
  return (
    <div className="App">
      {/* <Dashboard /> */}
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/splash" element={<Splash />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration-success" element={<RegistrationSuccess />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/notifications" element={<Notifications />} />
      </Routes>
    </div>
  );
}

export default App;
