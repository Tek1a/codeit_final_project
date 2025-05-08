"use client"; 

import React from "react";
import styles from "./BackButton.module.css"; 

const BackButton = () => {
  const handleBackClick = () => {
    window.history.back();
  };

  return (
    <button
      className={styles.backButton}
      onClick={handleBackClick}
    >
      ← Go Back
    </button>
  );
};

export default BackButton;