import React, { useContext } from 'react';
import {useRouter} from 'next/router';
import Link from 'next/link';
import styles from '../../templates/Nav/Nav.module.scss';
import { TiThMenu } from 'react-icons/ti';
import { AiOutlineClose } from 'react-icons/ai';
import { GrUserAdmin } from 'react-icons/gr';
import src_desk from '../../img/logo_yard_sale.svg';
import src_mov from '../../img/favicon_bota_fora.svg';
// import { BsArrowLeftSquare } from "react-icons/bs";

import { AppContext } from '../../Context/AppContext';

import {CartIcon} from '../../Components/CartIcon/CartIcon';
import {Logo} from '../../Components/Logo/Logo';
import {NavLinks} from '../../Components/NavLinks/NavLinks';
import {UserNav} from '../../Components/UserNav/UserNav';
import {LoggedMenu} from '../../Components/LoggedMenu/LoggedMenu';
import {ShoppingCart} from '../ShoppingCart/ShoppingCart';
import {Login} from '../../templates/Login/Login';



function Nav() {
    const {userProfile , state, logged, isAdmin, infoLoggedUser} = useContext(AppContext);
    const router = useRouter();

    const [toggle, setToggle] = React.useState(false);
    const [toggleCart, settoggleCart] = React.useState(false);
    const [toggleLogin, setToggleLogin] = React.useState(false);
    const [activeBubbleMenu, setactiveBubbleMenu] = React.useState(true);

    const handleLoginModal = (futureState) => {
        setToggleLogin(futureState);
        console.log(userProfile);
    };

    React.useEffect(() => {
        infoLoggedUser();
    }, []);
    
    

    return (
        <>
            <nav className={styles.Nav}>
                <div className={styles.navLeft}>
                    <span onClick={() => setactiveBubbleMenu(!activeBubbleMenu)}>
                        {activeBubbleMenu ? 
                            <TiThMenu className={styles.NavBarMovil__icon}/> : 
                            <AiOutlineClose className={styles.NavBarMovil__icon}/>
                        }  
                    </span>
                    <Logo 
                        src_desk={src_desk}
                        src_mov={src_mov}
                    />
                </div>

                <div className={styles.navRight}>
                    <NavLinks activeBubbleMenu={activeBubbleMenu} />
                    <>
                        {logged && 
                            <>
                                <div onClick={() => {setToggle(!toggle); settoggleCart(false)}} className={styles.navRight__userInfo}>
                                    <UserNav userProfile={userProfile} toggle={toggle} />
                                    {<LoggedMenu toggle={toggle}/>}
                                </div>

                                {isAdmin ? 
                                    <button onClick={() => router.push('/admin-dashboard/dashboard/dashboard')} className={styles.navRight__button}>
                                        <GrUserAdmin className={styles.navRight__button_IconStore}/> Admin Dashboard
                                    </button>
                                    :
                                    <div onClick={() => {settoggleCart(!toggleCart); setToggle(false)}}>
                                        <CartIcon />
                                    </div>
                                }
                                
                            </>
                        }
                        {!logged && 
                            <>
                                <div className={styles.navRightUnlogged}>
                                    <button onClick={() => handleLoginModal(true)} className={styles.buttonWithoutBackground}>Login</button>
                                    <Link href="/create-account">
                                        <button className={styles.buttonWithBackground}>Sign up</button>
                                    </Link>
                                </div> 
                            </>
                        }
                    </>
                </div>

                <ShoppingCart 
                    toggleCart={toggleCart}
                />
            </nav>
            
            {/* Modal del Login */}
            {toggleLogin && 
                <div className={styles.NavLoginContainer}>
                    <Login stateMenuUser={state.logged} setToggleLogin={handleLoginModal}/>
                    <AiOutlineClose onClick={() => handleLoginModal(false)} className={styles.containerLogin__backArrow}/>
                </div>
            }
        </>
            
    );
}

export { Nav };