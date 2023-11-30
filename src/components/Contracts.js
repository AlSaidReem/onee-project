
import { useEffect, useState } from 'react';
// import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push, onValue } from 'firebase/database';

import firebase from '../login-signup/firebaseConfig';

// const firebaseConfig = {
//   // Your Firebase configuration
//   apiKey: "AIzaSyBiGggAEQ4MXk54dHPKxNW_ihMH9uPHjI0",
//   authDomain: "reactproject-28e62.firebaseapp.com",
//   projectId: "reactproject-28e62",
//   storageBucket: "reactproject-28e62.appspot.com",
//   messagingSenderId: "228654618265",
//   appId: "1:228654618265:web:045b0f4a57f6cb480d0a08"
// };

// const firebase = initializeApp(firebaseConfig);
const database = getDatabase(firebase);

function Contracts() {

  const [contractData, setContractData] = useState({
    email: '',
    playerName: '',
    phoneNumber: '',
    photoURL: '',
    contractContent: '',
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
      !contractData.userId ||
      !contractData.email ||
      !contractData.playerName ||
      !contractData.phoneNumber ||
      !contractData.photoURL ||
      !contractData.contractContent
    ) {
      setValidationError('Please fill in all fields');
      return;
    }

    const contractsRef = ref(database, 'contracts/players');

    push(contractsRef, contractData)
      .then(() => {
        alert('Data saved to Firebase!');
        setContractData({
          userId: '',
          email: '',
          playerName: '',
          phoneNumber: '',
          contractContent: '',
        });
        setValidationError('');
      })
      .catch((error) => {
        console.error('Error saving data to Firebase:', error);
      });
  };

  return (
    <>
      <div>
      
        <input
          type="text"
          placeholder="Email"
          value={contractData.email}
          onChange={(e) => setContractData({ ...contractData, email: e.target.value })}
        />
        <input
          type="text"
          placeholder="Player Name"
          value={contractData.playerName}
          onChange={(e) => setContractData({ ...contractData, playerName: e.target.value })}
        />
        <input
          type="text"
          placeholder="Phone Number"
          value={contractData.phoneNumber}
          onChange={(e) => setContractData({ ...contractData, phoneNumber: e.target.value })}
        />
     
        <input
          type="text"
          placeholder="Contract Content"
          value={contractData.contractContent}
          onChange={(e) => setContractData({ ...contractData, contractContent: e.target.value })}
        />
        <button onClick={handleSaveToFirebase}>Save to Firebase</button>
        {validationError && <p style={{ color: 'red' }}>{validationError}</p>}
      </div>
      <div>
        <h2>Saved Contracts</h2>
        <ul>
          {contractsList.map((contract) => (
            <li key={contract.id}>
              <strong>User ID:</strong> {contract.userId}, <strong>Email:</strong> {contract.email},{' '}
              <strong>Player Name:</strong> {contract.playerName}, <strong>Phone Number:</strong>{' '}
              {contract.phoneNumber}, <strong>Photo URL:</strong> {contract.photoURL},{' '}
              <strong>Contract Content:</strong> {contract.contractContent}
            </li>
          ))}
        </ul>
      </div>
   
    </>
  );
}

export default Contracts;
