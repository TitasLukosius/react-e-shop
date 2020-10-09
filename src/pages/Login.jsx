
import FormLayout from 'components/form/FormLayout';
import Form from 'components/form/Form';
import React, { useState, useEffect } from 'react';

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {

        localStorage.setItem('loged-username', username);
        localStorage.setItem('loged-password', password);
    }

    const title = 'Login';

    const inputs = [
        {
            id: 1, name: 'Username', type: 'text', placeholder: 'username'
        }, 
        {
            id: 2, name: 'Password', type: 'password', placeholder: '********'
        }
    ];
    
    return (
        <FormLayout>
            <Form inputs={inputs} title={title} onSubmit={handleLogin} setUsername={setUsername} setPassword={setPassword}/>
        </FormLayout>
    )
}

export default Login;
