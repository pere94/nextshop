import React from 'react';
import Link from 'next/link';
import styles from'../styles/pages_styles/edit-my-account.module.scss';

import {LabelInput} from '../Components/LabelInput/LabelInput';

export default function EditMyAccount() {
    return (
        <div className={styles.containerEditMyAccount}>
            <h3 className={styles.containerEditMyAccount__h3}>My Account</h3>

            <div className={styles.containerEditMyAccount__name}>
                <LabelInput 
                    textLabel="Name"
                    // onChange={onChange}
                    nameInput="Name"
                    idInput="containerEditMyAccount__name"
                    typeInput="text"
                    placeholder="Rara Loareds"
                />
            </div>

            <div className={styles.containerEditMyAccount__email}>
                <LabelInput 
                    className=""
                    textLabel="Email"
                    // onChange={onChange}
                    nameInput="Email"
                    idInput="containerEditMyAccount__email"
                    typeInput="email"
                    placeholder="email@yourdomain.com"
                />
            </div>

            <div className={styles.containerEditMyAccount__password}>
                <LabelInput 
                    className=""
                    textLabel="Password"
                    // onChange={onChange}
                    nameInput="EmaPasswordil"
                    idInput="containerEditMyAccount__password"
                    typeInput="password"
                    placeholder="***********"
                />
            </div>
            
            <Link href="/">
                <button className={styles.buttonWithoutBackground}>Edit</button>
            </Link>
            
        </div> 
    );
}