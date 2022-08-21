import React from "react";
import styles from '../../Components/CloseModal/CloseModal.module.scss';
import { AiOutlineClose } from "react-icons/ai";


function CloseModal(props) {

    const handleCloseModalClick = () => {
        props.setShowAddModal(false);
    };

    return (
        <div className={styles.CloseModal}>
            <AiOutlineClose onClick={handleCloseModalClick} className={styles.CloseModal_icon}/>
        </div>
    );
}

export {CloseModal}; 