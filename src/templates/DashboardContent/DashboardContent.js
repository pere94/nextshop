import React from "react";
import styles from '../../templates/DashboardContent/DashboardContent.module.scss';

function DashboardContent(props) {
    return (
        <div className={styles.DashboardContent}>
            <div className={styles.DashboardContent__content}>
               
                {props.children}
               
            </div>

        </div>
    );
}

export {DashboardContent};