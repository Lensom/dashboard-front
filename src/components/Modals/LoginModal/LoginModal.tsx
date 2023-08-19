import { useEffect, useCallback } from 'react';
import Modal from '@mui/material/Modal';
import { Typography, Box } from '@mui/material';

import { useDispatch, useSelector } from 'react-redux';
import { IMainReducer, resetStatuses } from 'pages/main/reducer';
import {
  closeLoginModal,
  IModalsReducer,
  openRegistrationModal,
} from 'pages/modals/reducer';
import { IReducer } from 'reducer';

import Login from 'components/Forms/Login/Login';

import styles from '../modals.module.scss';

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
    dispatch(resetStatuses());
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
        aria-labelledby="Login modal"
        aria-describedby="Login modal"
        sx={{
          display: 'flex',
        }}
      >
        <Box
          sx={{
            maxWidth: '400px',
            width: '100%',
            p: 2,
            m: 'auto',
            textAlign: 'center',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
            borderRadius: '8px',
          }}
          className={styles['form-background']}
        >
          <Login />
          <Typography
            color="primary"
            onClick={handleRegistrationModal}
            sx={{
              fontSize: '16px',
              color: 'rgb(0, 167, 111)',
              '&:hover': {
                color: 'rgb(0, 167, 111, .8)',
              },
              mt: 2,
              cursor: 'pointer',
            }}
          >
            Don't have an account? Sign up
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default RegisterModal;
