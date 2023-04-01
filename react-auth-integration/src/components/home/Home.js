import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Home = () => {
    const { user } = useAuth();
    return (
        <div>
            <h1>Welcome to Home</h1>
            <p>{user.displayName}</p>
        </div>
    );
};

export default Home;