import React from "react";
import EmployeeList from "../EmployeeList/EmployeeList";
import { styled } from "styled-components";

const StyledHomePage = styled.div`
  background-color: #fff;
  width: 50%;
  height: 70%;
  border: 1px solid orange;
`;

function HomePage({ employeesData, setEmployeesData }) {
  return (
    <StyledHomePage>
      <EmployeeList
        employeesData={employeesData}
        setEmployeesData={setEmployeesData}
      />
    </StyledHomePage>
  );
}

export default HomePage;
