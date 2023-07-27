import "./App.css";
import Button from "./components/Button/Button";
import { HeaderOne } from "./components/Header/Header";
import { useState } from "react";
import { employeeData } from "./data";
import Container from "./components/Container/Container";
import Employee from "./components/Employee/Employee";

const App = () => {
  const [employeesData, setEmployeesData] = useState([]);

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
