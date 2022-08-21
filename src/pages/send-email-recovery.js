import React from 'react';
import Link from 'next/link';
import styles from '../styles/pages_styles/send-email-recovery.module.scss';
import { HiOutlineMail } from 'react-icons/hi';


export default function SendEmailRecovery() {
    return (
        <div className={styles.containerSendEmailRecovery}>

            <h3 className={styles.containerSendEmailRecovery__h3}>Email has been sent</h3>
            <p className={styles.containerSendEmailRecovery__p}>Please check your inbox for instructions on how to reset the password</p>

            <HiOutlineMail className={styles.email_icon}/>

            <Link href="/">
                <button className={styles.buttonWithBackground}>Login</button>
            </Link>

            <p className={styles.containerSendEmailRecovery_backToLogin}>Didn’t receive the email?  <a href='/send-email-recovery'> Resend</a> </p>
        </div> 
    );
}