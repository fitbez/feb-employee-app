import React, { useContext, useState } from "react";
import { styled } from "styled-components";
import { EmployeeContext } from "../../context";
import { Paper, Skeleton, Alert, AlertTitle } from "@mui/material";
import axios from "axios";
import { Delete, Edit } from "@mui/icons-material";
import { Link } from "react-router-dom";

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

const StyledDelete = styled(Delete)`
  margin: 0px 5px;
  color: red;
  cursor: pointer;
`;
const StyledEdit = styled(Edit)`
  margin: 0px 5px;
  color: blue;
  cursor: pointer;
`;

//we need an event lister

function EmployeeListItem() {
  const [shouldShowDeleteAlert, setShouldShowDeleteAlert] = useState(false);
  const {
    employeesData,
    setEmployeesData,
    setEmployeeDetail,
    isLoading,
    isError,
  } = useContext(EmployeeContext);

  //param: id
  //function to handle the delete functionality
  const handleDelete = (employeeId) => {
    axios
      .delete(`http://localhost:5000/api/employees/${employeeId}`) //the employee got deleted
      .then(() => {
        //update the shouldShowDeleteAlert state
        setShouldShowDeleteAlert(true);
        //update the employees data state [{id: 1}, {id: 2}, {id: 3}, {id: 4}]
        setEmployeesData((prevEmployees) =>
          prevEmployees.filter((employee) => employee._id !== employeeId)
        );
      })
      .catch((error) => {
        console.error(" failded to delete an employee", error);
      });
  };

  const handleEmployee = (id) => {
    const employeeDetailInfo = employeesData.find(
      (employee) => employee._id === id
    );
    // console.log("employee detail info", employeeDetailInfo);
    setEmployeeDetail(employeeDetailInfo);
  };

  return (
    <div>
      {shouldShowDeleteAlert && (
        <>
          <Alert
            color='error'
            onClose={() => {
              setShouldShowDeleteAlert(false);
            }}
          >
            an employee has been deleted
          </Alert>
        </>
      )}
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
                  <Link to={`/add-employee/${employee._id}`}>
                    <StyledEdit />
                  </Link>
                  <StyledDelete onClick={() => handleDelete(employee._id)} />
                </StyledEmployeeListItem>
              );
            })
          : null}
      </>
    </div>
  );
}

export default EmployeeListItem;
