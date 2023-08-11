import styled from "styled-components";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const StyledInput = styled.input`
  width: 90%;
  padding: 10px 5px;
  border: none;
  border: 1px solid #333;
  border-radius: 6px;
  margin: 4px;
`;

const SearchBar = ({ employeesData, setEmployeesData }) => {
  const [searchItem, setSearchItem] = useState("");

  const handleChange = (event) => {
    setSearchItem(event.target.value);
  };

  // create a function that checks the employee name and if we find the same employee name and
  //then we'll add it in a new array
  //updating the existing employeesData with the new array

  const handleSearch = () => {
    const searchResult = employeesData.filter((item) => {
      return (
        item.name.toLowerCase().includes(searchItem.toLowerCase()) ||
        item.title.toLowerCase().includes(searchItem.toLowerCase())
      );
    });

    setEmployeesData(searchResult);
  };

  return (
    <>
      <StyledInput type='text' name='' id='' onChange={handleChange} />
      <FontAwesomeIcon icon={faSearch} size='lg' onClick={handleSearch} />
    </>
  );
};

export default SearchBar;
