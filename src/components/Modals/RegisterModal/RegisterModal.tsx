import { useEffect, useCallback } from 'react';
import Modal from '@mui/material/Modal';

import { useDispatch, useSelector } from 'react-redux';
import { closeRegistrationModal, IMainReducer } from 'pages/main/reducer';
import { IReducer } from 'reducer';

import Registration from 'components/Forms/Registration/Registration';

const RegisterModal = () => {
  const dispatch = useDispatch();
  const {
    modals: { isRegistrationOpen },
    user: { isAuth },
  } = useSelector<IReducer, IMainReducer>((state) => state.main);

  const handleClose = useCallback(() => {
    dispatch(closeRegistrationModal());
  }, [dispatch]);

  console.log(isAuth);

  useEffect(() => {
    if (isAuth) {
      handleClose();
    }
  }, [isAuth, handleClose]);

  return (
    <div>
      <Modal
        open={isRegistrationOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ display: 'flex' }}
      >
        <Registration />
      </Modal>
    </div>
  );
};

export default RegisterModal;
