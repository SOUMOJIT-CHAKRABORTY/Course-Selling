import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useEffect, useState } from "react";

// import { deepOrange } from "@mui/material/colors";
// import { Avatar } from "@mui/material";
// import ShowAlert from "./ShowAlert";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const Nav = () => {
  const [hideNav, setHideNav] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setInterval(() => {
      const findPage = () => {
        const params = window.location.pathname;
        if (params === "/signup" || params === "/login") {
          setHideNav(true);
        } else {
          setHideNav(false);
        }
      };

      findPage();
    }, 100);
  }, []);

  // const avatar = localStorage.getItem("avatar");

  // const message = "You are logged in";
  return (
    <div className="flex pb-10  justify-between items-center z-100">
      <div
        onClick={() => navigate("/")}
        className="text-4xl font-semibold text-blue-500 cursor-pointer"
      >
        Coursehere
      </div>
      {!hideNav && (
        <div className="flex space-x-6 ">
          <IconButton aria-label="cart">
            <StyledBadge badgeContent={0} color="secondary">
              <ShoppingCartIcon />
            </StyledBadge>
          </IconButton>
          <Button onClick={() => navigate("/login")} variant="outlined">
            Login
          </Button>
          <Button variant="contained" onClick={() => navigate("/signup")}>
            Get started
          </Button>
          {/* <div>
          <Avatar sx={{ bgcolor: deepOrange[500], cursor: "pointer" }}>
            {avatar}
          </Avatar>
          <ShowAlert message={message} />
        </div> */}
        </div>
      )}
    </div>
  );
};

export default Nav;
