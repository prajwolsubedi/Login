import PhoneInput, { PhoneInputProps } from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useField } from "formik";
const PhoneNumberValidation = ({ name, ...otherProps }: any) => {
    const [field, mata] = useField(name);
    const configPhoneInput : PhoneInputProps = {
        ...field,
    }

  return (
    <PhoneInput
      country={"in"}
      inputProps={{
        required: true,
        style: { width: "100%" },
      }}
    />
  );
};

/*
      {!valid && (
        <p>Please enter a valid phone number.</p>
      )}
    </div>
*/

export default PhoneNumberValidation;
