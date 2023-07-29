import "./App.css";
import { useState, useEffect } from "react";
import Employee from "./components/Employee/Employee";

const App = () => {
  const [employeesData, setEmployeesData] = useState([]);

  const requestUrl =
    "https://calm-everglades-09552-105a0b4519dc.herokuapp.com/api/employee/employees";

  const getEmployeesData = async () => {
    const response = await fetch(requestUrl);
    const data = await response.json();
    setEmployeesData(data);
  };

  useEffect(() => {
    getEmployeesData();
  }, []);

  return (
    <div className='App'>
      <Employee
        employeesData={employeesData}
        setEmployeesData={setEmployeesData}
      />
    </div>
  );
};

export default App;
