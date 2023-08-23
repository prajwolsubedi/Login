import { CheckboxProps, FormControl, FormControlLabel, FormGroup, FormHelperText, Checkbox, Box } from '@mui/material';

import { useField, useFormikContext } from 'formik';

const CheckBoxWrapper = ({ name, label, ...otherProps }: any) => {
  const [field, meta] = useField(name);
  const { setFieldValue } = useFormikContext();
  const handleChange = (e: any) => {
    const { checked } = e.target;
    console.log(checked);
    setFieldValue(name, checked);
  };
  const configCheckBox: CheckboxProps = {
    ...field,
    // fullWidth: true,
    size: 'small',
    onChange: handleChange,
  };

  const configFormControl: { error?: boolean } = {};
  if (meta && meta.touched && meta.error) {
    configFormControl.error = true;
  }

  return (
    <Box>
      <FormControl {...configFormControl}  >
        <FormGroup >
          <FormControlLabel
            control={<Checkbox {...configCheckBox} />}
            labelPlacement="end"
            label={
              <span
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 'light',
                  fontSize: '12px',
                  color: '#A7A7A7',
                  textAlign: 'center',
                  letterSpacing: '-0.01em',
                }}
              >
                {label}
              </span>
            }
          />
          {meta.touched &&
            meta.error && ( // Check if there's an error and the field has been touched
              <FormHelperText error>{meta.error}</FormHelperText>
            )}
        </FormGroup>
      </FormControl>
    </Box>
  );
};

export default CheckBoxWrapper;
