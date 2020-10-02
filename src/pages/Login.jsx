import React from 'react';
import FormLayout from 'components/form/FormLayout';
import Form from 'components/form/Form';

const Login = () => {

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
            <Form inputs={inputs} title={title}/>
        </FormLayout>
    )
}

export default Login
