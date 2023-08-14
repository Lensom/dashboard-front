import { useEffect, useCallback } from 'react';
import Modal from '@mui/material/Modal';
import { Typography, Box } from '@mui/material';

import { useDispatch, useSelector } from 'react-redux';
import { IMainReducer } from 'pages/main/reducer';
import {
  closeRegistrationModal,
  IModalsReducer,
  openLoginModal,
} from 'pages/modals/reducer';
import { IReducer } from 'reducer';

import Registration from 'components/Forms/Registration/Registration';

const RegisterModal = () => {
  const dispatch = useDispatch();
  const {
    user: { isAuth },
  } = useSelector<IReducer, IMainReducer>((state) => state.main);

  const {
    modals: { isRegistrationOpen },
  } = useSelector<IReducer, IModalsReducer>((state) => state.modals);

  const handleClose = useCallback(() => {
    dispatch(closeRegistrationModal());
  }, [dispatch]);

  const handleLoginModal = () => {
    handleClose();
    dispatch(openLoginModal());
  };

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
        <Box
          sx={{
            background: 'white',
            maxWidth: '400px',
            width: '100%',
            p: 2,
            m: 'auto',
            textAlign: 'center',
          }}
        >
          <Registration />
          <Typography color="primary" onClick={handleLoginModal}>
            Don you have an account? Sign in
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default RegisterModal;
