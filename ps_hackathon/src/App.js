import './App.css';
import Login from '../src/Pages/Login'
import SignUp from '../src/Pages/SignUp';
import VendorSignUp from '../src/Pages/VendorSignUp'
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import VendorLogin from './Pages/VendorLogin';
import Homepage from './Pages/Homepage';
import Quotations from './Pages/Quotations';
import Mainpage from './Pages/Mainpage';
import CreateListPage from './Pages/CreateListPage'
import VendorAfterSignUpPage from './Pages/VendorAfterSignUpPage'
// import ProtectedRoute from './ProtectedRoute';
import { useState, useEffect } from 'react';
import { Redirect, useHistory } from 'react-router-dom'

function App() {
  let history = useHistory();
  let token = localStorage.getItem('Token')
  const [isAuth, setIsAuth] = useState(false);
  useEffect(() => {
    if (token) {
      setIsAuth(true)
    } else {
      setIsAuth(false)
    }
  }, [token])
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/' component={Mainpage} />
          <Route exact path='/login' component={Login} />
          <Route path='/signup' component={SignUp} />
          <Route path='/vendorsignup' component={VendorSignUp} />
          <Route path='/vendorlogin' component={VendorLogin} />
          <Route path='/clienthomepage' render={(props) => isAuth ? <Homepage /> : <SignUp />} />
          <Route path='/quotations' render={(props) => isAuth ? <Quotations /> : <SignUp />} />
          <Route path='/clientlist' render={(props) => isAuth ? <VendorAfterSignUpPage /> : <VendorSignUp />} />
          <Route path='/createlist' render={(props) => isAuth ? <CreateListPage /> : <SignUp />} />
        </Switch>

      </Router>

    </>
  );
}

export default App;
