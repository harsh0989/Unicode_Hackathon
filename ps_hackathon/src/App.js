import './App.css';
import Navbar from './Components/Component/Navbar';
import Login from '../src/Pages/Login'
import SignUp from '../src/Pages/SignUp';
import VendorSignUp from '../src/Pages/VendorSignUp'
import { Route, Routes } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import VendorLogin from './Pages/VendorLogin';
import CreateListPage from './Pages/CreateListPage';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/vendorsignup' element={<VendorSignUp />} />
          <Route path='/vendorlogin' element={<VendorLogin />} />
          <Route path='/' element={<CreateListPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
