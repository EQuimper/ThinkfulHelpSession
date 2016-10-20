export const SHOW_MODAL = 'SHOW_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const showModal = modalName => ({
  type: SHOW_MODAL,
  modalName
});

export const closeModal = () => ({
  type: CLOSE_MODAL,
});
