import React from "react";

function QPA() {
  var gradeMap = {};
  gradeMap["A+"] = 2;
  gradeMap["A"] = 2;
  gradeMap["A-"] = 2;
  gradeMap["B+"] = 1;
  gradeMap["B"] = 1;
  gradeMap["B-"] = 1;
  gradeMap["C+"] = 0;
  gradeMap["C"] = 0;
  gradeMap["C-"] = 0;
  gradeMap["D+"] = -1;
  gradeMap["D"] = -1;
  gradeMap["D-"] = -1;
  gradeMap["F"] = -2;

  let gradesList = ["A+", "A-", "D", "C"];
  let creditsList = [3, 3, 3, 3];

  function qpaCalc(gradesList, creditsList) {
    let tempQPA = 0;

    for (let i = 0; i < gradesList.length; i++) {
      tempQPA += gradeMap[gradesList[i]] * creditsList[i];
    }
    return tempQPA;
  }

  let qpa = qpaCalc(gradesList, creditsList);
  return <div>QPA {qpa}</div>;
}

export default QPA;
