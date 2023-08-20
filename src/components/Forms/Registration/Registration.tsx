import { Button, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { registrationRequest } from 'pages/main/reducer';
import IRegistration from './IRegistrationInterface';

import FieldWrapper from 'components/Elements/FieldWrapper/FieldWrapper';

const Registration = () => {
  const dispatch = useDispatch();

  const handleSubmit = (data: IRegistration | any) => {
    dispatch(registrationRequest(data));
  };

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Incorrect email format')
      .required('Email is required'),
    username: yup.string().required('Username is required'),
    password: yup.string().required('Password is required'),
    repeatPassword: yup
      .string()
      .oneOf([yup.ref('password')], 'Passwords must match')
      .required('Repeat password'),
  });

  return (
    <div className="form">
      <Typography variant="h5" sx={{ mb: 2 }}>
        Registration
      </Typography>
      <Formik
        initialValues={{
          email: '',
          username: '',
          password: '',
          repeatPassword: '',
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <Box sx={{ flexDirection: 'column' }}>
            <FieldWrapper label="Username" name="username" required />
            <FieldWrapper label="Email" name="email" type="email" required />
            <FieldWrapper
              label="Password"
              name="password"
              type="password"
              required
            />
            <FieldWrapper
              label="Repeat Password"
              name="repeatPassword"
              type="password"
              required
            />
          </Box>
          <Button
            type="submit"
            variant="contained"
            sx={{
              '&:hover': {
                bgcolor: 'rgb(0, 167, 111, .8)',
              },
            }}
          >
            Register
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

export default Registration;
