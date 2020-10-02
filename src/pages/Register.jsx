import React from 'react';
import FormLayout from 'components/form/FormLayout';
import Form from 'components/form/Form';

const Register = () => {

    const title = 'Sign Up';

    const inputs = [
        {
            id: 1, name: 'Username', type: 'text', placeholder: 'username'
        }, 
        {
            id: 2, name: 'Email', type: 'Email', placeholder: 'email@email.com'
        },
        {
            id: 3, name: 'Password', type: 'password', placeholder: 'password'
        },
        {
            id: 3, name: 'PasswordRepeat', type: 'password', placeholder: 'repeat password'
        }
    ];
    return (
        <FormLayout>
            <Form inputs={inputs} title={title}/>
        </FormLayout>
    )
}

export default Register
