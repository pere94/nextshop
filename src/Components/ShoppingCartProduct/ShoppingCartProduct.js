import React from 'react';
import styles from '../../Components/ShoppingCartProduct/ShoppingCartProduct.module.scss';
import { CgCloseR } from "react-icons/cg";
import {AppContext} from '../../Context/AppContext';


// const pro = JSON.parse(`{
//     "id": 4,
//     "title": "Small Wooden Pizza",
//     "price": 32,
//     "description": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
//     "category": {
//     "id": 5,
//     "name": "Others",
//     "image": "https://api.lorem.space/image?w=640&h=480&r=1108"
//     },
//     "images": [
//     "https://api.lorem.space/image?w=640&h=480&r=4367",
//     "https://api.lorem.space/image?w=640&h=480&r=2840",
//     "https://api.lorem.space/image?w=640&h=480&r=5867"
//     ]
// }`);

// console.log(pro);

function ShoppingCartProduct(props) {
    const {removeFromCart} = React.useContext(AppContext);
    console.log(props.itemCart);
    const {
        title,
        images,
        price,
    } = props.itemCart;

    return (
        <React.Fragment>
            <div className={styles.ShoppingCartProductContainer}>
                <img 
                    title={title} 
                    src={images[0]} 
                    className={styles.ShoppingCartProduct__img} 
                />
                <p title={title} className={styles.ShoppingCartProduct__name}> {title}</p>
                <p className={styles.ShoppingCartProduct__price}>€ {price}</p>
                <span onClick={() => removeFromCart(props.itemCart)}>
                    <CgCloseR className={styles.ShoppingCartProductContainer__delete}/>
                </span>
            </div>
        </React.Fragment>
        
    );
}

export {ShoppingCartProduct};



