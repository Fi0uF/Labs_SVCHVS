import React, { Component } from "react";
import styles from "./Search.module.scss";

class Search extends Component {
  searchBtn = (e) => {
    e.preventDefault();
  };

  render() {
    const { setSearch, updatePageNumber } = this.props;

    return (
      <form className={`${styles.search} d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-5`}>
        <input
          onChange={(e) => {
            updatePageNumber(1);
            setSearch(e.target.value);
          }}
          placeholder="Search for characters"
          className={styles.input}
          type="text"
        />
        <button
          onClick={this.searchBtn}
          className={`${styles.btn} btn btn-primary fs-5`}
        >
          Search
        </button>
      </form>
    );
  }
}

export default Search;
