import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './sigup.css';
import firebase from './firebaseConfig';

function Signup() {
  const [ name, setName ] = useState ('');
  const [ email, setEmail ] = useState ('');
  const [ pass, setPass ] = useState ('');
  const [showPassword, setShowPassword] = useState(false);


  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };


  const submit = async(e) =>{
    e.preventDefault();
    try{

      const user = await firebase.auth().createUserWithEmailAndPassword(email, pass)
      if (user){
        alert("Account Created successfully !")
        sessionStorage.setItem('email', email);
        sessionStorage.setItem('username', name);
        window.location.href='/login'
      }

    }
    catch (error){

      alert(error)

    }

  }

  return (
   <div className='content'>
     <div className='main_container_signup'>
       <div className='header_1'>
        <h2> Sign Up </h2>
       </div>
       <div className='box'>
         <input type="text" value={name} placeholder='User name'onChange={(e) => setName(e.target.value)} ></input>
       </div>
       <div className='box'>
         <input type="email" value={email} placeholder='E-mail'onChange={(e) => setEmail(e.target.value)}></input>
       </div>
       <div className='box'>
         <input type={showPassword ? 'text' : 'password'} value={pass} placeholder="Password" onChange={(e) => setPass(e.target.value)} />
         <i className={`fa-regular ${showPassword ? 'fa-eye' : 'fa-eye-slash'}`} onClick={togglePasswordVisibility} id="show_password"></i>

       </div>
       <p> Allready Have an Account <Link to="/login"> Login</Link></p>
       <button onClick={submit}> Sign Up </button>
     </div>
   
   </div>
  )
}

export default Signup