import React from 'react';
import styles from '../../Components/LabelInput/LabelInput.module.scss';

// como hacer el llamado
{/* <LabelInput 
    className="del div para dar tamaño" 
    textLabel="Texto del Label"
    nameInput="Name del Inputo"
    idInput="id del input"
    typeInput="input type"
    placeholder="Placeholder"
/> */}

function LabelInput(props) {

    return (
        <div className={styles[props.className]}>
            <div className={styles.LabelInput}>
                <label htmlFor={props.nameInput} className={styles.label}>{props.textLabel}</label>
                <input 
                    defaultValue={props?.defaultValue}
                    name={props.nameInput} 
                    id={props.nameInput} 
                    className={styles.input} 
                    type={props.typeInput} 
                    placeholder={props.placeholder}
                    ref={props.inputRef}
                />
            </div>
        </div>
        
    );
}

export { LabelInput };