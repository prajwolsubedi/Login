import Authentication from './pages/AuthenticationPage';
import { Routes, Route } from 'react-router-dom';
import ResetPasswordPage from './pages/ResetPasswordPage';
import Dashboard from './pages/Dashboard';
import Protected from './hooks/ProtectedRoutes/Protected';
const App = () => {
    return (
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
    );
};

export default App;
