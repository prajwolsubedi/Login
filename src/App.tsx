import Authentication from './pages/AuthenticationPage';
import { Routes, Route } from 'react-router-dom';
import ResetPasswordPage from './pages/ResetPasswordPage';
import Dashboard from './pages/Dashboard';
import Protected from './hooks/ProtectedRoutes/Protected';
import { ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
    palette: {
        primary: {
            main: '#0f6efb'
        },
        success: {
            main: '#30cc65'
        },
        warning: {
            main: '#d50000'
        }
    }
});
const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Routes>
                <Route path="authenticate" element={<Authentication />}></Route>
                <Route path="forgotpassword" element={<ResetPasswordPage />}></Route>
                <Route
                    path="dashboard"
                    element={
                        <Protected>
                            <Dashboard />
                        </Protected>
                    }
                ></Route>
            </Routes>
        </ThemeProvider>
    );
};

export default App;
