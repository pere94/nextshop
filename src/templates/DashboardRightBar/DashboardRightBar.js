import React from "react";
import styles from '../../templates/DashboardRightBar/DashboardRightBar.module.scss';
import src_desk from '../../img/logo_dashboard.png';
import { TbLayoutDashboard } from "react-icons/tb";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { MdOutlineCategory } from "react-icons/md";

import {Logo} from '../../Components/Logo/Logo';
import {LinksRightBarDashboard} from '../../Components/LinksRightBarDashboard/LinksRightBarDashboard';


function DashboardRightBar() {
    return (
        <div className={styles.DashboardRightBar}>
            <Logo 
                src_mov={src_desk}
                src_desk={src_desk}
            />
            <hr />
            <div className={styles.DashboardRightBar_linksMenu}>
                <LinksRightBarDashboard 
                    icon={< TbLayoutDashboard size="20px" color="#8FE3CF"/>}
                    menuName="DashBoard"
                    listExist={false}
                    path="/admin-dashboard/dashboard/"
                />
                <LinksRightBarDashboard 
                    icon={< AiOutlineShoppingCart size="20px" color="#8FE3CF"/>}
                    menuName="Products"
                    listExist={true}
                    list={["Show Products", "Add Product"]}
                    path="/admin-dashboard/products/"
                />
                <LinksRightBarDashboard 
                    icon={< MdOutlineCategory size="20px" color="#8FE3CF"/>}
                    menuName="Categories"
                    listExist={true}
                    list={["Show Categories", "Create Category", "Delete Categorys"]}
                    path="/categories"
                />
                <LinksRightBarDashboard 
                    icon={< FiUsers size="20px" color="#8FE3CF"/>}
                    menuName="Users"
                    listExist={true}
                    list={["Show Users", "Add Users", "Delete Users",]}
                    path="/users"
                />
            </div>
        </div>
    );
}

export {DashboardRightBar}; 