import React from "react";
import "./Container.css";

function Container(props) {
  return (
    <div
      style={{
        maxWidth: "1200px",
        backgroundColor: "#f4f4f4",
        height: "100vh",
        margin: "0 auto",
        display: "flex",
      }}
      className='container'
    >
      {props.childern}
    </div>
  );
}

// const StyledContainer = {
//   maxWidth: "1200px",
//   backgroundColor: "#f4f4f4",
//   height: "100vh",
//   margin: "0 auto",
// };

export default Container;
