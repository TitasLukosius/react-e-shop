import React from 'react';
import styles from './index.module.scss';
import NavbarLeft from 'components/NavbarLeft';
import NavbarRight from 'components/NavbarRight';

const leftLinks = [
    {id: 1, title: 'Home Page', href: '/'},
    {id: 2, title: 'Catalog', href: '/catalog'},
];

let rightLinks = [];

const loggedUser = localStorage.getItem('loged-username')

if(loggedUser) {
     rightLinks = [
        {id: 1, title: loggedUser},
        {id: 2, title: '| Basket', href: '/basket'},
        {id: 3, title: '| Logout', href: '/logout'}
    ]
} else {
 rightLinks = [
        {id: 1, title: 'Login', href: '/login'},
        {id: 2, title: '| Sign Up', href: '/register'},
        {id: 3, title: '| Basket', href: '/basket'}
    ]
}
const Navbar = () => {
    return (
        <div className={styles.Navbar}>
            <NavbarLeft links={leftLinks}/>
            <NavbarRight links={rightLinks}/>
        </div>
    )
}

export default Navbar
