import React from "react";
import styles from "../styles/Button.module.css";

const Button = ({ onButtonClick }) => {
  return (
    <>
      <div className={styles.buttonContainer}>
        <button className={styles.addButton} onClick={onButtonClick}>
          Add New Event
        </button>
      </div>
    </>
  );
};

export default Button;
