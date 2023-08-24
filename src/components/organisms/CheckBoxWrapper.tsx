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
        size: 'small',
        onChange: handleChange,
        sx: {
            width: '20px',
            height: '20px',
            marginLeft: '12px',
            marginRight: '8px'
        }
    };

    const configFormControl: { error?: boolean } = {};
    if (meta && meta.touched && meta.error) {
        configFormControl.error = true;
    }

    return (
        <Box>
            <FormControl {...configFormControl} fullWidth>
                <FormGroup>
                    <FormControlLabel
                        sx={{ height: '10px' }}
                        control={<Checkbox {...configCheckBox} />}
                        labelPlacement="end"
                        label={
                            <span
                                style={{
                                    fontFamily: 'Poppins, sans-serif',
                                    fontWeight: '400',
                                    fontSize: '12px',
                                    color: '#A7A7A7'
                                }}
                            >
                                {label}
                            </span>
                        }
                    />
                    {meta.touched && meta.error && (
                        <FormHelperText sx={{ height: '15px', paddingLeft: '15px' }} error>
                            {meta.error}
                        </FormHelperText>
                    )}
                </FormGroup>
            </FormControl>
        </Box>
    );
};

export default CheckBoxWrapper;
