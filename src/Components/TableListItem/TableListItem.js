import React from "react";
import styles from '../../Components/TableListItem/TableListItem.module.scss';
import axios from 'axios';
import { AiFillEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";

import {useGetProducts} from '../../hooks/useGetProducts';
import endPoints from '../../services/api/index';
import { AppContext } from "../../Context/AppContext";
import {DeleteProduct} from "../../services/api/productServices";
import {AlertProductAction} from "../../Components/AlertProductAction/AlertProductAction";

function TableListItem(props) {
    const [productDeleteAlert, setProductDeleteAlert] = React.useState(false);
    useGetProducts(endPoints.products.getAllProducts());
    const {products, setProducts} = React.useContext(AppContext);

    const handleDeleteIconClick = async (id) => {
        DeleteProduct(id);
        setProductDeleteAlert(true);
        console.log('Producto con ID: '+ id + ' eliminado');
        setTimeout(async () => {
            const resp = await axios.get('https://api.escuelajs.co/api/v1/products');
            setProducts(resp.data);
            setProductDeleteAlert(false);
        }, 2000);

    };

    const handleEditIconClick = (item) => {
        props.setShowEditModal(true);
        props.setProductEditData(item);
    };
    
    return (
        <div className={styles.TableListItem}>
            {productDeleteAlert && <div className={styles.AlertProductAction_Container}>
                <AlertProductAction 
                    text="Product Deleted Successfully"
                />
            </div>}
            <table className={styles.TableListItem_table}>
                <thead>
                    <tr className={styles.TableListItem_row}>
                        <th className={styles.TableListItem_heading}>Name</th>
                        <th className={styles.TableListItem_heading}>Category</th>
                        <th className={styles.TableListItem_heading}>Price</th>
                        <th className={styles.TableListItem_heading}>ID</th>
                        <th className={styles.TableListItem_heading}></th>
                        <th className={styles.TableListItem_heading}></th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(item => (
                        <tr key={item.id+"TableListItem_row"} className={styles.TableListItem_row}>
                            <td key={item.id+item.title} className={`${styles.TableListItem_tableData} ${styles.titleImage_center}`}>
                                <img className={styles.TableListItem_tableData_image} src={item.images[0]} />
                                {item.title}
                            </td>
                            <td key={item.id+item.category.name} className={styles.TableListItem_tableData}>{item.category.name}</td>
                            <td key={item.id+item.price} className={styles.TableListItem_tableData}>€{item.price}</td>
                            <td key={item.id} className={styles.TableListItem_tableData}>{item.id}</td>
                            <td key={item.id+"Edit"} className={styles.TableListItem_tableData}>
                                <span onClick={() => handleEditIconClick(item)}>
                                    <AiFillEdit className={styles.TableListItem_tableData_edit}/>
                                </span>
                            </td>
                            <td key={item.id+"Delete"} className={styles.TableListItem_tableData}>
                                <span onClick={() => handleDeleteIconClick(item.id)}>
                                    <AiFillDelete className={styles.TableListItem_tableData_delete}/>
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table> 

        </div>
    );
}

export {TableListItem};