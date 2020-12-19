import React, { useState } from "react";
import { Modal } from "@material-ui/core";
import InputForm from "../InputForm";
import styles from "./ModalWindow.module.css";

const ModalWindow = () => {
  const [modal, toggleModal] = useState(false);
  const handleToggle = () => toggleModal((prev) => !prev);

  return (
    <>
      <button className={styles.button} type="button" onClick={handleToggle}>
        Add hot-dog
      </button>
      <Modal open={modal} onClose={handleToggle}>
        <div className={styles.paper}>
          <InputForm />
        </div>
      </Modal>
    </>
  );
};

export default ModalWindow;
