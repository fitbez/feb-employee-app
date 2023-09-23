import React from "react";
import EmployeeList from "../EmployeeList/EmployeeList";
import { styled } from "styled-components";
import SearchBar from "../SearchBar/SearchBar";
import { Header } from "../Header/Header";

const StyledHomePage = styled.div`
  background-color: #fff;
  width: 50%;
  height: 70%;
  padding: 2px 16px;
`;

function HomePage() {
  return (
    <StyledHomePage>
      <Header name='Employee Directory' />
      <SearchBar />
      <EmployeeList />
    </StyledHomePage>
  );
}

export default HomePage;
