import React from 'react';
import Link from 'next/link';
import styles from '../styles/pages_styles/my-account.module.scss';

export default function MyAccount() {
    return (
        <div className={styles.containerMyAccount}>
            <h3 className={styles.containerMyAccount__h3}>My Account</h3>

            <div className={styles.containerMyAccount__name}>
                <label className={styles.label}>Name</label>
                <p className={styles.containerMyAccount__name_p}>Ana Rosa</p>
            </div>

            <div className={styles.containerMyAccount__email}>
                <label className={styles.label}>Email address</label>
                <p className={styles.containerMyAccount__email_p}>email@yourdomain.com</p>
            </div>

            <div className={styles.containerMyAccount__password}>
                <label className={styles.label}>Password</label>
                <p className={styles.containerMyAccount__password_p}>**************</p>
            </div>

            <Link href="/edit-my-account">
                <button className={styles.buttonWithoutBackground}>Edit</button>
            </Link>
            
        </div> 
    );
}