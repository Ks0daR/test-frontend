import React from "react";
import ModalWindow from "../ModalWindow";
import styles from "./NavBar.module.css";
import logo from "../../images/toppng.com-hot-dog-974x524.png";

const NavBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img className={styles.image} src={logo} alt="hotdog" />
        <p className={styles.textContent}>CRUD</p>
      </div>

      <ModalWindow />
    </div>
  );
};

export default NavBar;
