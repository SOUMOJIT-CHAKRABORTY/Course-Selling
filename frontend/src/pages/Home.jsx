import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Hero from "../assets/Hero.jpg";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="mt-12">
      <div className="flex justify-around space-x-20 items-center">
        <div>
          Text
          <div>
            <Button onClick={() => navigate("/signup")}>Get started</Button>
            <Button onClick={() => navigate("/login")} variant="contained">
              Learning
            </Button>
          </div>
        </div>
        <div>
          <img src={Hero} alt="image here" className="h-[540px] w-[500px] " />
        </div>
      </div>
    </div>
  );
};

export default Home;
