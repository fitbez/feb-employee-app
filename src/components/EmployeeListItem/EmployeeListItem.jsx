import React, { useContext } from "react";
import { styled } from "styled-components";
import { EmployeeContext } from "../../context";
import { Paper, Skeleton, Alert, AlertTitle } from "@mui/material";

const StyledEmployeeListItem = styled(Paper)`
  display: flex;
  margin-top: 5px;
  background-color: white;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
  align-items: center;
  padding: 5px 10px;
`;

const StyledSkeleton = styled(Skeleton)`
  margin-bottom: 10px;
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

function EmployeeListItem() {
  const { employeesData, setEmployeeDetail, isLoading, isError } =
    useContext(EmployeeContext);
  const handleEmployee = (id) => {
    const employeeDetailInfo = employeesData.find(
      (employee) => employee._id === id
    );
    // console.log("employee detail info", employeeDetailInfo);
    setEmployeeDetail(employeeDetailInfo);
  };
  return (
    <div>
      <>
        {isLoading && (
          <>
            <StyledSkeleton variant='rounded' width={370} height={60} />
            <StyledSkeleton variant='rounded' width={370} height={60} />
            <StyledSkeleton variant='rounded' width={370} height={60} />
            <StyledSkeleton variant='rounded' width={370} height={60} />
          </>
        )}

        {isError && (
          <Alert severity='error'>
            <AlertTitle>Error</AlertTitle>
            Something goes wrong — <strong>Please try agin later</strong>
          </Alert>
        )}
        {employeesData.length > 0
          ? employeesData.map((employee) => {
              return (
                <StyledEmployeeListItem
                  elevation='4'
                  onClick={() => handleEmployee(employee._id)}
                  key={employee.id}
                >
                  <StyledImage src={employee.imageUrl} alt='' />
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
