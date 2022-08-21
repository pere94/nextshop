import React from "react";
import axios from 'axios';
import {EditProduct} from '../../services/api/productServices';
import styles from '../../templates/EditProductModal/EditProductModal.module.scss';
import { BiImageAdd } from "react-icons/bi";


import {LabelInput} from '../../Components/LabelInput/LabelInput';
import {DragDrop} from '../../Components/DragDrop/DragDrop';
import { AppContext } from "../../Context/AppContext";


// import { TbLayoutDashboard } from "react-icons/tb";

{/* <LabelInput 
    textLabel="Email"
    // onChange={onChange}
    nameInput="email"
    idInput="containerLogin__email"
    typeInput="email"
    placeholder="email@yourdomain.com"
    inputRef={emailRef}
/> */}


function EditProductModal(props) {
    const {setProducts} = React.useContext(AppContext);

    console.log(props.productEditData);



    const titleRef = React.useRef(null);       
    const priceRef = React.useRef(null); 
    const categoryRef = React.useRef(null); 
    const descriptionRef = React.useRef(null); 

    const [imageName, setImageName] = React.useState(props.productEditData.images[0]);
    
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const title = titleRef.current.value;
        const price = priceRef.current.value;
        const description = descriptionRef.current.value;
        const category = categoryRef.current.value;

        const data = {
            "title": title,
            "price": price,
            "description": description,
            "categoryId": category,
            "images": [
                "https://api.lorem.space/image/shoes?w=640&h=480&r=3031",
                // imageName,
            ]
        };
        console.log(data);
        EditProduct(props.productEditData.id, data).then((response) => {
            console.log(response);
            props.setShowEditModal(false);
            props.setProductEditAlert(true);

            setTimeout(async () => {
                const resp = await axios.get('https://api.escuelajs.co/api/v1/products');
                setProducts(resp.data);
                props.setProductEditAlert(false);
            }, 2000);

        });       
    };

    return (
        <div className={styles.EditProductModal}>
            
            <form onSubmit={handleSubmit}>
                <div className={styles.EditProductModal_title}>
                    <LabelInput 
                        defaultValue={props.productEditData.title}
                        textLabel="Title"
                        nameInput="title"
                        idInput="EditProductModal__title_input"
                        typeInput="text"
                        placeholder="Insert product name"
                        inputRef={titleRef}
                    />
                </div>
                <div className={styles.EditProductModal__price}>
                    <LabelInput 
                        defaultValue={props.productEditData.price}
                        textLabel="Price"
                        nameInput="price"
                        idInput="EditProductModal_price_input"
                        typeInput="number"
                        placeholder="Insert product price"
                        inputRef={priceRef}
                    />
                </div>
                <div className={styles.EditProductModal__category}>
                    <label htmlFor="category" className={styles.label}>Category</label>
                    <select defaultValue={props.productEditData.category.id} ref={categoryRef} name="category" id="category" className={styles.input}>
                        <option value="0" defaultValue key="EditProductModal_category_0">Select Category</option>
                        <option value="1" key="EditProductModal_category_1">Clothes</option>
                        <option value="2" key="EditProductModal_category_2">Electronics</option>
                        <option value="3" key="EditProductModal_category_3">Furnitures</option>
                        <option value="4" key="EditProductModal_category_4">Shoes</option>
                        <option value="5" key="EditProductModal_category_5">Others</option>
                    </select>
                </div>
                <div className={styles.EditProductModal__description}>
                    <label htmlFor="description" className={styles.label}>Description</label>
                    <textarea defaultValue={props.productEditData.description} ref={descriptionRef} id="description" name="description" className={styles.input} type="textarea" placeholder="Insert a Product Description"></textarea>
                </div>
                <div className={styles.EditProductModal__photo}>
                    <DragDrop 
                        setImageName={setImageName}
                    />
                </div>
                <div className={styles.EditProductModal__SaveButton}>
                    <button type="submit" className={styles.EditProductModal__SaveButton_button}>Save</button>
                </div>
            </form>
         
        </div>
    );
}

export {EditProductModal}; 