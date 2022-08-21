import React from 'react';
import styles from '../../templates/Grid/Grid.module.scss';

import {ProductGrid} from '../../Components/ProductGrid/ProductGrid';
import {useGetProducts} from '../../hooks/useGetProducts';
import {AppContext} from '../../Context/AppContext';
import endPoints from '../../services/api/index';

const API = endPoints.products.getAllProducts();

function Grid() {
    useGetProducts(API);
    const {products} = React.useContext(AppContext);
    
    return(
        <div className={styles.Grid}>
            {products.map(element => (
                <ProductGrid 
                    product={element}
                    // imageURL={element.images}
                    // currency="€"
                    // price={element.price}
                    // title={element.title}
                    key={element.id}
                />
            ))}
            
        </div>
    );
}

export { Grid };



