import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useEffect, useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";
import { Avatar, MenuItem, Tooltip } from "@mui/material";
import Menu from "@mui/material/Menu";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";

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
  const { user } = useAuthContext();
  const logout = useLogout();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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

  const handleLogout = () => {
    logout();
  };

  // const avatar = user.username.split("")[0];
  const avatar = "a";
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
          {user && (
            <div className="flex space-x-6">
              <Tooltip title="Account">
                <IconButton
                  onClick={handleClick}
                  size="small"
                  sx={{ ml: 2 }}
                  aria-controls={open ? "account-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                >
                  <Avatar sx={{ width: 32, height: 32 }}>{avatar}</Avatar>
                </IconButton>
              </Tooltip>
              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&:before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <MenuItem onClick={handleClose}>
                  <Avatar /> Profile
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Avatar /> My account
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <PersonAdd fontSize="small" />
                  </ListItemIcon>
                  Add another account
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <Settings fontSize="small" />
                  </ListItemIcon>
                  Settings
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>
              <Button variant="contained" onClick={handleLogout}>
                Logout
              </Button>
            </div>
          )}
          {!user && (
            <div className="flex space-x-6">
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
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Nav;
