import { useState, ChangeEvent, FormEvent } from 'react';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import { Button, TextField, Typography } from '@mui/material';

import { useDispatch, useSelector } from 'react-redux';
import {
  closeRegistrationModal,
  registrationRequest,
  IMainReducer,
} from 'pages/main/reducer';
import { IReducer } from 'reducer';

import styles from './registartion-modal.module.scss';

const RegisterModal = () => {
  const dispatch = useDispatch();
  const {
    modals: { isRegistrationOpen },
  } = useSelector<IReducer, IMainReducer>((state) => state.main);

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    repeatPassword: '',
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Perform registration logic with formData
    console.log(formData);
  };

  const handleClose = () => {
    dispatch(registrationRequest());
    dispatch(closeRegistrationModal());
  };

  return (
    <div>
      <Modal
        open={isRegistrationOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ display: 'flex' }}
      >
        <form onSubmit={handleSubmit} className={styles.form}>
          <Typography>Registration</Typography>
          <Box sx={{ flexDirection: 'column' }}>
            <TextField
              label="Username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              required
              sx={{ width: '100%', margin: '8px 0' }}
            />
            <TextField
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              sx={{ width: '100%', margin: '8px 0' }}
            />
            <TextField
              label="Password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleInputChange}
              required
              sx={{ width: '100%', margin: '8px 0' }}
            />
            <TextField
              label="Repeat Password"
              name="repeatPassword"
              type="password"
              value={formData.repeatPassword}
              onChange={handleInputChange}
              required
              sx={{ width: '100%', margin: '8px 0' }}
            />
          </Box>
          <Button type="submit" variant="contained" color="primary">
            Register
          </Button>
        </form>
      </Modal>
    </div>
  );
};

export default RegisterModal;
