import { useState, useContext } from "react";
import {
  StyledFormContainer,
  StyledForm,
  StyledInputWrapper,
  StyledLabel,
  StyledInput,
  StyledButton,
} from "./StyledComponents";
import { EmployeeContext } from "../../context";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddEmployee = () => {
  const navigate = useNavigate();
  const { employeesData, setEmployeesData, fetchEmployeesData, isLoading } =
    useContext(EmployeeContext);
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    callMobile: "",
    callOffice: "",
    sms: "",
    email: "",
  });

  const [imageFile, setImageFile] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [errors, setErrors] = useState({});
  const [isImageUploadLoading, setIsImageUploadLoading] = useState(true);
  const [isImageUploadError, setIsImageUploadError] = useState(false);

  const handleImageFile = (e) => {
    setImageFile(e.target.files[0]);
  };

  const uploadImage = async () => {
    if (!imageFile) return;

    const formData = new FormData();
    formData.append("fileUpload", imageFile);

    try {
      const response = await axios.post(
        "http://localhost:5000/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // Update the imageUrl state with the received URL
      setImageUrl(response.data.imageUrl);
      setIsImageUploadLoading(false);
    } catch (error) {
      console.error("Image upload error:", error);
      setIsImageUploadLoading(false);
      setIsImageUploadError(true);
    }
  };

  console.log("image url", imageUrl);

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

  const addEmployee = (employeeInfo) => {
    console.log("employee data with image", employeeInfo);
    axios
      .post("http://localhost:5000/api/employees/employee", employeeInfo)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    fetchEmployeesData();

    if (!isLoading && !isImageUploadError && !isImageUploadLoading) {
      navigate("/employee-list");
    }
  };

  // updating the formData state or handling the form submition
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Upload the image first
    await uploadImage();

    if (formValidate() && imageUrl) {
      const employeeDataWithImage = {
        ...formData, //title, name, imageUrl
        imageUrl,
      };

      addEmployee(employeeDataWithImage);

      setFormData({
        name: "",
        title: "",
        callMobile: "",
        callOffice: "",
        sms: "",
        email: "",
      });
    }
    console.log("image url", imageUrl);
  };

  console.log("errors", errors);

  return (
    <StyledFormContainer>
      <h2>Add Employee</h2>
      <StyledForm action='' onSubmit={handleSubmit}>
        <input type='file' onChange={handleImageFile} />
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
        <>
          <StyledButton>Add Employee</StyledButton>
        </>
      </StyledForm>
    </StyledFormContainer>
  );
};

export default AddEmployee;
