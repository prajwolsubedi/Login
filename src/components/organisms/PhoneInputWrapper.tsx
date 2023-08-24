import { useField, useFormikContext } from 'formik';
import { Box } from '@mui/material';
import MuiPhoneNumber, { MuiPhoneNumberProps } from 'material-ui-phone-number';
interface PhoneNumberValueObject {
    value: string;
    countryCode: string;
    name: string;
    dialCode: string;
}

const PhoneInputWrapper = ({ name, label, ...otherProps }: any) => {
    const [field, meta] = useField(name);
    const { setFieldValue } = useFormikContext();

    const handleOnChange = (value: string, e) => {
        setFieldValue(name, value);
    };
    const configPhoneInput: MuiPhoneNumberProps = {
        ...field,
        ...otherProps,
        // select: true,
        // error: true,
        disableDropdown: false,
        countryCodeEditable: false,
        variant: 'outlined',
        size: 'small',
        fullWidth: true,
        fontSize: '30px',
        defaultCountry: 'np',
        onChange: handleOnChange,
        height: '52px'
    };

    return (
        <Box>
            <MuiPhoneNumber inputProps={{
               style: { height: '35px' }, 
               }} {...configPhoneInput} />
        </Box>
    );
};

export default PhoneInputWrapper;

// error={formik.touched.phone && Boolean(formik.errors.phone)}
// helperText={formik.touched.phone && formik.errors.phone}
