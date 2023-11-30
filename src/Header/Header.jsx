import {React , useState , useEffect} from 'react';
import { Link } from 'react-router-dom';
import image from "../images/fotball_bg.png";
import './Header.css';


function Header() {
  // nave when scroll:
const [color , setColor ] = useState(false)
const changeColor = () =>{
  if (window.scrollY >= 15 ){
    setColor(true)
  }else{
    setColor(false)
  }
}
useEffect(() => {
  window.addEventListener('scroll', changeColor);
  return () => {
    window.removeEventListener('scroll', changeColor);
  };
}, []); 


/// session to admin and user:
  const isLoggedIn = sessionStorage.getItem('isLoggedIn');
  const isAdmin = sessionStorage.getItem('email') === 'admin@gmail.com';
  
  console.log('isAdmin:', isAdmin);
  console.log('isLoggedIn:', isLoggedIn);
  console.log('isAdmin:', isAdmin);
  console.log('Email in Session Storage:', sessionStorage.getItem('email'));
  console.log('Password in Session Storage:', sessionStorage.getItem('password'));


  /// logout:
  const handleLogout = () => {
    sessionStorage.clear();
    window.location.href = '/login';
  };
  
  return (
    <div className={color ? 'header headr-bg' : "header"}>
      <div>
        <img src={image} className="logo" alt="Logo"/>
      </div>
      <div>
        <ul className="navbar">
          <li>
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li>
            <Link to="/contracthome" className="nav-link">Contracts</Link>
          </li>
          {isLoggedIn ? (
  <>
    <li>
      <Link to="/" className="nav-link" onClick={handleLogout}>Logout</Link>
    </li>
    <li>
      {isAdmin ? (
        <Link to="/contractdashboard" className="nav-link">Dashboard</Link>
      ) : (
        <Link to="/userprofile" className="nav-link">Profile</Link>
      )}
    </li>
  </>
) : (
  <>
    <li>
      <Link to="/signup" className="nav-link">Signup</Link>
    </li>
    <li>
      <Link to="/login" className="nav-link">Login</Link>
    </li>
  </>
)}
        </ul>
      </div>
    </div>
  );
}

export default Header;
