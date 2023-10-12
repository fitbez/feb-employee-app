import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const Home = () => {
  const navigate = useNavigate();

  const handleLoginNavigate = () => {
    navigate("/login");
  };
  return (
    <div>
      <h2>Welcom to the Employee App!</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta ab
        libero quasi accusamus. Voluptatum minima neque ut, commodi laboriosam
        fuga?
      </p>
      {/* <button onClick={handleLoginNavigate}>Log in</button>
      <button>Sign up</button> */}
      <Button
        variant='contained'
        sx={{ marginRight: "1rem" }}
        onClick={handleLoginNavigate}
      >
        Log in
      </Button>
      <Button variant='outlined' onClick={() => navigate("/register")}>
        Sign up
      </Button>
    </div>
  );
};

export default Home;
