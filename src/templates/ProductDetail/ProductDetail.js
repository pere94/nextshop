import React from 'react';
import Image from 'next/future/image';

import { AiFillCloseCircle } from 'react-icons/ai';
import { BsCartPlus } from 'react-icons/bs';
import styles from '../../templates/ProductDetail/ProductDetail.module.scss';




function ProductDetail(props) {
    const {
        title,
        images,
        price,
        description,
    } = props.productInfo;

    return (
        <div className={styles.ProductDetail}>
            <span onClick={() => props.setShowDescription(false)}>
                <AiFillCloseCircle className={styles.ProductDetail__close} />
            </span>
            <Image width={320} height={320} src={images[0]} className={styles.ProductDetail__image} />
            <div className={styles.ProductDetail__info}>
                <p className={styles.ProductDetail__info_precio}>${price}</p>
                <p className={styles.ProductDetail__info_title}>{title}</p>
                <p className={styles.ProductDetail__info_description}>{description}</p>
            </div>
            <button onClick={() => props.addToCart(props.productInfo)} className={styles.buttonWithBackground}>
                <BsCartPlus className={styles.buttonWithBackground_icon} />
                Add to Cart
            </button>
        </div>
    );
}

export {ProductDetail};