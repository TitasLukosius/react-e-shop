import React from 'react';
import styles from './index.module.scss';
import {
    Link
} from 'react-router-dom';

const FooterList = ({left, middle, right}) => {

    const leftSide = left.map((link) => {
        return <Link className={styles.LinkL}to={link.href}>{link.title}</Link>
    })

    const middleSide = middle.map((link) => {
        return <p className={styles.LinkM}to={link.href}>{link.description}</p>
    })

    const rightSide = right.map((link) => {
        return <li className={styles.LinkR}to={link.href}>{link.title}</li>
    })

    return (
        <div className={styles.FooterList}>
            <div className={styles.Left}>
                <h3>Visit page</h3>
                {leftSide}
            </div>
            <div className={styles.Middle}>
                <h3>Description</h3>
                {middleSide}
            </div>    
            <div className={styles.Right}>
                <h3>Contacts</h3>
                {rightSide}
            </div>
        </div>
    )
}

export default FooterList;
