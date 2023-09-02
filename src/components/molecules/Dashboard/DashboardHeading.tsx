import { Grid, Typography } from '@mui/material'
import Profile from '../../atoms/Dashboard/Profile'
const DashboardHeading = () => {
  return (
    <Grid container sx={{width: "1040px"}}>
        <Typography>Dashboard</Typography>
        <Profile />
    </Grid>
  )
}

export default DashboardHeading