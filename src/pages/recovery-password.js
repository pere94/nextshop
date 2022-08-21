import React from 'react';
import Link from 'next/link';
import styles from '../styles/pages_styles/recovery-password.module.scss';

import {LabelInput} from '../Components/LabelInput/LabelInput';

export default function RecoveryPassword() {
    return (
        <div className={styles.containerRecoveryPassword}>

            <h3 className={styles.containerRecoveryPassword__h3}>Password Recovery</h3>
            <p className={styles.containerRecoveryPassword__p}>Inform the email address used to create your account</p>

            <div className={styles.containerRecoveryPassword__email}>
                <LabelInput 
                    textLabel="Email"
                    // onChange={onChange}
                    nameInput="Email"
                    idInput="containerRecoveryPassword__email"
                    typeInput="email"
                    placeholder="email@yourdomain.com"
                />
            </div>

            <Link href="/send-email-recovery">
                <button className={styles.buttonWithBackground}>Submit</button>
            </Link>

            <p className={styles.containerRecoveryPassword_backToLogin}><a href='/user-login'>Back to Login</a> </p>
        </div> 
    );
}