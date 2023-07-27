import React from "react";
import EmployeeListItem from "../EmployeeListItem/EmployeeListItem";

function EmployeeList({ employeesData }) {
  return (
    <div>
      <EmployeeListItem employeesData={employeesData} />
    </div>
  );
}

export default EmployeeList;
