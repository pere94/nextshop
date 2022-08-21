import React from "react";
import styles from '../../../styles/pages_styles/admin-dashboard.module.scss';

import {DashboardRightBar} from '../../../templates/DashboardRightBar/DashboardRightBar';
import {DashboardTopBar} from '../../../templates/DashboardTopBar/DashboardTopBar';
import {DashboardContent} from '../../../templates/DashboardContent/DashboardContent';
// import {Chart} from '../../Components/Chart/Chart';
// import endPoints from "../../services/api";
// import { useGetProducts } from "../../hooks/useGetProducts";

export default function AdminDashboard() {

    // const API_PRODUCTS = endPoints.products.getAllProducts();

    // const products = useGetProducts(API_PRODUCTS);
    // // console.log(products);
    // const productsCategoriesObject = products.map(product => product.category);
    // const productsCategories = productsCategoriesObject.map(category => category.name);
    // console.log(productsCategories);

    // const countOccurrences = (arr) => arr.reduce( (arrPrev, itemIterac) => (
    //     (arrPrev[itemIterac] = ++arrPrev[itemIterac] || 1), arrPrev ), {}
    // );
    


    // const data = {
    //     labels: [],
    //     datasets: [{
    //         label: 'Categories',
    //         data: countOccurrences(productsCategories),
    //         borderWidth: 1,
    //         backgroundColor: ['#50af95','#50af80','#50af70','#50af60','#50af50'],
    //     }],
    // };
    return (
        <>
            <DashboardTopBar />
            <DashboardRightBar />
            <DashboardContent>

            </DashboardContent>
            
        </>
    );
}