import React from 'react';
import styles from './index.module.scss';

const HomeLayout = ({children}) => {
    return (
        <div className={styles.HomeLayout}>
            {children}
        </div>
    )
}

export default HomeLayout;