import React from 'react';
import Link from 'next/link';
import styles from '../styles/pages_styles/create-account.module.scss';

import {LabelInput} from '../Components/LabelInput/LabelInput';
export default function CreateAccount() {
    return (
        <div className={styles.containerCreateAccount}>
            <h3 className={styles.containerCreateAccount__h3}>My Account</h3>

            <div className={styles.containerCreateAccount__name}>
                <LabelInput 
                    textLabel="Name"
                    // onChange={onChange}
                    nameInput="Name"
                    idInput="containerCreateAccount__name"
                    typeInput="text"
                    placeholder="Rara Loareds"
                />
            </div>

            <div className={styles.containerCreateAccount__email}>
                <LabelInput 
                    textLabel="Email"
                    // onChange={onChange}
                    nameInput="Email"
                    idInput="containerCreateAccount__email"
                    typeInput="email"
                    placeholder="email@yourdomain.com"
                />
            </div>

            <div className={styles.containerCreateAccount__password}>
                <LabelInput 
                    textLabel="Password"
                    // onChange={onChange}
                    nameInput="password"
                    idInput="containerCreateAccount__password"
                    typeInput="password"
                    placeholder="************"
                />
            </div>

            <Link href="/">
                <button className={styles.buttonWithBackground}>Create</button>
            </Link>
            
        </div> 
    );
}