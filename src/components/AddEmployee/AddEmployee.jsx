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

  const [errors, setErrors] = useState({});

  // collecting the user input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  //create a function that validates ....
  // use conditional to check ...

  const formValidate = () => {
    let listErrors = {};
    // name validation
    if (formData.name.trim() === "") {
      listErrors.name = "Name cannot be empty!"; // {name: "Name cannot be empty!"}
    }

    // email validation
    if (formData.email.trim() === "") {
      listErrors.email = "Email cannot be empty";
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
      listErrors.email = "Email is not valid";
    }

    console.log("validation", listErrors);
    setErrors(listErrors);

    return Object.keys(listErrors).length === 0; // boolean true/false
  };

  // updating the formData state or handling the form submition
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formValidate()) {
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
    }
  };

  console.log("errors", errors);

  return (
    <StyledFormContainer>
      <h2>Add Employee</h2>
      <StyledForm action='' onSubmit={handleSubmit}>
        <StyledInputWrapper>
          <StyledLabel htmlFor='name'>
            Name <span style={{ color: "red" }}>*</span>:{" "}
          </StyledLabel>
          <StyledInput
            name='name'
            onChange={handleChange}
            type='text'
            value={formData.name}
          />
        </StyledInputWrapper>
        {errors.name && (
          <p style={{ margin: 0, color: "red", lineHeight: 1 }}>
            {errors.name}
          </p>
        )}
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
        {errors.email && (
          <p
            style={{
              margin: 0,
              color: "red",
              lineHeight: 1,
            }}
          >
            {errors.email}
          </p>
        )}
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
