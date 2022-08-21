import React from "react";
import {useRouter} from 'next/router';
import styles from '../../templates/DashboardTopBar/DashboardTopBar.module.scss';
import { BsShop } from "react-icons/bs";
import { AiFillCaretLeft } from "react-icons/ai";

import { AppContext } from '../../Context/AppContext';

function DashboardTopBar() {
    const {userProfile, infoLoggedUser} = React.useContext(AppContext);
    const [toggleMenu, setToggleMenu] = React.useState(false);
    const router = useRouter();

    React.useEffect(() => {
        infoLoggedUser();

    }, []);



    
    return (
        <div className={styles.DashboardTopBar}>
            <div className={styles.DashboardTopBar__contect}>
                <button onClick={() => router.push('/')} className={styles.DashboardTopBar__contect_button}>
                    <BsShop className={styles.DashboardTopBar__contect_button_IconBack}/> Back to the Store
                </button>
                <div onClick={() => setToggleMenu(!toggleMenu)} className={styles.DashboardTopBar__contect_UserInfo}>
                    <p>Hola, {userProfile?.name}</p>
                    <AiFillCaretLeft 
                        className={`${styles.DashboardTopBar__contect_UserInfo_arrowLeft} ${toggleMenu && styles.DashboardTopBar__contect_UserInfo_arrowDown}`} 
                        size="10px" 
                        color="white"
                    />
                    <img src={userProfile?.avatar} className={styles.DashboardTopBar__contect_UserInfo_avatar}/>
                </div>
            </div>
        </div>
    );
}

export {DashboardTopBar}; 