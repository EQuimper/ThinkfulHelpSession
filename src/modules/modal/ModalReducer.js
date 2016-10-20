import {
  SHOW_MODAL,
  CLOSE_MODAL
} from './ModalActions';

const INITIAL_STATE = {
  modal1: {
    show: false
  },
  modal2: {
    show: false
  },
  modal3: {
    show: false
  }
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return { ...state,
        [action.modalName]: {
          show: true
        }
      };
    case CLOSE_MODAL:
      return INITIAL_STATE;
    default:
      return state;
  }
};
