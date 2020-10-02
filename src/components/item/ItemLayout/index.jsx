import React from 'react';
import styles from './index.module.scss';


const ItemLayout = ({children}) => {
    return (
        <div className={styles.ItemLayout}>
            {children}
        </div>
    )
}

export default ItemLayout;
