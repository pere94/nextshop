import React from "react";
// import styles from '../../styles/pages_styles/admin-dashboard.module.scss';

import {DashboardRightBar} from '../../../templates/DashboardRightBar/DashboardRightBar';
import {DashboardTopBar} from '../../../templates/DashboardTopBar/DashboardTopBar';
import {DashboardContent} from '../../../templates/DashboardContent/DashboardContent';
import {AddProductModal} from '../../../templates/AddProductModal/AddProductModal';

export default function AddProduct() {
    return (
        <>
            <DashboardTopBar />
            <DashboardRightBar />
            <DashboardContent>
                <AddProductModal />
            </DashboardContent>
        </>
    );
}