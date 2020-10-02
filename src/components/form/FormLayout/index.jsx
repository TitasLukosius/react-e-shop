import React from 'react';
import styles from './index.module.scss';

const FormLayout = ({children}) => {
    return (
        <div className={styles.FormLayout}>
            {children}
        </div>
    )
}

export default FormLayout;