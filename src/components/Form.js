import React, { useState } from "react";
import styles from "./Form.module.css";

const Form = (props) => {
    
    const [data, setData] = useState({name: '', breed: ''});
    const [showError, setShowError] = useState(false);
    const error = "Por favor chequea que la información sea correcta."

    const handleInput = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value
        })
    };

    const handleSubmitForm = (e) => {
        e.preventDefault();
        validateData();
    };

    const validateData = () => {
        if(data.breed.length < 3 || validateSpacesAtBegin()){
            setShowError(true);
            return;
        } 
        if(data.name.length < 6){
            setShowError(true);
            return;
        } 
        props.onSubmitForm(data);
    };

    const validateSpacesAtBegin = () => {
        console.log("valida", data.name !== data.name.trimStart())
        return data.breed !== data.breed.trimStart();
    }; 

    return (
        <div className={styles.container}>
            <form id="animal-form" onSubmit={handleSubmitForm} >
                <div className={styles.control}>
                    <label htmlFor="breed">Raza de su animal de compañia: </label>
                    <input id="breed" name="breed" type="text" value={data.raza} onChange={handleInput}/>

                </div>
                <div className={styles.control}>
                    <label htmlFor="name">Nombre de su animal de compañia: </label>
                    <input id="name" name="name" type="text" value={data.nombre} onChange={handleInput}/>

                </div>
                <button type="submit">Crear miembro</button>
                {showError && <p className={styles.error}>{error}</p>}
            </form>
        </div>
    );
}

export default Form;