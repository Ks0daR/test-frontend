import React, { useState } from "react";
import InputForm from "../../InputForm";
import styles from "./Card.module.css";

const Card = ({ id, img, name, price, description }) => {
  const [edit, setEdit] = useState(false);
  const submit = (data) => {
    console.log(data);
  };

  const handleSetEdit = () => setEdit((prev) => !prev);

  const content = edit ? (
    <div className={styles.card}>
      <img className={styles.image} src={img} alt={name} />
      <InputForm
        onSubmit={submit}
        id={id}
        img={img}
        name={name}
        price={price}
        description={description}
      />
    </div>
  ) : (
    <div className={styles.card}>
      <img className={styles.image} src={img} alt={name} />
      <h2>{name}</h2>
      <h4>{price}</h4>
      <p className={styles.description}>{description}</p>
      <button className={styles.buttonEdit} onClick={handleSetEdit}>
        Edit
      </button>
    </div>
  );

  return content;
};

export default Card;
