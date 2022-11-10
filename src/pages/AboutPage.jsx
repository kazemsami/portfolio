import { Card, CardContent, Divider, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { StyledBox } from "./styled";

const AboutPage = () => {
  return (
    <StyledBox component="main">
      <StyledCard>
        <CardContent>
          <Typography variant="h4" component="div">
            Kazem Abousetta
          </Typography>
          <Divider sx={{ m: 2, background: "gray" }} />
          <Typography variant="body1">
            A passionate coder who is very enthusiastic and always looking
            forward to learning new technologies. <br />
            <br /> I am currently a student at 42 Abu Dhabi coding school and I have been studying there since December 2020. I
            heard about programming at the age of 21 and that is when I started learning about different programming languages. My hobbies are gaming, music and
            coding.
            <br />
            <br />I have 4 years of experience in multiple programming languges
            and frameworks including C++, C, HTML, CSS, JavaScript and ReactJS.
            The fields that I am interested in are Software Development, Cyber
            Security and Artificial Intelligence.
          </Typography>
        </CardContent>
      </StyledCard>
    </StyledBox>
  );
};

const StyledCard = styled(Card)`
  padding: 100px;
  @media (max-width: 768px) {
    padding: 30px;
  }
  @media (max-width: 468px) {
    padding: 10px;
  }
`;

export default AboutPage;
