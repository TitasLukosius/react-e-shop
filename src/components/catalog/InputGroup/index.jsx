import React from 'react';
import styles from './index.module.scss';

const InputGroup = ({ title, type, initValue, onChange }) => {
    return (
        <div className={styles.Input}>
            <label htmlFor={title}>{title}</label>
            <input
                type={type}
                onChange={(e) => onChange(type === 'checkbox' ? title : e.target.value)}
                value={initValue}
                checked={initValue}
            />
        </div>
    )
};

export default InputGroup;