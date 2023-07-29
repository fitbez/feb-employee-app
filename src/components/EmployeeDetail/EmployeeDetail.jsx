import React from "react";
import { styled } from "styled-components";

const StyledEmployeeDetail = styled.div`
  height: 70%;
  border: 1px solid brown;
  width: 50%;
`;

function EmployeeDetail() {
  return <StyledEmployeeDetail>EmployeeDetail</StyledEmployeeDetail>;
}

export default EmployeeDetail;
