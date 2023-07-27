import { useState } from "react";

const Button = () => {
  const [headerTitle, setHeaderTitle] = useState("Employee Directory");

  const handleChangeHeaderTitle = () => {
    setHeaderTitle("Home Page");
  };

  return (
    <input
      type='button'
      value='Change Header'
      onClick={handleChangeHeaderTitle}
    />
  );
};

export default Button;
