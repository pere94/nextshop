import React from 'react';
import Link from 'next/link';
import styles from '../styles/pages_styles/checkout.module.scss';

import { BsArrowLeftSquare } from "react-icons/bs";

import {ShoppingCartProduct} from '../Components/ShoppingCartProduct/ShoppingCartProduct';
import {AppContext} from '../Context/AppContext';


export default function Checkout() {
    const { state } = React.useContext(AppContext);

    return (
        <div className={styles.CheckoutContainer}>
            <div className={styles.CheckoutContainer__header}>
                <Link href="/">
                    <BsArrowLeftSquare className={styles.CheckoutContainer__header_iconBack}/>
                </Link>
                <p className={styles.CheckoutContainer__header_title}>Checkout</p>
            </div>
            <div className={styles.CheckoutContainer__resumeCart}>
                <p>Total</p>
                <p>precio total</p>
            </div>
            <div className={styles.CheckoutContainer__products}>
                {console.log(state.cart)}
                { state.cart.map(item => (
                    <ShoppingCartProduct 
                        itemCart={item}
                        // title={item.title}
                        // imageURL={item.images[0]}
                        // price={item.price}
                        key={`productIds-${item.id}`}
                    />
                ))}
            </div>
                
            <button className={styles.buttonWithBackground}>Pay</button>
        </div>
    );
}
