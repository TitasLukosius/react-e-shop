import React from 'react';
import styles from './index.module.scss';

const InputGroup = ({type, placeholder, name}) => {
    return (
        <div className={styles.InputGroup}>
            <input
                name={name}
                type={type}
                placeholder={placeholder}
            />
        </div>
)
}

export default InputGroup
