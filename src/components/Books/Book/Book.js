import PropTypes from "prop-types";
import React from "react";
import styles from "./Book.module.css";

function Book(props) {
  return (
    <div className={`${styles.book} card`}>
      <div className="card-body">
        <div className="row">
          <div className="col-4">
            <img
              className="img-fluid img-thumbnail"
              src={props.cover}
              alt="Diuna"
            />
          </div>

          <div className="col-8 mt-1">
            <div className="row">
              <div className="col-5">
                <p className={styles.title}>Tytuł</p>
                <p className={styles.title}>Autor</p>
                <p className={styles.title}>Wydawca</p>
                <p className={styles.title}>Bugi</p>
              </div>
              <div className="col">
                <p className={styles.value}>{props.title}</p>
                <p className={styles.value}>{props.author}</p>
                <p className={styles.value}>{props.publisher}</p>
                <p className={styles.value}>{props.bugs}</p>
                <a href="#" className="btn btn-primary float-right px-5">
                  Pokaż
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  publisher: PropTypes.string.isRequired,
  bugs: PropTypes.number.isRequired,
  cover: PropTypes.string.isRequired,
};

export default Book;
