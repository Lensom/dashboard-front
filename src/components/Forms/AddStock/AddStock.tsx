import { useDispatch } from 'react-redux';
import { Button, TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import 'dayjs/locale/de';

import { addStockToPortfolioRequest } from 'pages/portfolio/reducer';

import styles from './add-stock.module.scss';

const AddStock = () => {
  const dispatch = useDispatch();
  const handleSubmit = (data: any) => {
    dispatch(addStockToPortfolioRequest(data));
  };

  const validationSchema = yup.object().shape({
    ticker: yup.string().required('Ticker is required'),
    buyHistory: yup.array().of(
      yup.object().shape({
        count: yup.number().required('Count is required'),
        date: yup.string().required('Date is required'),
        price: yup.string().required('Price is required'),
      })
    ),
  });

  return (
    <div className={styles.form}>
      <Typography>Add stock to Portfolio</Typography>
      <Formik
        initialValues={{
          ticker: '',
          buyHistory: [{ count: '', date: '20.12.2222', price: '' }],
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values }) => (
          <Form>
            <Box sx={{ flexDirection: 'column' }}>
              <Field
                as={TextField}
                label="Ticker"
                name="ticker"
                required
                sx={{ width: '100%', margin: '8px 0' }}
              />
              <ErrorMessage name="ticker" component="div" />

              <FieldArray name="buyHistory">
                {({ push, remove }) => (
                  <Box>
                    {values.buyHistory.map((_, index) => (
                      <Box
                        key={index}
                        sx={{
                          display: 'flex',
                          alignItems: 'baseline',
                          gap: '10px',
                        }}
                      >
                        <Field
                          as={TextField}
                          label={`Count`}
                          name={`buyHistory[${index}].count`}
                          required
                          sx={{ width: '200px', margin: '8px 0' }}
                        />
                        <Field name={`buyHistory[${index}].date`}>
                          {({ field }: any) => (
                            <LocalizationProvider
                              dateAdapter={AdapterDayjs}
                              adapterLocale="de"
                            >
                              <DatePicker
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
                        <Field
                          as={TextField}
                          label={`Price`}
                          name={`buyHistory[${index}].price`}
                          required
                          sx={{ width: '200px', margin: '8px 0' }}
                        />
                        <Button
                          type="button"
                          variant="contained"
                          color="secondary"
                          onClick={() => remove(index)}
                          sx={{ minWidth: '20px' }}
                        >
                          X
                        </Button>
                      </Box>
                    ))}
                    <Button
                      type="button"
                      variant="contained"
                      color="primary"
                      sx={{ m: 2 }}
                      onClick={() => push({ count: '', date: '', price: '' })}
                    >
                      Add More
                    </Button>
                  </Box>
                )}
              </FieldArray>
            </Box>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddStock;