import React from 'react';
import {useDropzone} from 'react-dropzone';

import styles from '../../Components/DragDrop/DragDrop.module.scss';
import { BiImageAdd } from "react-icons/bi";

function DragDrop(props) {

    const {acceptedFiles, getRootProps, getInputProps} = useDropzone({    
        maxFiles:1
      });
  
    const files = acceptedFiles.map(file => (
        <li key={file.path}>
        {file.path} - {file.size} bytes
        </li>)
    );


    return (
        <div className={styles.DragDrop}>
            <h3 className={styles.DragDrop_header}>Cover Photo</h3>
                <div {...getRootProps({className: 'dropzone'})}>
                    <div className={styles.DragDrop__container}>
                        <input defaultValue={props.defaultValue} name="imageName" id='imageName' {...getInputProps()} />
                        <BiImageAdd className={styles.DragDrop__container__photo} />
                        <p className={styles.DragDrop__container_descriptions}>
                            <span>Upload a file</span>
                            or drag and drop: PNG, JPG, GIF up to 10MB
                        </p>
                        <h4>Files</h4>
                        <ul>{files}</ul>
                        {console.log(acceptedFiles)}
                        {console.log(acceptedFiles[0]?.name)}
                        {props.setImageName(acceptedFiles[0]?.name)}
                    </div>
                </div>
        </div>
        
    );
}

export { DragDrop };