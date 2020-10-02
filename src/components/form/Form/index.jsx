import React from 'react';
import InputGroup from 'components/form/InputGroup';
import styles from './index.module.scss';

const Form = ({inputs, title}) => {

    const InputList = inputs.map(input => <InputGroup key={input.id} type={input.type} placeholder={input.placeholder} name={input.name}/>)

    return (
        <form className={styles.Form}>
            <h2>{title}</h2>
            {InputList}
            <button>Continue</button>
        </form>
    )
}

export default Form;
