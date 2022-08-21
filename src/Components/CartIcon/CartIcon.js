import React from 'react';
import styles from '../../Components/CartIcon/CartIcon.module.scss';
import { BsCartCheck } from 'react-icons/bs';
import {AppContext} from '../../Context/AppContext';


function CartIcon() {
    const { state } = React.useContext(AppContext);
    return(
        <div className={styles.CartIconContainer}>
            <BsCartCheck className={styles.CartIconContainer__icon} />
            <p className={styles.CartIconContainer__counter}>{state.cart.length}</p>
        </div>
    );
}

export { CartIcon };