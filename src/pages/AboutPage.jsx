import { Avatar, Box, CardContent, Divider, Typography } from "@mui/material";
import React from "react";
import { ProfileImg } from "../assets";
import { StyledBox, StyledCard } from "./styled";

const AboutPage = () => {
  return (
    <StyledBox component="main">
      <StyledCard>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 5,
          }}
        >
          <Avatar
            alt="Kazem Abousetta's Picture"
            src={ProfileImg}
            sx={{ height: 250, width: 250 }}
          />
          <Box>
            <Typography sx={{textAlign: "center"}}variant="h4">
              Kazem Abousetta
            </Typography>
            <Divider sx={{ m: 2, background: "gray" }} />
            <Typography variant="body1">
              A passionate coder who is very enthusiastic and always looking
              forward to learning new technologies. <br />
              <br /> I am currently a student at 42 Abu Dhabi coding school and
              I have been studying there since December 2021. I heard about
              programming at the age of 21 and that is when I started learning
              about different programming languages. My hobbies are gaming,
              music and coding.
              <br />
              <br />I have 4 years of experience in multiple programming
              languges and frameworks including C++, C, HTML, CSS, JavaScript
              and ReactJS. The fields that I am interested in are Software
              Development, Cyber Security and Artificial Intelligence.
            </Typography>
          </Box>
        </CardContent>
      </StyledCard>
    </StyledBox>
  );
};

export default AboutPage;
