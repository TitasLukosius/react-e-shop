import React from 'react';
import styles from './index.module.scss';
import FooterList from 'components/FooterList';

const leftSide = [
    {id: 1, title: 'Home Page', href: '/'},
    {id: 2, title: 'Catalog', href: '/catalog'},
    {id: 3, title: 'Item', href: '/item'}
];

const middle = [
    {id:1, title: 'Info', description: 'buy buy buy buy buy buy buy buy buy buy buy buybuy buy buybuy buy buybuy buy buybuy buy buybuy buy buy buy buy buy'}
]

const rightSide = [
    {id: 1, title: 'Zirgo 3a-15'},
    {id: 2, title: '+370 00 00 000'},
    {id: 3, title: 'gitara@gitara.lt'}
]

const Footer = () => {
    return (
        <div className={styles.Footer}>
            <FooterList left={leftSide} right={rightSide} middle={middle} />
        </div>
    )
}

export default Footer;
