import { Button, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { loginRequest } from 'pages/main/reducer';
import { IReducer } from 'reducer';
import { IMainReducer } from 'pages/main/reducer';

import Box from '@mui/material/Box';

import FieldWrapper from 'components/Elements/FieldWrapper/FieldWrapper';

import ILogin from './ILoginInterface';

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
    <div className="form">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant="h5" sx={{ mb: 2 }}>
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
          <Form>
            <FieldWrapper
              label="Email"
              name="email"
              type="email"
              required
              variant="outlined"
            />
            <FieldWrapper
              label="Password"
              name="password"
              type="password"
              required
              variant="outlined"
              serverMessage={errorMessage}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{
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
