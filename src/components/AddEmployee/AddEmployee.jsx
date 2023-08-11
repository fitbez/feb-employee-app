import styled from "styled-components";

const StyledFormContainer = styled.div`
  width: 40%;
  margin: 30px auto;
  display: flex;
  flex-direction: column;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const StyledInputWrapper = styled.div`
  display: flex;
  gap: 16px;
  width: 80%;
`;

const StyledLabel = styled.label`
  flex: 1;
  text-align: right;
`;
const StyledInput = styled.input`
  flex: 2;
  border: none;
  border: 1px solid #333;
  border-radius: 6px;
  padding: 5px;
`;
const StyledButton = styled.button`
  padding: 10px;
  border: none;
  color: white;
  background-color: #03a9f4;
  margin: 10px auto;
  border-radius: 6px;
  font-size: 18px;
`;

const AddEmployee = () => {
  return (
    <StyledFormContainer>
      <h2>Add Employee</h2>
      <StyledForm action=''>
        <StyledInputWrapper>
          <StyledLabel htmlFor='name'>Name: </StyledLabel>
          <StyledInput type='text' value='' />
        </StyledInputWrapper>
        <StyledInputWrapper>
          <StyledLabel htmlFor='title'>Title: </StyledLabel>
          <StyledInput type='text' value='' />
        </StyledInputWrapper>
        <StyledInputWrapper>
          <StyledLabel htmlFor='call mobile'>Call Mobile: </StyledLabel>
          <StyledInput type='text' value='' />
        </StyledInputWrapper>
        <StyledInputWrapper>
          <StyledLabel htmlFor='call office'>Call Office: </StyledLabel>
          <StyledInput type='text' value='' />
        </StyledInputWrapper>
        <StyledInputWrapper>
          <StyledLabel htmlFor='sms'>Sms: </StyledLabel>
          <StyledInput type='text' value='' />
        </StyledInputWrapper>
        <StyledInputWrapper>
          <StyledLabel htmlFor='email'>Email: </StyledLabel>
          <StyledInput type='text' value='' />
        </StyledInputWrapper>
        {/* <StyledInputWrapper>
          <StyledButton>Add Employee</StyledButton>
        </StyledInputWrapper> */}
      </StyledForm>
      <div>
        <StyledButton>Add Employee</StyledButton>
      </div>
    </StyledFormContainer>
  );
};

export default AddEmployee;
