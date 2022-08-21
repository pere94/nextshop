import React from 'react';
import Image from 'next/future/image';
import styles from '../../Components/Logo/Logo.module.scss';


function Logo(props) {

    return (
        <div className={styles.LogoContainer}>
            <Image width={200} height="35" className={`${styles.navBar_logo} ${styles.hideMov}`} src={props.src_mov} />
            <Image width={200} height="40"  className={`${styles.navBar_logo} ${styles.hideDesk}`} src={props.src_desk} />
        </div>
    );
}

export { Logo };