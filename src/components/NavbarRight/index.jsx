import React from 'react';
import styles from './index.module.scss';
import {
    Link
} from 'react-router-dom';

const NavbarRight = ({links}) => {

    const link = links.map((link) => {
        return <Link className={styles.Link} to={link.href}>{link.title}</Link>
    })

    return (
        <div className={styles.Right}>
            {link}
        </div>
    )
}

export default NavbarRight;
