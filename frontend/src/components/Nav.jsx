import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const Nav = () => {
  const navigate = useNavigate();
  return (
    <div className="flex pb-10  justify-between items-center">
      <div className="text-4xl font-semibold text-blue-500">Coursehere</div>
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
          Signup for free
        </Button>
      </div>
    </div>
  );
};

export default Nav;
