import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Field, reduxForm } from "redux-form";
import styles from "./InputForm.module.css";

const validate = (values) => {
  const errors = {};
  let result;

  if (values.exist) {
    result = values.exist.find((elem) => elem === values.name);
  }

  if (result) {
    errors.name = "Alredy exist";
  }

  return errors;
};

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning },
}) => {
  return (
    <div>
      <label>{label}</label>
      <div>
        <input
          {...input}
          placeholder="Name"
          type={type}
          className={styles.input}
        />
        {touched &&
          ((error && <span>{error}</span>) ||
            (warning && <span>{warning}</span>))}
      </div>
    </div>
  );
};

const InputForm = ({
  handleSubmit,
  name = "",
  img = "",
  description = "",
  price = "",
  id,
  btnPrimary = "Update",
  btnSecondary = "Delete",
  change,
  onEdit = false,
  submitting,
}) => {
  useEffect(() => {
    change("name", name);
    change("img", img);
    change("description", description);
    change("price", price);
    change("id", id);
  }, [name, img, description, price, id]);

  const products = useSelector((state) => state.products.productsReducer);
  const alredyExistNames = products
    .map((elem) => elem.name)
    .filter((elem) => elem !== name);

  useEffect(() => {
    change("exist", alredyExistNames);
    change("edit", onEdit);
  }, [alredyExistNames, change, onEdit]);

  const handleClick = ({ target: { name } }) => {
    change("type", name);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div>
        <Field
          className={styles.input}
          placeholder="Image"
          name="img"
          component="input"
          type="text"
        />
      </div>
      <div>
        <Field
          className={styles.input}
          placeholder="Name"
          name="name"
          component={renderField}
          type="text"
        />
      </div>
      <div>
        <Field
          className={styles.input}
          placeholder="Price"
          name="price"
          component="input"
          type="text"
        />
      </div>
      <div>
        <Field
          className={styles.inputDescription}
          placeholder="Description"
          name="description"
          component="textarea"
          type="text"
        />
      </div>
      <div>
        <button onClick={handleClick} name={btnPrimary} className={styles.button}>
          {btnPrimary}
        </button>
        <button onClick={handleClick} name={btnSecondary} className={styles.button}>
          {btnSecondary}
        </button>
      </div>
    </form>
  );
};

const ReduxInputFrom = reduxForm({ form: "productDescription", validate })(
  InputForm
);

export default ReduxInputFrom;
