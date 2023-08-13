import { Button, TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { loginRequest } from 'pages/main/reducer';
import ILogin from './ILoginInterface';
import styles from './login.module.scss';

const Login = () => {
  const dispatch = useDispatch();

  const handleSubmit = (data: ILogin | any) => {
    dispatch(loginRequest(data));
  };

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Incorrect email format')
      .required('Email is required'),
    password: yup.string().required('Password is required'),
  });

  return (
    <div className={styles.form}>
      <Typography>Login</Typography>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <Box sx={{ flexDirection: 'column' }}>
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
          </Box>
          <Button type="submit" variant="contained" color="primary">
            Login
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
