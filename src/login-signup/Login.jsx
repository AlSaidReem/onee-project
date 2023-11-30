import React, { useState } from 'react'
import { Link } from 'react-router-dom';
// import './login.css';
import firebase from './firebaseConfig';

function Login() {
  
  const [ email, setEmail ] = useState ('');
  const [ pass, setPass ] = useState ('');
  const [showPassword, setShowPassword] = useState(false);


  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };



  const submit = async (e) => {
    e.preventDefault();
    try {
      const user = await firebase.auth().signInWithEmailAndPassword(email, pass);
  
      if (user) {
        sessionStorage.setItem('isLoggedIn', 'true');
        sessionStorage.setItem('email', email);
        sessionStorage.setItem('pass', pass);

  
        if (email === 'admin@gmail.com') {
          window.location.href = '/';
        } else {
          window.location.href = '/';
        }
      }
    } catch (error) {
      console.error('Login Error:', error.message);
      alert('Invalid email or password!');
    }
  };
  
  
   

  return (
   <>
   <div className='content'>
     <div className='main_container_signup'>
       <div className='header_1'>
        <h2> Login </h2>
       </div>
       <div className='box'>
         <input type="email" value={email} placeholder='E-mail'onChange={(e) => setEmail(e.target.value)}></input>
       </div>
       <div className='box'>
       <input type={showPassword ? 'text' : 'password'} value={pass} placeholder="Password" onChange={(e) => setPass(e.target.value)} />
         <i className={`fa-regular ${showPassword ? 'fa-eye' : 'fa-eye-slash'}`} onClick={togglePasswordVisibility} id="show_password"></i>
       </div>
       <p> Don't Have an Account <Link to="/signup"> Create Account </Link></p>
       <button onClick={submit}> Login  </button>
     </div>
     </div>
   
   </>
  )
}

export default Login