import React from 'react';
import styles from '../../Components/UserNav/UserNav.module.scss';
import { AiOutlineCaretDown } from 'react-icons/ai';



function UserNav(props) {
    return(           
        <div className={styles.UserNavContainer}>
            <p href="#">{props.userProfile.email}</p>
            <AiOutlineCaretDown style={props.toggle && {rotate: '-360deg'}} className={styles.UserNavContainer__arrow}/>
            
        </div>
    );
}

export { UserNav };