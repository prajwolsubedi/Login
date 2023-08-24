import { Grid } from '@mui/material';
import VerifyOTPForm from '../../organisms/VerifyOTPForm';
import Heading from '../../atoms/FormsUI/Heading/Heading';
import { useAppDispatch } from '../../../store/store';
const VerifyOTP = () => {
    const dispatch = useAppDispatch();
    return (
        <Grid container gap="60px" sx={{ height: '671px', width: '482px' }}>
            <Grid item xs={12} height="54px" sx={{ height: '55px', display: 'flex', justifyContent: 'center' }}>
                <Heading />
            </Grid>
            <Grid item sx={{ backgroundColor: '#ffffff', padding: '27.5px 33px;' }}>
                <VerifyOTPForm />
            </Grid>
        </Grid>
    );
};

export default VerifyOTP;
