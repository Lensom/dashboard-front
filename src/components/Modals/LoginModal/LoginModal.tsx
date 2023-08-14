import { useEffect, useCallback } from 'react';
import Modal from '@mui/material/Modal';
import { Typography, Box } from '@mui/material';

import { useDispatch, useSelector } from 'react-redux';
import { IMainReducer } from 'pages/main/reducer';
import {
  closeLoginModal,
  IModalsReducer,
  openRegistrationModal,
} from 'pages/modals/reducer';
import { IReducer } from 'reducer';

import Login from 'components/Forms/Login/Login';

const RegisterModal = () => {
  const dispatch = useDispatch();
  const {
    user: { isAuth },
  } = useSelector<IReducer, IMainReducer>((state) => state.main);

  const {
    modals: { isLoginOpen },
  } = useSelector<IReducer, IModalsReducer>((state) => state.modals);

  const handleClose = useCallback(() => {
    dispatch(closeLoginModal());
  }, []);

  const handleRegistrationModal = useCallback(() => {
    handleClose();
    dispatch(openRegistrationModal());
  }, []);

  useEffect(() => {
    if (isAuth) {
      handleClose();
    }
  }, [isAuth, handleClose]);

  return (
    <div>
      <Modal
        open={isLoginOpen}
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
          <Login />
          <Typography color="primary" onClick={handleRegistrationModal}>
            Don't have an account? Sign up
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default RegisterModal;
