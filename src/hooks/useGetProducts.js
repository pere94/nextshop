import React from 'react';
import axios from 'axios';
import { AppContext } from '../Context/AppContext';

async function useGetProducts(API) {
    const {setProducts} = React.useContext(AppContext);

    React.useEffect(() => {

        async function getProducts() {
            const resp = await axios.get(API);
            // console.log(resp.data);
            setProducts(resp.data);
            return resp.data;
        }
        
        getProducts(); 
    }, []); 
    
}


export {useGetProducts};