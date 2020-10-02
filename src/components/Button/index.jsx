import React from 'react';
import styles from "./index.module.scss";

const Button = ({ children, color, onClick }) => {
    
    const colorClass = color ?? 'Primary';

    return (
        <div className={`${styles.Btn} ${styles[colorClass]}`} onClick={onClick}>
            {children}
        </div>
    )
}

export default Button;