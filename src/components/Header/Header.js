import React from 'react';
import styles from "./Header.module.css";


function header(props) {
  return (
    <header className={`${styles.header} container`}>
      {props.children}
    </header>
  );
}

export default header;
