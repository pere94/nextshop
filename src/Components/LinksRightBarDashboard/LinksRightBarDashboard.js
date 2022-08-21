import React from "react";
import styles from '../../Components/LinksRightBarDashboard/LinksRightBarDashboard.module.scss';
import { AiFillCaretLeft } from "react-icons/ai";

import {useRouter} from 'next/router';


function LinksRightBarDashboard(props) {
    const [liState, setLiState] = React.useState(false);
    

    const router = useRouter();

    const handleListClick = (item) => {
        const urlItemList = item.toLowerCase().replace(" ", "-");
        router.push(props.path + urlItemList);
    };

    return (
        <div className={styles.LinksRightBarDashboard}>
            <div className={`${styles.LinksRightBarDashboard_iconTitle} ${router.asPath.includes(props.path) ?  styles.NavRightBar_active : ""}`}>
                
                <span 
                    className={styles.LinksRightBarDashboard_icon}
                    onClick={() => router.push(props.path + props.menuName.toLowerCase())}
                >{props.icon}</span>

                <h3 
                    className={styles.LinksRightBarDashboard_title}
                    onClick={() => {
                        router.push(props.path + props.menuName.toLowerCase());
                        setLiState(true);
                    }}
                >{props.menuName}</h3>

                {props.listExist && 
                    <AiFillCaretLeft 
                        onClick={() => setLiState(!liState)}
                        className={`${styles.LinksRightBarDashboard_arrowLeft} ${liState && styles.LinksRightBarDashboard_arrowLeftShow}`} 
                        size="10px" 
                        color="white"
                    />
                }
            </div>
            
            {props.list != undefined &&
                <ul className={`${styles.LinksRightBarDashboard_ul} ${liState && styles.LinksRightBarDashboard_ulShow}`}>
                    {props.list.map(item => (
                        <li 
                            onClick={() => handleListClick(item)}
                            style={
                                router.asPath.includes(item.toLowerCase().replace(" ", "-")) ?  
                                    {color: "#8FE3CF"} : 
                                    {}
                                }
                            key={item} 
                            className={
                                liState ? styles.LinksRightBarDashboard_lishow : ""}
                        >{item}</li>
                    ))}
                </ul>
            }
        </div>
    );
}

export {LinksRightBarDashboard}; 