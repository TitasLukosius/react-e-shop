import React, { useState } from 'react';
import FormLayout from 'components/form/FormLayout';
import Form from 'components/form/Form';

const Register = () => {

    const [signedUsers, setSignedUsers] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = (e) => {
        e.preventDefault();
        console.log(e);
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
    }

    const title = 'Sign Up';

    const inputs = [
        {
            id: 1, name: 'username', type: 'text', placeholder: 'username'
        }, 
        {
            id: 2, name: 'password', type: 'password', placeholder: 'password'
        },
    ];
    return (
        <FormLayout>
            <Form inputs={inputs} title={title} onSubmit={handleRegister} setUsername={setUsername} setPassword={setPassword}/>
        </FormLayout>
    )
}

export default Register
