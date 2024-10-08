import { Box, Button, colors, Typography } from "@mui/material";
import React from "react";
import HeroImg from "../assests/Illustration.png";

const HeroSection = () => {
  return (
    <>
      <Box
        sx={{
          paddingTop: "9%",
          paddingBottom: "5%",
          display: "flex",
          justifyContent: "space-around",
          backgroundColor: "#f5f7fa"
        }}
      >
        <Box>
          <Typography
            sx={{ fontWeight: "bold" }}
            variant="h3"
            component="h1"
            gutterBottom
          >
            Lessons and insights <br />
            <Typography
              component="h1"
              variant="h3"
              sx={{ color: "#4CAF50", fontWeight: "bold" }}
            >
              from 8 years
            </Typography>
          </Typography>

          < Typography component="p"
              variant="body1"> 
          Where to grow your business as a photographer: site or social media?
          </Typography>

          <Button variant="contained" sx={{marginTop: "14px", backgroundColor: "#4caf4f", padding: "10px 20px" }}>
                Rigister
              </Button>
        </Box>
        <Box>
          <img
            
            src={HeroImg}
            alt="heroimg"
          />
        </Box>
      </Box>
    </>
  );
};

export default HeroSection;
