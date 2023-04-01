import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <h2>Please Register</h2>
            <form action="">
                <input type="input" />
                <br />
                <input type="password" />
                <br />
                <input type="submit" value='Submit'/>
            </form>
            <Link to='/Login'>Already Registered</Link>
        </div>
    );
};

export default Register;