import { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { EmployeeContext } from "../../context";

const Register = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setIsLoggedIn } = useContext(EmployeeContext);

  const userInfo = {
    username,
    password,
  };

  const handleRegister = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/user/register", userInfo)
      .then(() => {
        setIsLoggedIn(true);
        navigate("/employee-list");
      })
      .catch((error) => {
        console.log("Unable to register this user");
      });
  };

  return (
    <form onSubmit={handleRegister} style={{ display: "block" }}>
      <input
        type='text'
        name='username'
        id='username'
        onChange={(e) => setUserName(e.target.value)}
        placeholder='username'
      />
      <br />
      <input
        type='password'
        name='password'
        id='password'
        onChange={(e) => setPassword(e.target.value)}
        placeholder='password'
      />
      <br />
      <button>Register</button>
    </form>
  );
};

export default Register;
