import React from "react";

const ExpandingSearchBar = () => {
  return (
    <div className="expanding-search-bar">
      <div className="content">
        <div className="search">
          <input
            type="text"
            className="search__input"
            aria-label="search"
            placeholder="enter your search"
          />
          <button className="search__submit" aria-label="submit search">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExpandingSearchBar;
