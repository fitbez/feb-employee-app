import { createContext, useState } from "react";
import { employeeData } from "./data";

// Create the context
export const EmployeeContext = createContext();

// Create a provider component
export const EmployeeProvider = (props) => {
  const [employeesData, setEmployeesData] = useState(employeeData);
  const [employeeDetail, setEmployeeDetail] = useState(employeeData[0]);

  const name = "Fitsum";

  const renderMyName = (firstName) => {
    return firstName;
  };

  return (
    <EmployeeContext.Provider
      value={{
        employeesData,
        name,
        renderMyName,
        setEmployeesData,
        employeeDetail,
        setEmployeeDetail,
      }}
    >
      {props.children}
    </EmployeeContext.Provider>
  );
};
