import React from "react";
import styles from "../styles/Button.module.css";

const Button = ({ onButtonClick }) => {
  return (
    <>
      <button className={styles.addButton} onClick={onButtonClick}>
        Add New Event
      </button>
    </>
  );
};

export default Button;
