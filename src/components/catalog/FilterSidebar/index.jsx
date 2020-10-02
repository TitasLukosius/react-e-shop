import React from 'react';
import styles from './index.module.scss';

const FilterSidebar = ({children}) => {
    return (
        <div className={styles.FilterSidebar}>
            <div className={styles.Content}>
                <h2>Narrow your search by selected options!</h2>
                {children}
            </div>
        </div>
    )
}

export default FilterSidebar;