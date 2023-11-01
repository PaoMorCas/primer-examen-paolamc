import React, { useState } from "react";

import Form from './components/Form';
import Card from './components/Card';
import './Register.css';

const Register = () => {

    const [ data, setData ] = useState({});
    

    const handleSubmitForm = (dataForm) => { 
        setData(dataForm);
    };

    return (
        <div>
            <h1>Formulario - animales de compañia</h1>
            <div className="container">
                <Form onSubmitForm={handleSubmitForm} />
                {data && Object.keys(data).length > 0  && <Card data={data} />}

            </div>
        </div>
    );
}

export default Register;