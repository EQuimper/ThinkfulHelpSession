import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { ModalComponent } from './components';
import './App.css';

const App = ({ modal, showModal, closeModal }) => (
  <div className="App">
    <Button onClick={() => showModal('modal1')}>Modal 1</Button>
    <Button onClick={() => showModal('modal2')}>Modal 2</Button>
    <Button onClick={() => showModal('modal3')}>Modal 3</Button>
    <ModalComponent name="modal1" show={modal.modal1.show} closeModal={() => closeModal()} />
    <ModalComponent name="modal2" show={modal.modal2.show} closeModal={() => closeModal()} />
    <ModalComponent name="modal3" show={modal.modal3.show} closeModal={() => closeModal()} />
  </div>
);

export default App;
