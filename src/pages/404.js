import React from 'react';
import styles from '../styles/pages_styles/404.module.scss';
import img_404 from '../img/404.webp';
import Image from 'next/image';


export default function NotFound() {
    return (
        <div className={styles.container404}>
            <Image width={500} height={500} className={styles.container404__img} src={img_404} alt='404'/>
            <h3 className={styles.container404__h3}><a href='/'>Back to HompPage</a></h3>    
        </div> 
    );
}