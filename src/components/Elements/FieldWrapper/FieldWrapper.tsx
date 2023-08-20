import { FC } from 'react';
import { TextField } from '@mui/material';
import { Field, ErrorMessage } from 'formik';

interface IProps {
  label: string;
  name: string;
  sx?: Object;
  required?: boolean;
  type?: string;
  variant?: string;
  serverMessage?: string;
}

const FieldWrapper: FC<IProps> = ({
  label,
  name,
  sx = { width: '100%', mb: 3 },
  required,
  type = 'text',
  variant = 'outlined',
  serverMessage,
}) => {
  return (
    <div className="field-wrapper">
      <Field
        as={TextField}
        label={label}
        name={name}
        required={required}
        sx={sx}
        type={type}
        variant={variant}
      />
      <ErrorMessage name={name} component="div" className="error-message" />
      {serverMessage && <div className="error-server">{serverMessage}</div>}
    </div>
  );
};

export default FieldWrapper;
