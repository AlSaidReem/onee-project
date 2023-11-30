import React from 'react';
import './App.css';
import Header from './Header/Header.jsx';
import Home from './Home/Home.jsx';
import Login from './login-signup/Login.jsx';
import Signup from './login-signup/Signup';
// import Contract from './contract/Contract.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Admin from './admin/Admin.jsx';
import UserProfile from './profile/UserProfile.jsx';
import ContractDashboard from './ContractDashvoard/ContractDashboard.jsx';
import Footer from './components/footer'


// contracts 
import Contracts from './components/Contracts';
import ContractHome from './components/ContractHome';
import ContractsTest from './components/ContractsTest';
import ShowContracts from './components/ShowContracts';

function App() {
  return (
    <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
        
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          {/* <Route path='/admin' element={<Admin />} /> */}
          <Route path='/userprofile' element={<UserProfile />} />
          <Route path='/contractdashboard' element={<ContractDashboard />} />

          {/* contracts */}
          <Route path='/contracthome' element={<ContractHome/>}/>
          <Route path='/contracts' element={<Contracts/>}/>
          <Route path='/contractstest' element={<ContractsTest/>}/>
          <Route path='/showcotracts' element={<ShowContracts/>}/>

        </Routes>
        <Footer />
    </Router>
  );
}

export default App;
