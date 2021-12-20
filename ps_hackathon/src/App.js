import './App.css';
import Login from '../src/Pages/Login'
import SignUp from '../src/Pages/SignUp';
import VendorSignUp from '../src/Pages/VendorSignUp'
import { Route, Routes } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import VendorLogin from './Pages/VendorLogin';
import Homepage from './Pages/Homepage';
import Quotations from './Pages/Quotations';
import Mainpage from './Pages/Mainpage';
import CreateListPage from './Pages/CreateListPage'
import VendorAfterSignUpPage from './Pages/VendorAfterSignUpPage'
import Dashboard from './Pages/Dashboard';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Mainpage />} />
          <Route exact path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/vendorsignup' element={<VendorSignUp />} />
          <Route path='/vendorlogin' element={<VendorLogin />} />
          <Route path='/clienthomepage' element={<Homepage />} />
          <Route path='/quotations' element={<Quotations />} />
          <Route path='/createlist' element={<CreateListPage />} />
          <Route path='/clientlist' element={<VendorAfterSignUpPage />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
