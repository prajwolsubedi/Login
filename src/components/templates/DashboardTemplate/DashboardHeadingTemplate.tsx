import { Grid, Typography, Divider, SvgIcon } from '@mui/material';
import Profile from '../../atoms/Dashboard/Profile';
import { ReactComponent as Setting } from '../../../assets/dashboard/Setting.svg';
import { ReactComponent as Notification } from '../../../assets/dashboard/Notification.svg';


const DashboardHeadingTemplate = () => {
    return (
        <Grid
            container
            height="80px"
            display="flex"
            justifyContent="space-between"
            sx={{
                padding: '16px 36px 16px 16px;',
                background: '#EDF6FF'
            }}
        >
            <Grid item>
                <Typography sx={{ fontSize: '20px', fontWeight: '600' }}>Dashboard</Typography>
                <Divider sx={{ width: '54px', height: '2px', backgroundColor: '#456C97' }} />
            </Grid>
            <Grid item width="320px">
                <Grid container display="flex" justifyContent="space-between" alignItems="center">
                    <Grid item>
                        <SvgIcon>
                            <Setting />
                        </SvgIcon>
                    </Grid>
                    <Grid item>
                        <SvgIcon>
                            <Notification />
                        </SvgIcon>
                    </Grid>

                    <Grid item width="200px" height="48px">
                        <Profile />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default DashboardHeadingTemplate;
