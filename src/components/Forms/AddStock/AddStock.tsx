import { useDispatch, useSelector } from 'react-redux';
import { IReducer } from 'reducer';
import {
  IPortfolioReducer,
  addStockToPortfolioRequest,
} from 'pages/portfolio/reducer';

import CloseIcon from '@mui/icons-material/Close';
import { TextField, Typography, Box } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
import IconButton from '@mui/material/IconButton';

import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik';
import * as yup from 'yup';

import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import 'dayjs/locale/de';

import { checkIsNumber } from 'utils';

import styles from './add-stock.module.scss';
import AddButton from 'components/Buttons/AddButton/AddButton';

const AddStock = () => {
  const dispatch = useDispatch();

  const { loadingAddStock } = useSelector<IReducer, IPortfolioReducer>(
    (state) => state.portfolio
  );

  const validationSchema = yup.object().shape({
    ticker: yup.string().required('Ticker is required'),
    purchaseHistory: yup.array().of(
      yup.object().shape({
        count: yup
          .mixed()
          .test('is-valid-number', 'Count is a number', checkIsNumber)
          .required('Count is required'),
        date: yup.string().required('Date is required'),
        price: yup
          .mixed()
          .test('is-valid-number', 'Price is a number', checkIsNumber)
          .required('Price is required'),
      })
    ),
  });

  const handleSubmit = (data: any) => {
    dispatch(addStockToPortfolioRequest(data));
  };

  return (
    <div className={styles.form}>
      <Typography variant="h5" sx={{ marginBottom: '16px' }}>
        Add stock to Portfolio
      </Typography>
      <Formik
        initialValues={{
          ticker: '',
          purchaseHistory: [{ count: '', date: dayjs(new Date()), price: '' }],
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, errors }) => (
          <Form>
            <Box sx={{ flexDirection: 'column' }}>
              <div className="field-wrapper">
                <Field
                  as={TextField}
                  label="Ticker"
                  name="ticker"
                  required
                  sx={{ width: '100%', mb: 3, mt: 2 }}
                />
                <ErrorMessage
                  name="ticker"
                  component="div"
                  className="error-message"
                />
              </div>

              <Typography variant="h6" sx={{ mb: 1, textAlign: 'left' }}>
                Purchase history
              </Typography>
              <FieldArray name="purchaseHistory">
                {({ push, remove }) => (
                  <Box>
                    {values.purchaseHistory.map((_, index) => (
                      <Box
                        key={index}
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                        }}
                      >
                        <div className="field-wrapper">
                          <Field
                            as={TextField}
                            label={`Count`}
                            name={`purchaseHistory[${index}].count`}
                            required
                            sx={{ width: '165px', marginBottom: 3 }}
                          />
                          <ErrorMessage
                            name={`purchaseHistory[${index}].count`}
                            component="div"
                            className="error-message"
                          />
                        </div>
                        <div className="field-wrapper">
                          <Field name={`purchaseHistory[${index}].date`}>
                            {({ field }: any) => (
                              <LocalizationProvider
                                dateAdapter={AdapterDayjs}
                                adapterLocale="de"
                              >
                                <DatePicker
                                  sx={{ marginBottom: 3 }}
                                  label={`Date`}
                                  value={field.value}
                                  onChange={(newValue) =>
                                    field.onChange({
                                      target: {
                                        name: field.name,
                                        value: newValue,
                                      },
                                    })
                                  }
                                />
                              </LocalizationProvider>
                            )}
                          </Field>
                        </div>
                        <div className="field-wrapper">
                          <Field
                            as={TextField}
                            label={`Price`}
                            name={`purchaseHistory[${index}].price`}
                            required
                            sx={{ width: '120px', marginBottom: 3 }}
                          />
                          <ErrorMessage
                            name={`purchaseHistory[${index}].price`}
                            component="div"
                            className="error-message"
                          />
                        </div>
                        {values.purchaseHistory.length > 1 && (
                          <IconButton
                            onClick={() => remove(index)}
                            sx={{ mb: 3 }}
                          >
                            <CloseIcon />
                          </IconButton>
                        )}
                      </Box>
                    ))}
                    <AddButton
                      onClick={() =>
                        push({ count: '', date: dayjs(new Date()), price: '' })
                      }
                    />
                  </Box>
                )}
              </FieldArray>
            </Box>
            <LoadingButton
              type="submit"
              loading={loadingAddStock}
              loadingPosition="start"
              startIcon={<SaveIcon />}
              variant="contained"
              sx={{
                width: '100px',
                bgcolor: 'rgb(0, 167, 111)',
                '&:hover': {
                  bgcolor: 'rgb(0, 167, 111, .8)',
                },
              }}
            >
              Save
            </LoadingButton>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddStock;
