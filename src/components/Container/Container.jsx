import React from "react";
import "./Container.css";
import { styled } from "styled-components";

const StyledContainer = styled.div`
  max-width: 1200px;
  background-color: #f4f4f4;
  margin: 0 auto;
  display: flex;
  height: 100vh;
  padding: 6rem 2rem;
  gap: 10px;
`;

function Container({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}

export default Container;
