import React from "react";

function EmployeeListItem({ employeesData }) {
  // console.log("employeesData from list item", employeesData);
  return (
    <div>
      <>
        {employeesData.length > 0
          ? employeesData.map((employee) => {
              return (
                <>
                  <img src={employee.imageURl} alt='' />
                  <h4>{employee.name}</h4>
                  <p>{employee.title}</p>
                </>
              );
            })
          : null}
      </>
    </div>
  );
}

export default EmployeeListItem;
