import React from "react";
import styles from '../../../styles/pages_styles/show-products.module.scss';

import {DashboardRightBar} from '../../../templates/DashboardRightBar/DashboardRightBar';
import {DashboardTopBar} from '../../../templates/DashboardTopBar/DashboardTopBar';
import {DashboardContent} from '../../../templates/DashboardContent/DashboardContent';
import {TableListItem} from '../../../Components/TableListItem/TableListItem';
import {AddProductModal} from '../../../templates/AddProductModal/AddProductModal';
import {EditProductModal} from '../../../templates/EditProductModal/EditProductModal';
import {CloseModal} from '../../../Components/CloseModal/CloseModal';
import {AlertProductAction} from '../../../Components/AlertProductAction/AlertProductAction';

export default function ShowProducts() {
    const [showAddModal, setShowAddModal] = React.useState(false);
    const [productAddAlert, setProductAddAlert] = React.useState(false);
    const [productEditAlert, setProductEditAlert] = React.useState(false);
    const [showEditModal, setShowEditModal] = React.useState(false);
    const [productEditData, setProductEditData] = React.useState({});

    const handleClickAddProduct = () => {
        setShowAddModal(true);
    };

    return (
        <>
            <DashboardTopBar />
            <DashboardRightBar />
            <DashboardContent>
                <>
                    {productAddAlert && <div className={styles.AddProductSuccesfull_Container}>
                        <AlertProductAction 
                            text="Product Added Successfully"
                        />
                    </div>}
                    {productEditAlert && <div className={styles.AddProductSuccesfull_Container}>
                        <AlertProductAction 
                            text="Product Edited Successfully"
                        />
                    </div>}
                    <div className={styles.ShowProducts__addProduct}>
                        <button onClick={handleClickAddProduct} className={styles.ShowProducts__addProduct_button} type="button">Add Product</button>
                    </div>
                    <TableListItem setProductEditData={setProductEditData} setShowEditModal={setShowEditModal}/>
                    {showAddModal && 
                        <div className={styles.ShowProducts__ModalAddProductContainer}>
                            <AddProductModal setProductAddAlert={setProductAddAlert} setShowAddModal={setShowAddModal} />
                            <span>
                                <CloseModal setShowAddModal={setShowAddModal} />
                            </span>
                        </div>
                    }
                    {showEditModal && 
                        <div className={styles.ShowProducts__ModalAddProductContainer}>
                            <EditProductModal 
                                productEditData={productEditData} 
                                setProductEditAlert={setProductEditAlert} 
                                setShowEditModal={setShowEditModal} 
                            />
                            <span>
                                <CloseModal setShowAddModal={setShowEditModal} />
                            </span>
                        </div>}
                </>
            </DashboardContent>
        </>
    );
}