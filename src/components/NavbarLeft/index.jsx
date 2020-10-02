import React from 'react';
import styles from './index.module.scss';
import {
    Link
} from 'react-router-dom';

const NavbarLeft = ({links}) => {

    const link = links.map((link) => {
        return <Link className={styles.Link}to={link.href}>{link.title}</Link>
    })

    return (
        <div className={styles.Left}>
            <img src="https://pngimg.com/uploads/smoke/smoke_PNG55225.png"></img>
            {link}
        </div>
    )
}

export default NavbarLeft;
