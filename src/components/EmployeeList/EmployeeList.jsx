import React from "react";
import EmployeeListItem from "../EmployeeListItem/EmployeeListItem";
import { styled } from "styled-components";

const StyledEmployeeList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

function EmployeeList({ employeesData }) {
  return (
    <StyledEmployeeList>
      <EmployeeListItem employeesData={employeesData} />
    </StyledEmployeeList>
  );
}

export default EmployeeList;
