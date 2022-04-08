import Splash from './features/registration/splash/splash';
import RegistrationSuccess from './features/registration/registration-success/registrationSuccess';
import  Dashboard from './features/dashboard';
import Notifications from './features/notifications/notifications';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.scss';

function App() {
  return (
    <div className="App">
      {/* <Splash /> */}
      {/* <RegistrationSuccess /> */}
      <Dashboard />
      {/* <Notifications /> */}
    </div>
  );
}

export default App;
