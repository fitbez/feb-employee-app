import { createContext, useState, useEffect } from "react";
import axios from "axios";

// Create the context
export const EmployeeContext = createContext();

// Create a provider component
export const EmployeeProvider = (props) => {
  const [employeesData, setEmployeesData] = useState([]);
  const [employeeDetail, setEmployeeDetail] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const name = "Fitsum";

  const fetchEmployeesData = () => {
    axios
      .get("http://localhost:5000/api/employees/employees")
      .then((response) => {
        // console.log("response", response);
        setEmployeesData(response?.data);
        setIsLoading(false);
        setEmployeeDetail(response?.data[0]);
      })
      .catch((err) => {
        console.log("error", err);
        setIsError(true);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchEmployeesData();
  }, []);

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
        isLoading,
        isError,
        fetchEmployeesData,
        isLoggedIn,
        setIsLoggedIn,
      }}
    >
      {props.children}
    </EmployeeContext.Provider>
  );
};
