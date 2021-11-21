import React, { useState } from "react";
import styles from "./Searchbar.module.css";

function Searchbar(props) {
  const [term, setTerm] = useState("");

  const search = () => {
    props.onSearch(term);
  };

  return (
    <div className="d-flex">
      <input
        value={term}
        onKeyDown={(e) => e.code === "Enter" && search()}
        onChange={(e) => {
          setTerm(e.target.value);
        }}
        className={`${styles.input} form-control`}
        type="text"
        placeholder="Szukaj..."
      />
      <button onClick={search} className="ms-1 btn btn-secondary">
        Szukaj
      </button>
    </div>
  );
}

export default Searchbar;
