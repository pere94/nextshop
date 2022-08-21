import React from 'react';
import Link from 'next/link';
import styles from '../styles/pages_styles/new-password.module.scss';

import {LabelInput} from '../Components/LabelInput/LabelInput';

export default function NewPassword() {
    return (
        <div className={styles.containerNewPassword}>

            <h3 className={styles.containerNewPassword__h3}>Create a new password</h3>
            <p className={styles.containerNewPassword__p}>Enter a new password for your account</p>

            <div className={styles.containerNewPassword__password}>
                <LabelInput 
                    textLabel="Password"
                    // onChange={onChange}
                    nameInput="Password"
                    idInput="containerNewPassword__password"
                    typeInput="password"
                    placeholder="**************"
                />
            </div>

            <div className={styles.containerNewPassword__reEnterPassword}>
                <LabelInput 
                    className=""
                    textLabel="Re-enter Password"
                    // onChange={onChange}
                    nameInput="RePassword"
                    idInput="containerNewPassword__reEnterPassword"
                    typeInput="password"
                    placeholder="**************"
                />
            </div>


            <button className={styles.buttonWithBackground}>Confirm</button>

        </div> 
    );
}