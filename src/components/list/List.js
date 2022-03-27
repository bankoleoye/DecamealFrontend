import React from "react";
import "./list.css";

const List = ({ listText, listTitle }) => {
  return (
    <div className="footer-components">
      <h2>{listTitle}</h2>
      <p>{listText}</p>
    </div>
  );
};

export default List;
