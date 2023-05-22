import React, { useState } from "react";
import "./courseHolder.css";

function CourseHolder(props) {
  function deleteCourse() {
    props.setDeleteIndex(props.index);
    props.setDeleteBool(true);
  }
  return (
    <div className="holder">
      <div>{props.name}</div>
      <div>{props.grade}</div>
      <div>{props.credits}</div>
      <button onClick={() => deleteCourse()}>Delete</button>
    </div>
  );
}

export default CourseHolder;
