import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import RegisterForm from '../modules/form/RegisterForm';

const checkModal = name => {
  switch (name) {
    case 'modal1':
      return <RegisterForm />;
    case 'modal2':
      return (
        <div>
          <h1>I'm Modal 2</h1>
          <Button>Modal2</Button>
        </div>
      );
    case 'modal3':
      return (
        <div>
          <h1>I'm Modal 3</h1>
          <Button>Modal3</Button>
        </div>
      );
    default:
      return null;
  }
}

const ModalComponent = ({ show, name, closeModal }) => (
  <Modal show={show} onHide={closeModal}>
    <Modal.Header closeButton>
      <Modal.Title>{name}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      {checkModal(name)}
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={closeModal}>Close</Button>
    </Modal.Footer>
  </Modal>
);

export default ModalComponent;
