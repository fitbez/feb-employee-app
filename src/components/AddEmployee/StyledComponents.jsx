import styled from "styled-components";

export const StyledFormContainer = styled.div`
  width: 40%;
  margin: 30px auto;
  display: flex;
  flex-direction: column;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const StyledInputWrapper = styled.div`
  display: flex;
  gap: 16px;
  width: 80%;
`;

export const StyledLabel = styled.label`
  flex: 1;
  text-align: right;
`;
export const StyledInput = styled.input`
  flex: 2;
  border: none;
  border: 1px solid #333;
  border-radius: 6px;
  padding: 5px;
`;
export const StyledButton = styled.button`
  padding: 10px;
  border: none;
  color: white;
  background-color: #03a9f4;
  margin: 10px auto;
  border-radius: 6px;
  font-size: 18px;
`;
