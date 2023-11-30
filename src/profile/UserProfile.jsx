import React, { useState } from 'react';
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

  const handleEditClick = () => {
    setEditPopupVisible(true);
  };

  const handleCloseEditPopup = () => {
    setEditPopupVisible(false);
  };

  const handleSaveEditPopup = () => {
    console.log('Changes saved');
  };

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
    </>
  );
}

export default UserProfile;
