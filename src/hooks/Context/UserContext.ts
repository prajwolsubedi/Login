import { createContext } from 'react';
const UserContext = createContext({
    user: {
        name: 'Random',
        email: 'Random@gmail.com'
    }
});

export default UserContext;
