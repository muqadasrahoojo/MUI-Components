import {
  AppBar,
  Box,
  Button,
  IconButton,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import logo from "../assests/Logo.png";

const Header = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          sx={{
            backgroundColor: "#fff",
            color: "black",
            padding: "0px 190px",
          }}
        >
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <IconButton
              size="large"
              edge="start"
              color="black"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <img src={logo} alt="logo" />
            </IconButton>

            <Box sx={{ display: "flex", gap: "20px" }}>
              <Link sx={{ color: "black" }} href="#" underline="none">
                <Typography variant="body1">Home</Typography>
              </Link>
              <Link sx={{ color: "#8c8d93" }} href="#" underline="none">
                <Typography variant="body1">Service</Typography>
              </Link>
              <Link sx={{ color: "#8c8d93" }} href="#" underline="none">
                <Typography variant="body1">Feature</Typography>
              </Link>
              <Link sx={{ color: "#8c8d93" }} href="#" underline="none">
                <Typography variant="body1">Product</Typography>
              </Link>
              <Link sx={{ color: "#8c8d93" }} href="#" underline="none">
                <Typography variant="body1">Testimonial</Typography>
              </Link>
              <Link sx={{ color: "#8c8d93" }} href="#" underline="none">
                <Typography variant="body1">FAQ</Typography>
              </Link>
            </Box>

            <Box>
              <Button sx={{ color: "#4caf4f", marginRight: "12px" }}>Login</Button>

              <Button variant="contained" sx={{ backgroundColor: "#4caf4f" }}>
                Sign Up
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Header;
