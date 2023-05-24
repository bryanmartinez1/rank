import React from "react";
import "./deleteAll.css";

function DeleteAll(props) {
  function deleteAllFunction() {
    props.setDeleteNames([]);
    props.setDeleteGrades([]);
    props.setDeleteCredits([]);
  }
  return (
    <div className="deleteHolder" onClick={() => deleteAllFunction()}>
      DELETE ALL
    </div>
  );
}

export default DeleteAll;
