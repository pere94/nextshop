import axios from 'axios';
import endPoints from '../../services/api/index';

const AddProduct = async (body) => {
    const config = {
        headers: {
            accept: '*/*',
            'Content-Type': 'application/json',
        },
    };
    const response = await axios.post(endPoints.products.addProducts(), body, config);
    return response.data;
};

const DeleteProduct = async (id) => {
    const response = await axios.delete(endPoints.products.deleteProduct(id));
    return response.data;
};

const EditProduct = async (id , body) => {
    const config = {
        headers: {
            accept: '*/*',
            'Content-Type': 'application/json',
        },
    };
    const response = await axios.put(endPoints.products.updateProduct(id), body, config);
    return response.data;
};

export { AddProduct, DeleteProduct, EditProduct };