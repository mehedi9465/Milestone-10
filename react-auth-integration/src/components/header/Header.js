import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import './Header.css';

const Header = () => {
    const {user, signOutGoogle} = useAuth();
    console.log(user);

    return (
        <div className='header'>
            <Link to='/home'>Home</Link>
            <Link to='/shipping'>Shipping</Link>
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>
            {
                <span>{user.displayName}</span>
            }
            {
                user?.email && <button onClick={signOutGoogle}>Log out</button> 
            }
        </div>
    );
};

export default Header;