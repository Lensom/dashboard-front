import { Button, TextField, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { loginRequest } from 'pages/main/reducer';
import { IReducer } from 'reducer';
import { IMainReducer } from 'pages/main/reducer';

import Box from '@mui/material/Box';

import ILogin from './ILoginInterface';
import styles from './login.module.scss';

const Login = () => {
  const dispatch = useDispatch();

  const {
    user: { errorMessage },
  } = useSelector<IReducer, IMainReducer>((state) => state.main);

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
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant="h5" sx={{ marginBottom: '16px' }}>
          Login
        </Typography>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className={styles.form}>
            <div className="field-wrapper">
              <Field
                as={TextField}
                label="Email"
                name="email"
                type="email"
                required
                variant="outlined"
                sx={{ width: '100%', marginBottom: 3 }}
              />
              <ErrorMessage
                name="email"
                component="div"
                className="error-message"
              />
            </div>

            <div className="field-wrapper">
              <Field
                as={TextField}
                label="Password"
                name="password"
                type="password"
                required
                variant="outlined"
                sx={{ width: '100%', marginBottom: 3 }}
                InputProps={{
                  classes: {
                    focused: 'focused-input',
                  },
                }}
              />
              <ErrorMessage
                name="password"
                component="div"
                className="error-message"
              />
              {errorMessage && (
                <div className="error-server">{errorMessage}</div>
              )}
            </div>

            <Button
              type="submit"
              variant="contained"
              sx={{
                bgcolor: 'rgb(0, 167, 111)',
                '&:hover': {
                  bgcolor: 'rgb(0, 167, 111, .8)',
                },
              }}
            >
              Login
            </Button>
          </Form>
        </Formik>
      </Box>
    </div>
  );
};

export default Login;
