import { connect } from 'react-redux';
import App from './App';
import { showModal, closeModal } from './modules/modal';

export default connect(
  state => ({
    modal: state.ui.modal
  }),
  { showModal, closeModal }
)(App);
