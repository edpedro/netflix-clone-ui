import React from "react";

import "./styles.css";

function ButtonsSearch({ title }) {
  return (
    <div className="home-search">
      <input type="text" placeholder="Email" />
      <a href="/movies">{title}</a>
    </div>
  );
}

export default ButtonsSearch;
