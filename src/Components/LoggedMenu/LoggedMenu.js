import React from 'react';
import styles from '../../Components/LoggedMenu/LoggedMenu.module.scss';

import { AppContext } from '../../Context/AppContext';

function LoggedMenu(props) {
    const {signOut, userProfile} = React.useContext(AppContext);

    return(
        <div className={`${styles.LoggedMenuContainer} ${props.toggle && styles.visible}`}>
            <img src={userProfile.avatar} className={styles.LoggedMenuContainer_avatar}/>
            <p href="#">Hola, {userProfile.name}</p>
            <a href="#">My Order</a>
            <a href="/my-account">My Account</a>
            <a onClick={signOut} href="#">Sign Out</a>
        </div>
    );
}

export { LoggedMenu };