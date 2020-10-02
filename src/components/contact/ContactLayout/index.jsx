import React from 'react';
import styles from './index.module.scss';

const ContactLayout = ({children}) => {
    return (
        <div className={styles.ContactLayout}>
            {children}
        </div>
    )
}

export default ContactLayout;