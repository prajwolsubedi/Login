import { useAppSelector } from '../../store/store';
import { Navigate } from 'react-router-dom';
interface Props {
    children: React.ReactNode;
}

const Protected: React.FC<Props> = ({ children }) => {
    const isLoggedIn = useAppSelector((state) => state.authentication.isLoggedIn);
    if (!isLoggedIn) {
        return <Navigate to="/authenticate" replace />;
    } else {
        return children;
    }
};

export default Protected;
