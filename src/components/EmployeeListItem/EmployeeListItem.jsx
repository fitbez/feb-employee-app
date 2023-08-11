import React from "react";
import { styled } from "styled-components";

const StyledEmployeeListItem = styled.div`
  display: flex;
  margin-top: 5px;
  background-color: white;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
  align-items: center;
  padding: 5px 10px;
`;

const StyledImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const StyledContent = styled.div`
  margin-left: 10px;
  text-align: left;
  p,
  h4 {
    margin: 0;
  }
`;

function EmployeeListItem({ employeesData }) {
  return (
    <div>
      <>
        {employeesData.length > 0
          ? employeesData.map((employee) => {
              return (
                <StyledEmployeeListItem key={employee._id}>
                  <StyledImage src={employee.imageURl} alt='' />
                  <StyledContent>
                    <h4>{employee.name}</h4>
                    <p>{employee.title}</p>
                  </StyledContent>
                </StyledEmployeeListItem>
              );
            })
          : null}
      </>
    </div>
  );
}

export default EmployeeListItem;
