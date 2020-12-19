import React, { useState } from "react";
import { Modal } from "@material-ui/core";
import InputForm from "../InputForm";
import styles from "./ModalWindow.module.css";
import { useDispatch } from "react-redux";
import { productsOperations } from "../../redux/products";

const ModalWindow = () => {
  const [modal, toggleModal] = useState(false);
  const handleToggle = () => toggleModal((prev) => !prev);

  const dispatch = useDispatch();

  const submit = ({ img, name, price, description }) => {
    dispatch(productsOperations.addProduct({ img, name, price, description }));
    handleToggle();
  };

  return (
    <>
      <button className={styles.button} type="button" onClick={handleToggle}>
        Add hot-dog
      </button>
      <Modal open={modal} onClose={handleToggle}>
        <div className={styles.paper}>
          <InputForm
            onSubmit={submit}
            btnPrimary="Create"
            btnSecondary="Cancel"
          />
        </div>
      </Modal>
    </>
  );
};

export default ModalWindow;
