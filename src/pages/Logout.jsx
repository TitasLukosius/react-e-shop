import React from 'react';
import { Redirect } from 'react-router-dom';

const Logout = () => {

    localStorage.removeItem('loged-username');
    localStorage.removeItem('loged-password');

    return (
        <Redirect to="/login" />
    )
}

export default Logout;
