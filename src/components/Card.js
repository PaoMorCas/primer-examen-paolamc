import React from "react";
import styles from "./Card.module.css";

const Card = (props) => {
  const {name, breed} = props?.data;
  
  return (
  <div className={styles.container}>
    <h4 className={styles.title}>Haz registrado a <span>{name}</span></h4>
    Hola, soy {name} de raza {breed}
    <div>
        <img src="./dog.jpg" alt="dog"/>
    </div>
  </div>);
};

export default Card;