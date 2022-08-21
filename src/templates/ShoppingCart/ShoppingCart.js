import {useContext} from 'react';
import Link from 'next/link';
import styles from './ShoppingCart.module.scss';
// import { BsArrowLeftSquare } from "react-icons/bs";

import {ShoppingCartProduct} from '../../Components/ShoppingCartProduct/ShoppingCartProduct';
import {AppContext} from '../../Context/AppContext';



function ShoppingCart(props) {
    const { state } = useContext(AppContext);

    const totalPrice = () => {
        let price = 0;
        state.cart.map(element => {
            price = price + element.price;
        });
        return price;
    }

    return (
            <div className={`${styles.ShoppingCartContainer} ${props.toggleCart && styles.visibleShoppingCartContainer}`}>
                <div className={styles.ShoppingCartContainer__header}>
                    {/* <BsArrowLeftSquare className={styles.ShoppingCartContainer__header_iconBack}/> */}
                    <p className={styles.ShoppingCartContainer__header_title}>Shopping Cart</p>
                </div>
                <div className={styles.ShoppingCartContainer__products}>
                    { state.cart.map(elem => (
                        <ShoppingCartProduct 
                            itemCart={elem}
                            // title={item.title}
                            // imageURL={item.images[0]}
                            // price={item.price}
                            key={`productId-${elem.id}`}
                        />
                    ))}
                </div>
                <div className={styles.ShoppingCartContainer__resumeCart}>
                    <p>Total</p>
                    <p>{totalPrice()}</p>
                </div>
                <Link href="/checkout">
                    <button className={styles.buttonWithBackground}>Checkout</button>
                </Link>
            </div>
    );
}

export {ShoppingCart};