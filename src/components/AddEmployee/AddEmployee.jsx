import { useState } from "react";
import {
  StyledFormContainer,
  StyledForm,
  StyledInputWrapper,
  StyledLabel,
  StyledInput,
  StyledButton,
} from "./StyledComponents";

const AddEmployee = ({ employeesData, setEmployeesData }) => {
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    imageUrl: "",
    callMobile: "",
    callOffice: "",
    sms: "",
    email: "",
  });

  // collecting the user input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // updating the formData state or handling the form submition
  const handleSubmit = (e) => {
    e.preventDefault();
    setEmployeesData([...employeesData, formData]);
    setFormData({
      name: "",
      title: "",
      imageUrl: "",
      callMobile: "",
      callOffice: "",
      sms: "",
      email: "",
    });
  };

  return (
    <StyledFormContainer>
      <h2>Add Employee</h2>
      <StyledForm action='' onSubmit={handleSubmit}>
        <StyledInputWrapper>
          <StyledLabel htmlFor='name'>Name: </StyledLabel>
          <StyledInput
            name='name'
            onChange={handleChange}
            type='text'
            value={formData.name}
          />
        </StyledInputWrapper>
        <StyledInputWrapper>
          <StyledLabel htmlFor='title'>Title: </StyledLabel>
          <StyledInput
            name='title'
            type='text'
            value={formData.title}
            onChange={handleChange}
          />
        </StyledInputWrapper>
        <StyledInputWrapper>
          <StyledLabel htmlFor='call mobile'>Call Mobile: </StyledLabel>
          <StyledInput
            name='callMobile'
            type='text'
            value={formData.callMobile}
            onChange={handleChange}
          />
        </StyledInputWrapper>
        <StyledInputWrapper>
          <StyledLabel htmlFor='imageUrl'>imageUrl: </StyledLabel>
          <StyledInput
            name='imageUrl'
            type='text'
            value={formData.imageUrl}
            onChange={handleChange}
          />
        </StyledInputWrapper>
        <StyledInputWrapper>
          <StyledLabel htmlFor='call office'>Call Office: </StyledLabel>
          <StyledInput
            name='callOffice'
            type='text'
            value={formData.callOffice}
            onChange={handleChange}
          />
        </StyledInputWrapper>
        <StyledInputWrapper>
          <StyledLabel htmlFor='sms'>Sms: </StyledLabel>
          <StyledInput
            name='sms'
            type='text'
            value={formData.sms}
            onChange={handleChange}
          />
        </StyledInputWrapper>
        <StyledInputWrapper>
          <StyledLabel htmlFor='email'>Email: </StyledLabel>
          <StyledInput
            name='email'
            type='text'
            value={formData.email}
            onChange={handleChange}
          />
        </StyledInputWrapper>
        {/* <StyledInputWrapper>
          <StyledButton>Add Employee</StyledButton>
        </StyledInputWrapper> */}
        <div>
          <StyledButton>Add Employee</StyledButton>
        </div>
      </StyledForm>
    </StyledFormContainer>
  );
};

export default AddEmployee;
