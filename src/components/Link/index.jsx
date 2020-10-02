import React from 'react';
import styles from './index.module.scss';

const Link = ({title}) => {

    return (
        <a className={styles.Link}>
           {title}
        </a>
    )
}

export default Link;
