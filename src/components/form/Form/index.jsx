import React from 'react';
import InputGroup from 'components/form/InputGroup';
import styles from './index.module.scss';

const Form = ({inputs, title, onSubmit, setUsername, setPassword }) => {

    // const handleChange = (e) => {
    //     if (type == 'text') {
    //         setUsername(e.target.value)
    //     } else {
    //         setPassword(e.target.value)
    //     }
    // }

    const InputList = inputs.map(input => <InputGroup key={input.id} type={input.type} placeholder={input.placeholder} name={input.name} setUsername={setUsername} setPassword={setPassword}
        />)

    return (
        <form className={styles.Form} onSubmit={onSubmit}>
            <h2>{title}</h2>
            {InputList}
            <button>Continue</button>
        </form>
    )
}

export default Form;
