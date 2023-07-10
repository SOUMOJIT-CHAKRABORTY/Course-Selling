import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
const Nav = () => {
  const navigate = useNavigate();
  return (
    <div className="flex pb-10  justify-between items-center">
      <div className="text-4xl font-semibold">Coursehere</div>
      <div className="flex space-x-4 ">
        <Button onClick={() => navigate("/login")} variant="outlined">
          Login
        </Button>
        <Button variant="contained" onClick={() => navigate("/signup")}>
          Signup for free
        </Button>
      </div>
    </div>
  );
};

export default Nav;
