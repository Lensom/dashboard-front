import { FC } from 'react';
import { TextField } from '@mui/material';
import { Field, ErrorMessage } from 'formik';

interface IProps {
  label: string;
  name: string;
  sx: Object;
  required?: boolean;
}

const FieldWrapper: FC<IProps> = ({ label, name, sx, required }) => {
  return (
    <div className="field-wrapper">
      <Field
        as={TextField}
        label={label}
        name={name}
        required={required}
        sx={sx}
      />
      <ErrorMessage name={name} component="div" className="error-message" />
    </div>
  );
};

export default FieldWrapper;
