import { Button, TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { registrationRequest } from 'pages/main/reducer';
import IRegistration from './IRegistrationInterface';
import styles from './registration.module.scss';

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
    <div className={styles.form}>
      <Typography>Registration</Typography>
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
            <Field
              as={TextField}
              label="Username"
              name="username"
              required
              sx={{ width: '100%', margin: '8px 0' }}
            />
            <ErrorMessage name="username" component="div" />

            <Field
              as={TextField}
              label="Email"
              name="email"
              type="email"
              required
              sx={{ width: '100%', margin: '8px 0' }}
            />
            <ErrorMessage name="email" component="div" />

            <Field
              as={TextField}
              label="Password"
              name="password"
              type="password"
              required
              sx={{ width: '100%', margin: '8px 0' }}
            />
            <ErrorMessage name="password" component="div" />

            <Field
              as={TextField}
              label="Repeat Password"
              name="repeatPassword"
              type="password"
              required
              sx={{ width: '100%', margin: '8px 0' }}
            />
            <ErrorMessage name="repeatPassword" component="div" />
          </Box>
          <Button type="submit" variant="contained" color="primary">
            Register
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

export default Registration;
