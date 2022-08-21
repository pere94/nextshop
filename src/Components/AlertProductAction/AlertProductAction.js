import React from 'react';
import styles from '../../Components/AlertProductAction/AlertProductAction.module.scss';
// import { BiImageAdd } from "react-icons/bi";


function AlertProductAction(props) {

    

    return (
        <div className={styles.AlertProductAction_overlay}>
            <div className={styles.AlertProductAction}>
                <h3 className={styles.AlertProductAction_h3}>{props.text}</h3>
            </div>
        </div>
        
    );
}

export { AlertProductAction };