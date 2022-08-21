import React from "react";
// import styles from '../../styles/pages_styles/admin-dashboard.module.scss';

import {DashboardRightBar} from '../../../templates/DashboardRightBar/DashboardRightBar';
import {DashboardTopBar} from '../../../templates/DashboardTopBar/DashboardTopBar';
import {DashboardContent} from '../../../templates/DashboardContent/DashboardContent';
import {Chart} from '../../../Components/Chart/Chart';
import endPoints from "../../../services/api";
import { useGetProducts } from "../../../hooks/useGetProducts";
import { AppContext } from "../../../Context/AppContext";

export default function DashboardProducts() {

    useGetProducts(endPoints.products.getAllProducts());
    const {products} = React.useContext(AppContext);

    const productsCategoriesObject = products.map(product => product.category);
    const productsCategories = productsCategoriesObject.map(category => category.name);

    const countOccurrences = (arr) => arr.reduce( (arrPrev, itemIterac) => (
        (arrPrev[itemIterac] = ++arrPrev[itemIterac] || 1), arrPrev ), {}
    );

    const data = {
        labels: [],
        datasets: [{
            label: 'Categories',
            data: countOccurrences(productsCategories),
            borderWidth: 1,
            backgroundColor: ['#50af95'],
        }],
    };

    return (
        <>
            <DashboardTopBar />
            <DashboardRightBar />
            <DashboardContent>
                <Chart 
                    chartData={data}
                />
            </DashboardContent>
        </>
    );
}