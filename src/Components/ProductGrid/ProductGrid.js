import React from 'react';
import Image from 'next/image';
import styles from '../ProductGrid/ProductGrid.module.scss';
import { BsCartPlus } from 'react-icons/bs';
import {AppContext} from '../../Context/AppContext';
import {ProductDetail} from '../../templates/ProductDetail/ProductDetail';


function ProductGrid(props) {
    const { addToCart } = React.useContext(AppContext);
    const [showDescription, setShowDescription] = React.useState(false);
    const {
        title,
        images,
        price,
    } = props.product;

    const handleDescription = () => {
        // asd
    };

    return(
        <>
            <div className={styles.ProductGrid}>
                <img 
                    onClick={() => setShowDescription(true)}
                    width={162} 
                    height={200} 
                    title={title} 
                    src={images[0]} 
                    className={styles.ProductGrid__img} 
                />
                <div className={styles.ProductGrid__info}>
                    <div onClick={() => setShowDescription(true)} className={styles.ProductGrid__info_left}>
                        <p className={styles.ProductGrid__left_price}>€ {price}</p>
                        <p title={title} className={styles.ProductGrid__left_name}> {title}</p>
                    </div>
                    
                    
                    <div className={styles.ProductGrid__info_right}>
                        <span onClick={() => addToCart(props.product)} className={styles.ProductGrid__right_cart}>
                            <BsCartPlus className={styles.cart}/>
                        </span>
                    </div>
                </div>
            </div>
            {showDescription && 
                <ProductDetail 
                    productInfo={props.product} 
                    showDescription={showDescription}
                    setShowDescription={setShowDescription}
                    addToCart={addToCart}
                />
            }
        </>
    );
}

export { ProductGrid };