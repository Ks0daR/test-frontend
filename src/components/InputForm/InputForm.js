import React, { useEffect } from "react";
import { Field, reduxForm } from "redux-form";
import styles from "./InputForm.module.css";

const InputForm = (props) => {
  const {
    handleSubmit,
    name = "name",
    img = "Image",
    description = "Description",
    price = "Price",
    id,
  } = props;

  useEffect(() => {
    props.change("name", name);
    props.change("img", img);
    props.change("description", description);
    props.change("price", price);
    props.change("id", id);
  }, [props, name, img, description, price, id]);

  const handleClick = (e) => {
    props.change("type", e.target.name);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div>
        <Field
          className={styles.input}
          placeholder={img}
          name="img"
          component="input"
          type="text"
        />
      </div>
      <div>
        <Field
          className={styles.input}
          placeholder={name}
          name="name"
          component="input"
          type="text"
        />
      </div>
      <div>
        <Field
          className={styles.input}
          placeholder={price}
          name="price"
          component="input"
          type="text"
        />
      </div>
      <div>
        <Field
          className={styles.inputDescription}
          placeholder={description}
          name="description"
          component="textarea"
          type="text"
        />
      </div>
      <div>
        <button onClick={handleClick} name="update" className={styles.button}>
          Update
        </button>
        <button onClick={handleClick} name="delete" className={styles.button}>
          Delete
        </button>
      </div>
    </form>
  );
};

const ReduxInputFrom = reduxForm({ form: "productDescription" })(InputForm);

export default ReduxInputFrom;
