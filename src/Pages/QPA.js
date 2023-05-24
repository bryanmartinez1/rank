import React, { useEffect, useState } from "react";
import AddClass from "./Component/addClass.js";
import CourseHolder from "./Component/courseHolder.js";
import DeleteAll from "./Component/deleteAll.js";
import "./Styles/gpa.css";

function QPA() {
  // Hash Map
  var gradeMap = new Map();
  gradeMap.set("A+", 2);
  gradeMap.set("A", 2);
  gradeMap.set("A-", 2);
  gradeMap.set("B+", 1);
  gradeMap.set("B", 1);
  gradeMap.set("B-", 1);
  gradeMap.set("C+", 0);
  gradeMap.set("C", 0);
  gradeMap.set("C-", 0);
  gradeMap.set("D+", -1);
  gradeMap.set("D", -1);
  gradeMap.set("D-", -1);
  gradeMap.set("F", 0);

  function qpaCalc(gradesList, creditsList) {
    let tempQPA = 0;
    if (gradesList.length === 0) {
      return 0;
    }
    for (let i = 0; i < gradesList.length; i++) {
      tempQPA += gradeMap.get(gradesList[i]) * Number(creditsList[i]);
    }
    return tempQPA;
  }

  const [courseName, setCourseName] = useState("");
  const [courseGrade, setGrade] = useState("A+");
  const [courseCredits, setCredits] = useState(-1);
  const [qpa, setQPA] = useState(0);
  const [courseNameList, setCourseNameList] = useState([]);
  const [gradesList, setGradesList] = useState([]);
  const [creditsList, setCreditsList] = useState([]);

  const [deleteIndex, setDeleteIndex] = useState();
  const [deleteBool, setDeleteBool] = useState(false);

  useEffect(() => {
    setQPA(qpaCalc(gradesList, creditsList));
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
      <div className="pageTitle">Calculate QPA</div>
      <AddClass
        setName={setCourseName}
        setGrade={setGrade}
        setCredits={setCredits}
      />
      <button className="addButton" onClick={() => addCourseFunction()}>
        +
      </button>
      <div className="bubble">{qpa}</div>
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

export default QPA;
