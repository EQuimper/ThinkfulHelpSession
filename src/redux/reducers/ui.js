import { combineReducers } from 'redux';
import { ModalReducer } from '../../modules/modal';

export default combineReducers({
  modal: ModalReducer
});
