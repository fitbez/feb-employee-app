import React from "react";
import EmployeeListItem from "../EmployeeListItem/EmployeeListItem";
import { styled } from "styled-components";

const StyledEmployeeList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

function EmployeeList() {
  return (
    <StyledEmployeeList>
      <EmployeeListItem />
    </StyledEmployeeList>
  );
}

export default EmployeeList;
