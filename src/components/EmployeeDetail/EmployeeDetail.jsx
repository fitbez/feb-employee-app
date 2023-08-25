import React, { useContext, useState } from "react";
import { styled } from "styled-components";
import { EmployeeContext } from "../../context";

const StyledEmployeeDetail = styled.div`
  height: 70%;
  border: 1px solid brown;
  width: 50%;

  h3,
  p {
    padding: 0;
    margin: 0;
  }
`;

const StyledImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;

const StyledEmployeeHeader = styled.div`
  display: flex;
  gap: 10px;
  padding: 15px 10px;
  align-items: center;
  border-bottom: 1px solid #9e9e9e;
`;

const StyledEmployeeContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-bottom: 1px solid #9e9e9e;
`;

const StyledEmployeeDetailWrapper = styled.div`
  margin: 2rem;
  border: 1px solid #9e9e9e;
  border-radius: 8px;
`;

const StyledEmployeeHeaderContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

function EmployeeDetail() {
  const { employeeDetail, setEmployeeDetail } = useContext(EmployeeContext);

  return (
    <StyledEmployeeDetail>
      <StyledEmployeeDetailWrapper>
        <StyledEmployeeHeader>
          <StyledImage src={employeeDetail.imageUrl} alt='' />
          <StyledEmployeeHeaderContactInfo>
            <h3>{employeeDetail.name}</h3>
            <p>{employeeDetail.title}</p>
          </StyledEmployeeHeaderContactInfo>
        </StyledEmployeeHeader>
        <StyledEmployeeContactInfo>
          <h3>Call Office</h3>
          <p>{employeeDetail.callOffice}</p>
        </StyledEmployeeContactInfo>
        <StyledEmployeeContactInfo>
          <h3>Call Mobile</h3>
          <p>{employeeDetail.callMobile}</p>
        </StyledEmployeeContactInfo>
        <StyledEmployeeContactInfo>
          <h3>SMS</h3>
          <p>{employeeDetail.sms}</p>
        </StyledEmployeeContactInfo>
        <StyledEmployeeContactInfo>
          <h3>Email</h3>
          <p>{employeeDetail.email}</p>
        </StyledEmployeeContactInfo>
      </StyledEmployeeDetailWrapper>
    </StyledEmployeeDetail>
  );
}

export default EmployeeDetail;
