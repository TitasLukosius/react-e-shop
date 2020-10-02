import React from 'react';
import styles from "./index.module.scss";

const Card = ({ children }) => {
    
    return (
        <div className={styles.Card}>
            { children }
        </div>
    )
}

export default Card;
