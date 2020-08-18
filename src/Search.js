import React from "react";
import "./styles.css";

export default function Search() {
  return (
    <div className="search-container">
      <input
        type="search"
        className="form-control"
        placeholder="Enter City Here"
        id="city-input"
        autocomplete="off"
      />
      <button type="submit" className="button" id="button">
        Submit
      </button>
      <span>
        <button type="button" class="button" id="currentbtn">
          📍
        </button>{" "}
      </span>
    </div>
  );
}
