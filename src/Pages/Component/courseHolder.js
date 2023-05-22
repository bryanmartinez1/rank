import React, { useState } from "react";
import "./courseHolder.css";

function CourseHolder(props) {
  function deleteCourse() {
    props.setDeleteIndex(props.index);
    props.setDeleteBool(true);
  }

  let colors = [
    "#9784ff",
    "#ed2939",
    "#fbdd40",
    "#59cbe8",
    "#ff6347",
    "#eb6fbd",
  ];

  return (
    <div
      className="holder"
      style={{ backgroundColor: colors[props.index % 6] }}
    >
      <div className="holderText">{props.name}</div>
      <div className="holderText">{props.grade}</div>
      <div className="holderText">{props.credits}</div>
      <button onClick={() => deleteCourse()}>Delete</button>
    </div>
  );
}

export default CourseHolder;
