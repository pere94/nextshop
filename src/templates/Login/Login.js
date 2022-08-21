import React, { useContext } from 'react';
import Link from 'next/link';
import styles from'../../templates/Login/Login.module.scss';

import {LabelInput} from '../../Components/LabelInput/LabelInput';
import {AppContext} from '../../Context/AppContext';


function Login(props) {
    const { signIn, changeLogin } = useContext(AppContext);

    const emailRef = React.useRef(null);       
    const passwordRef = React.useRef(null);       

    const handleSubmit = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
    
        signIn(email, password).then( () => {
            console.log("Login successful");
        });
        changeLogin(true);
        props.setToggleLogin(false);
    };


    return (
        <div className={styles.containerLogin}>
            <form onSubmit={handleSubmit} className={styles.containerLogin__form}>
                <div className={styles.containerLogin__email}>
                    <LabelInput 
                        textLabel="Email"
                        // onChange={onChange}
                        nameInput="email"
                        idInput="containerLogin__email"
                        typeInput="email"
                        placeholder="email@yourdomain.com"
                        inputRef={emailRef}
                    />
                </div>
                
                <div className={styles.containerLogin__password}>
                    <LabelInput 
                        textLabel="Password"
                        // onChange={onChange}
                        nameInput="password"
                        idInput="containerLogin__password"
                        typeInput="password"
                        placeholder="***********"
                        inputRef={passwordRef}
                    />
                </div>

                <button type='submit' className={styles.buttonWithBackground}>Log in</button>
                <p className={styles.containerLogin_forgotPass}><a href='/recovery-password'>Forgot my Password</a> </p>
                
                <button className={styles.buttonWithoutBackground}>Sign up</button>
                {/* <Link href="/create-account">
                </Link> */}
            </form> 
        </div>
        
    );
}

export {Login};
