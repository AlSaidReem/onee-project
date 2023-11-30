import { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Table, Modal, Form } from 'react-bootstrap';
import { database } from '../login-signup/firebaseConfig';
import './ContractDashboard.css';
// import { useEffect, useState } from 'react';
// import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push, onValue } from 'firebase/database';

import firebase from '../login-signup/firebaseConfig';




const database2 = getDatabase(firebase);
const ContractDashboard = () => {
  const [crud, setCrud] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [newContract, setNewContract] = useState({ name: '', amount: '' });
  const [editingContractId, setEditingContractId] = useState(null);

  useEffect(() => {
  
    const crudRef = database.ref('crud');
    crudRef.on('value', (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const crudArray = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        setCrud(crudArray);
      }
    });

    return () => {
     
      crudRef.off('value');
    };
  }, []);

 
 

  const handleEditContract = (contractId) => {
    const selectedContract = crud.find((contract) => contract.id === contractId);
    setEditingContractId(contractId);
    setNewContract({ name: selectedContract.name, amount: selectedContract.amount });
    setEditModal(true);
  };
  const handleAddContract = () => {
    const crudRef = database.ref('crud');
    const newContractRef = crudRef.push();
    newContractRef.set(newContract);

    setNewContract({ name: '', amount: '' });
    setShowModal(false);
  };

  const handleUpdateContract = () => {
    if (!editingContractId) {
      console.error("Editing contract ID is not set.");
      return;
    }


    const crudRef = database.ref(`crud/${editingContractId}`);
    crudRef.update(newContract);

    setNewContract({ name: '', amount: '' });
    setEditingContractId(null);
    setEditModal(false);
  };
  
  const handleDeleteContract = (id) => {
    const crudRef = database.ref(`crud/${id}`);
    crudRef.remove();
  };


//// Contract table:
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

  const contractsRef = ref(database2, 'contracts/players');

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
  
<Container fluid className="dashboard-container">

  <Row>
 
    <Col md={12} className="sidebar">
    <Card>
      <Card.Body className='d-flex flex-column justify-content-between align-items-center'>
       
        <div>
        <Button variant="primary" className="sidebar-button" onClick={()=> window.location.href='/'}>

        Back </Button>
        <Button variant="primary" className="sidebar-button" onClick={()=> setShowModal(true)}>

          Add Contract</Button>
      
       </div>
        

      </Card.Body>
    </Card>
    </Col>
    <Col md={12} className="main-content">
   
    <Card>
      <Card.Body>
        <h5>Contract Management System Dashboard</h5>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Amount</th>
              <th>Delete contract</th>
              <th>Edit contract</th>
            </tr>
          </thead>
          <tbody>
          {crud.map((contract) => (
        <tr key={contract.id}>
          <td>{contract.id}</td>
          <td>{contract.name}</td>
          <td>{contract.amount}</td>
          <td>
         <Button
           variant="primary"
           className="edit-button"
           onClick={() => handleEditContract(contract.id)}>
        Edit
      </Button>
    </td>
    <td>
      <Button
        variant="danger"
        className="delete-button"
        onClick={() => handleDeleteContract(contract.id)}>
        Delete
      </Button>
    </td>
  </tr>
       ))}

          </tbody>
        </Table>
      </Card.Body>
    </Card>
    </Col>
  </Row>

  <Modal show={showModal} onHide={()=> setShowModal(false)}>
    <Modal.Header closeButton>
      <Modal.Title>Add Contract</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form>
        <Form.Group controlId="formContractName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter contract name" value={newContract.name} onChange={(e)=>
            setNewContract({ ...newContract, name: e.target.value })}
            />
        </Form.Group>
        <Form.Group controlId="formContractAmount">
          <Form.Label>Amount</Form.Label>
          <Form.Control type="text" placeholder="Enter contract amount" value={newContract.amount} onChange={(e)=>
            setNewContract({ ...newContract, amount: e.target.value })}
            />
        </Form.Group>
      </Form>
    </Modal.Body>
    <Modal.Footer>
     
      <Button variant="primary" onClick={handleAddContract}>
        Add Contract
      </Button>
    </Modal.Footer>
  </Modal>

  
    {/* edit popup */}
    <Modal show={editModal} onHide={() => setEditModal(false)}>
    <Modal.Header closeButton>
      <Modal.Title> Edit Contract</Modal.Title>
    </Modal.Header>
     
        <Modal.Body>
          <Form>
            <Form.Group controlId="formContractName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter contract name"
                value={newContract.name || ''} 
                onChange={(e) =>
                  setNewContract({ ...newContract, name: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group controlId="formContractAmount">
              <Form.Label>Amount</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter contract amount"
                value={newContract.amount || ''} 
                onChange={(e) =>
                  setNewContract({ ...newContract, amount: e.target.value })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
    <Modal.Footer>
     
      <Button variant="primary" onClick={handleUpdateContract}>
        Update
      </Button>
    </Modal.Footer>
  </Modal>
</Container>


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
};

export default ContractDashboard;