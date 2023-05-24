import React, { useEffect, useState } from "react";
import AddClass from "./Component/addClass.js";
import CourseHolder from "./Component/courseHolder.js";
import DeleteAll from "./Component/deleteAll.js";
import "./Styles/gpa.css";

function GPA() {
  // Hash Map
  var gradeMap = new Map();
  gradeMap.set("A+", 4.0);
  gradeMap.set("A", 4.0);
  gradeMap.set("A-", 3.7);
  gradeMap.set("B+", 3.3);
  gradeMap.set("B", 3.0);
  gradeMap.set("B-", 2.7);
  gradeMap.set("C+", 2.3);
  gradeMap.set("C", 2.0);
  gradeMap.set("C-", 1.7);
  gradeMap.set("D+", 1.3);
  gradeMap.set("D", 1.0);
  gradeMap.set("D-", 0.7);
  gradeMap.set("F", 0);

  function gpaCalc(gradesList, creditsList) {
    let totalPoints = 0;
    let totalCredits = 0;
    if (gradesList.length === 0) {
      setTotalCredits(0);
      return 0;
    }
    for (let i = 0; i < gradesList.length; i++) {
      totalPoints += gradeMap.get(gradesList[i]) * creditsList[i];
      totalCredits += Number(creditsList[i]);
    }
    let tempGPA = totalPoints / totalCredits;
    setTotalCredits(totalCredits);
    tempGPA = Math.round(tempGPA * 1000) / 1000;
    return tempGPA;
  }

  const [courseName, setCourseName] = useState("");
  const [courseGrade, setGrade] = useState("A+");
  const [courseCredits, setCredits] = useState(-1);
  const [gpa, setGPA] = useState(0);
  const [courseNameList, setCourseNameList] = useState([]);
  const [gradesList, setGradesList] = useState([]);
  const [creditsList, setCreditsList] = useState([]);
  const [totalCredits, setTotalCredits] = useState(0);
  const [deleteIndex, setDeleteIndex] = useState();
  const [deleteBool, setDeleteBool] = useState(false);

  useEffect(() => {
    let tempGPA = gpaCalc(gradesList, creditsList);
    setGPA(tempGPA);
    if (tempGPA === 4) {
      document.getElementById("bubble").style.backgroundColor = "#1790d0";
    } else if (tempGPA >= 2.999) {
      document.getElementById("bubble").style.backgroundColor = "#50C878";
    } else if (tempGPA >= 2.75) {
      document.getElementById("bubble").style.backgroundColor = "#bdfb40";
    } else if (tempGPA >= 2) {
      document.getElementById("bubble").style.backgroundColor = "#fbdd40";
    } else {
      document.getElementById("bubble").style.backgroundColor = "#FF3131";
    }
  }, [courseNameList, gradesList, creditsList]);

  function addCourseFunction() {
    if (gradeMap.has(courseGrade) === false) {
      alert(
        "Invalid Course Grade, Please put in the form of (A+, A, A-, ..., D+, D, D-, F)"
      );
      return;
    }
    if (courseCredits < 0) {
      alert("Invalid Credits, Must be Greater than 0 (zero)");
      return;
    }
    setCourseNameList([...courseNameList, courseName]);
    setGradesList([...gradesList, courseGrade]);
    setCreditsList([...creditsList, courseCredits]);
  }
  useEffect(() => {
    if (deleteBool === true) {
      const updatedNameList = [...courseNameList];
      const updatedGradeList = [...gradesList];
      const updatedCreditsList = [...creditsList];

      updatedNameList.splice(deleteIndex, 1);
      updatedGradeList.splice(deleteIndex, 1);
      updatedCreditsList.splice(deleteIndex, 1);

      setCourseNameList(updatedNameList);
      setGradesList(updatedGradeList);
      setCreditsList(updatedCreditsList);

      setDeleteBool(false);
    }
  }, [deleteBool]);

  return (
    <div className="bodyPart">
      <div className="pageTitle">Calculate GPA</div>
      <AddClass
        setName={setCourseName}
        setGrade={setGrade}
        setCredits={setCredits}
      />
      <button className="addButton" onClick={() => addCourseFunction()}>
        +
      </button>
      <div className="bubble" id="bubble">
        {gpa.toFixed(3)}
      </div>
      <div className="credits">Credits Taken: {totalCredits}</div>
      <div className="coursesDisplay">
        {courseNameList.map((name, index) => (
          <CourseHolder
            name={name}
            grade={gradesList[index]}
            credits={creditsList[index]}
            index={index}
            setDeleteIndex={setDeleteIndex}
            setDeleteBool={setDeleteBool}
          />
        ))}
      </div>
      {courseNameList.length > 1 && (
        <DeleteAll
          setDeleteNames={setCourseNameList}
          setDeleteGrades={setGradesList}
          setDeleteCredits={setCreditsList}
        />
      )}
    </div>
  );
}

export default GPA;
