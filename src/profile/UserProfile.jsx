import React, { useState, useEffect } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';
import '../profile/profile.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function EditPopup({ onClose, onSave }) {
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleSave = () => {
    sessionStorage.setItem('email', newEmail);
    sessionStorage.setItem('pass', newPassword);

    onSave();
    onClose();
  };

  return (
    <div className="edit-popup">
      <h2>Edit Information</h2>
      <label>Email:</label>
      <input type="text" value={newEmail} onChange={(e) => setNewEmail(e.target.value)} />
      <label>Password:</label>
      <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
      <button onClick={handleSave}>Save</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
}

function UserProfile() {
  const [isEditPopupVisible, setEditPopupVisible] = useState(false);
  const [playerData, setPlayerData] = useState([]); 

  const savedKey = sessionStorage.getItem('savedKey');
  const database = getDatabase();

  useEffect(() => {
    const contractsRef = ref(database, 'contracts/players');

    onValue(contractsRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const playersArray = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));

        // Filter the players based on the saved key
        const filteredPlayers = playersArray.filter(
          (player) => player.id === savedKey
        );

        setPlayerData(filteredPlayers);
      } else {
        setPlayerData([]);
      }
    });

    return () => {
     
    };
  }, [database, savedKey]);

  const handleEditClick = () => {
    setEditPopupVisible(true);
  };

  const handleCloseEditPopup = () => {
    setEditPopupVisible(false);
  };

  const handleSaveEditPopup = () => {
    console.log('Changes saved');
  };



  const [playerName, setPlayerName] = useState('');
  const [playerKey, setPlayerKey] = useState('');
  const [selectedContact, setSelectedContact] = useState('');

  useEffect(() => {
    // Retrieve values from sessionStorage
    const storedPlayerName = sessionStorage.getItem('playerName');
    const storedPlayerKey = sessionStorage.getItem('playerKey');
    const storedSelectedContact = sessionStorage.getItem('selectedContact');

    // Update state with retrieved values
    setPlayerName(storedPlayerName);
    setPlayerKey(storedPlayerKey);
    setSelectedContact(storedSelectedContact);
  }, []);

  return (
    <>
    <section className='profile'>
      <div className={`profile-container ${isEditPopupVisible ? 'popup-visible' : ''}`}>
        <h1> Profile </h1>
        <div className="profile-info">
          <p>
            <strong>Email:</strong> {sessionStorage.getItem('email') || 'Not available'}
          </p>
          <p>
            <strong>Password:</strong> {sessionStorage.getItem('pass') || 'Not available'}
          </p>
        </div>
        <div className="edit-button1">
          <button onClick={handleEditClick}>Edit Information</button>
        </div>
      </div>

      {isEditPopupVisible && (
        <EditPopup onClose={handleCloseEditPopup} onSave={handleSaveEditPopup} />
      )}
      </section>


      <section className='table'>
        <h2> Your Contracts </h2>
        <table>
          <thead>
            <tr>
              <th>Player Key</th>
              <th>Player Name</th>
              <th>Selected Contact</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{playerKey}</td>
              <td>{playerName}</td>
              <td>{selectedContact}</td>
            </tr>
          </tbody>
        </table>
      </section>

     
    </>
  );
}

export default UserProfile;


