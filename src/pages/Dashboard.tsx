import React from 'react';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/store';
import { toggleLoggedIn } from '../store/slices/authenticationSlice';
import getAllUsers from '../api/getAllUsers';
const Dashboard = () => {
    const authToken = useAppSelector((state) => state.authentication.authToken)
    const { mutate } = getAllUsers();
    const dispatch = useAppDispatch();
    const isLoggedIn = useAppSelector((state) => state.authentication.isLoggedIn);
    const handleClick = () => {
        mutate()
        console.log('Fetching all signed up users');
    };
    return (
        <div>
            <button
                onClick={() => {
                    dispatch(toggleLoggedIn());
                }}
                style={{ cursor: 'pointer' }}
            >
                Log Out
            </button>
            <button
                onClick={() => {
                    handleClick();
                }}
                style={{ cursor: 'pointer' }}
            >
                Fetch All users
            </button>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontFamily: 'Poppins, sans-serif', height: '80vh' }}>
                <div style={{ width: '300px', height: '200px', backgroundColor: '#EBEBEB' }}>
                    <h1 style={{ textAlign: 'center' }}>Welcome To Progressive Labs</h1>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
