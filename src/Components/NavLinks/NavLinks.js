import React from 'react';
import styles from'../../Components/NavLinks/NavLinks.module.scss';


function NavLinks(props) {
    return (
        <>
            <ul className={`${styles.NavBar__NavLinks} ${styles.NavBarMov__NavLinks}  ${(props.activeBubbleMenu && styles.hide)}`} >
                <li className={styles.NavBar__NavLinks__item}><a href="/">All</a></li>
                <li className={styles.NavBar__NavLinks__item}><a href="/nav">Clothes</a></li>
                <li className={styles.NavBar__NavLinks__item}><a href="#">Electronics</a></li>
                <li className={styles.NavBar__NavLinks__item}><a href="#">Furnitures</a></li>
                <li className={styles.NavBar__NavLinks__item}><a href="#">Toys</a></li>
                <li className={styles.NavBar__NavLinks__item}><a href="#">Others</a></li>
            </ul>
        </>
    );
}

export { NavLinks };