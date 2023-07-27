import React from "react";
import EmployeeList from "../EmployeeList/EmployeeList";
import { employeeData } from "../../data";

function HomePage({ employeesData, setEmployeesData }) {
  const handleEmployeeData = () => {
    setEmployeesData(employeeData);
    // console.log("employee data", employeeData);
  };
  console.log("employeesData", employeesData);
  return (
    <div style={StyledHomePage}>
      <EmployeeList
        employeesData={employeesData}
        setEmployeesData={setEmployeesData}
      />
      <button onClick={handleEmployeeData}>Update the employee data</button>
    </div>
  );
}

const StyledHomePage = {
  backgroundColor: "#f4f4f4",
  width: "50%",
  height: "100%",
};

export default HomePage;
