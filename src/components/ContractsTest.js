import React from 'react'
import '../styles/testContract.css'
import { useEffect, useState } from 'react';
// import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push, onValue } from 'firebase/database';
import firebase from '../login-signup/firebaseConfig';


// const firebaseConfig = {
//     // Your Firebase configuration
//     apiKey: "AIzaSyBiGggAEQ4MXk54dHPKxNW_ihMH9uPHjI0",
//   authDomain: "reactproject-28e62.firebaseapp.com",
//   projectId: "reactproject-28e62",
//   storageBucket: "reactproject-28e62.appspot.com",
//   messagingSenderId: "228654618265",
//   appId: "1:228654618265:web:045b0f4a57f6cb480d0a08"
//   };
  
  // const firebaseApp = initializeApp(firebaseConfig);
  const database = getDatabase(firebase);
  



function ContractsTest() {
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
            window.location.href ='/showcotracts'
            setValidationError('');
          })
          .catch((error) => {
            console.error('Error saving data to Firebase:', error);
          });
      };
    
  return (
    <>
    <div className="background">
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
          <div className="app-contact">CONTACT INFO : +62 81 314 928 595</div>
        </div>
        <div className="screen-body-item">
          <div className="app-form">
            <div className="app-form-group">
              <input className="app-form-control" placeholder="PLAYER NAME" 
                value={contractData.playerName}
                onChange={(e) => setContractData({ ...contractData, playerName: e.target.value })}
              />
            </div>
            <div className="app-form-group">
              <input className="app-form-control" placeholder="EMAIL"
              value={contractData.email}
              onChange={(e) => setContractData({ ...contractData, email: e.target.value })}
              />
            </div>
            <div className="app-form-group">
              <input className="app-form-control" placeholder="PHONE NUMBER"
               value={contractData.phoneNumber}
               onChange={(e) => setContractData({ ...contractData, phoneNumber: e.target.value })}
              
              />
            </div>
          
            <div className="app-form-group buttons" >
              <button className="app-form-button" ><a href='/contracts'>CANCEL</a></button>
              <br/>
              <br/>
              <button className="app-form-button" onClick={handleSaveToFirebase}>SEND</button>
              {validationError && <p style={{ color: 'red' }}>{validationError}</p>}

            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</div>


    </>
  )
}

export default ContractsTest