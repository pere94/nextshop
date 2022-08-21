import React from 'react';
import styles from'../../Components/OrderFilter/OrderFilter.module.scss';
import { AppContext } from '../../Context/AppContext';
import endPoints from '../../services/api/index';
import axios from 'axios';

// como hacer el llamado
{/* <Order 
    className="hola" con esta clase le damos tamaño al order
    option={[["value1", "option1"], ["value2", "option2"], ["value3", "option3"], ...Todas las opciones del select]} 
/> */}

function OrderFilter(props) {

    const [selectValue, setSelectValue] = React.useState("0");
    const {setProducts} = React.useContext(AppContext);

    let API = (selectValue == "0" ? 
    'https://api.escuelajs.co/api/v1/products' : 
    endPoints.categories.getCategoryItems(selectValue, 100, 0));

    const handleOnChangeSelectValue = (event) => {
        setSelectValue(event.target.value);
    };
    
    React.useEffect(() => {
        async function getProducts() {
            const resp = await axios.get(API);
            // console.log(resp.data);
            setProducts(resp.data);
        }
        getProducts(); 
    }, [selectValue]);

    return (
        <div className={props.className}>
            <div className={styles.SelectContainer}>
                <select onChange={handleOnChangeSelectValue} className={styles.SelectContainer__select}>
                    <option value="0" defaultValue>All</option>
                    {props.option.map(opt => (<option key={opt[1]} value={opt[0]}>{opt[1]}</option>))}
                </select>
                <span className={styles.SelectContainer__customArrow}></span>
            </div>
        </div>
    );
}

export { OrderFilter };