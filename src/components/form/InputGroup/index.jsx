import React from 'react';
import styles from './index.module.scss';

const InputGroup = ({type, placeholder, name, setUsername, setPassword}) => {

        const handleChange = (e) => {
        if (type == 'text') {
            setUsername(e.target.value)
        } else {
            setPassword(e.target.value)
        }
    }

    return (
        <div className={styles.InputGroup}>
            <input
                name={name}
                type={type}
                placeholder={placeholder}
                onChange={handleChange}
            />
        </div>
)
}

export default InputGroup
