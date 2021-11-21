import React from 'react';
import styles from "./Header.module.css";

function header(props) {
  return (
    <header className={`${styles.header}`}>
      {props.children}
    </header>
  );
}

export default header;
