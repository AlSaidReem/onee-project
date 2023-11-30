import React from 'react'

import '../styles/testContract.css'
import { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push, onValue } from 'firebase/database';

const firebaseConfig = {
    // Your Firebase configuration
    apiKey: "AIzaSyBiGggAEQ4MXk54dHPKxNW_ihMH9uPHjI0",
    authDomain: "reactproject-28e62.firebaseapp.com",
    projectId: "reactproject-28e62",
    storageBucket: "reactproject-28e62.appspot.com",
    messagingSenderId: "228654618265",
    appId: "1:228654618265:web:045b0f4a57f6cb480d0a08"
  };
  
  const firebaseApp = initializeApp(firebaseConfig);
  const database = getDatabase(firebaseApp);
  



function ShowContracts() {
    const [contractData, setContractData] = useState({
        email: '',
        playerName: '',
        phoneNumber: '',
   
      });
    
      const [validationError, setValidationError] = useState('');
      const [contractsList, setContractsList] = useState([]);
      useEffect(() => {
        const contractsRef = ref(database, 'contracts/players');
    
        onValue(contractsRef, (snapshot) => {
          if (snapshot.exists()) {
            const data = snapshot.val();
            const contractsArray = Object.keys(data).map((key) => ({ id: key, ...data[key] }));
            setContractsList(contractsArray);
          } else {
            setContractsList([]);
          }
        });
    
        return () => {
          // Cleanup the listener when the component unmounts
        };
      }, []);
    
    
      const handleSaveToFirebase = () => {
        // Check if all input fields are filled
        if (
        
          !contractData.email ||
          !contractData.playerName ||
          !contractData.phoneNumber 
        ) {
          setValidationError('Please fill in all fields');
          return;
        }
    
        const contractsRef = ref(database, 'contracts/players');
    
        push(contractsRef, contractData)
          .then(() => {
            alert('Data saved to Firebase!');
            setContractData({
              email: '',
              playerName: '',
              phoneNumber: '',
              contractContent: '',
            });
            window.location.href ='/'
            setValidationError('');
          })
          .catch((error) => {
            console.error('Error saving data to Firebase:', error);
          });
      };
  return (
    <>
    {contractsList.map((show) => (

    <div className="background" key={show.playerName}>
  <div className="container">
    <div className="screen">
      <div className="screen-header">
        <div className="screen-header-left">
          <div className="screen-header-button close"></div>
          <div className="screen-header-button maximize"></div>
          <div className="screen-header-button minimize"></div>
        </div>
        <div className="screen-header-right">
          <div className="screen-header-ellipsis"></div>
          <div className="screen-header-ellipsis"></div>
          <div className="screen-header-ellipsis"></div>
        </div>
      </div>
      <div className="screen-body">
        <div className="screen-body-item left">
          <div className="app-title">
            <span>CONTRACT</span>
          </div>
          <div className="app-contact">CONTACT INFO : {show.id}</div>
        </div>
        <div className="screen-body-item">
          <div className="app-form">
            <div className="app-form-group">
                {show.playerName}
            
            </div>
            <div className="app-form-group">
                {show.email}
           
            </div>
            <div className="app-form-group">
            {show.phoneNumber}
            </div>
          
            <div className="app-form-group buttons" >
                  <br/>
              <br/>
              <button className="app-form-button" onClick={handleSaveToFirebase}><a href='/'>Back</a></button>

            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</div>
          ))}


    </>  )
}

export default ShowContracts