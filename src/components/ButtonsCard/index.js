import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";

import "./styles.css";

function ButtonsCard({ title, body }) {
  const [show, setShow] = useState([false, false, false, false, false]);

  function handleAtive(num) {
    const newItems = [...show];
    newItems[num] = !newItems[num];
    setShow(newItems);
  }

  return (
    <div className="questaion-card-1" onClick={() => handleAtive(0)}>
      <div className="card-1">
        <div className="card-title">
          <a href="/">{title}</a>
        </div>
        <div className="card-icons">
          {show[0] === false ? (
            <AddIcon style={{ fontSize: 40 }} />
          ) : (
            <CloseIcon style={{ fontSize: 40 }} />
          )}
        </div>
      </div>

      {show[0] && <p>{body}</p>}
    </div>
  );
}

export default ButtonsCard;
