import React from "react";
import "./Employee.css";
import HomePage from "../HomePage/HomePage";
import EmployeeDetail from "../EmployeeDetail/EmployeeDetail";
import Container from "../Container/Container";

function Employee({ employeesData, setEmployeesData }) {
  return (
    <div className='employee-wrapper'>
      {/* <Container> */}
      <HomePage
        employeesData={employeesData}
        setEmployeesData={setEmployeesData}
      />
      {/* <EmployeeDetail /> */}
      {/* </Container> */}
    </div>
  );
}

export default Employee;
