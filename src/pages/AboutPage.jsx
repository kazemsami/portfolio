import { Box, Card, CardContent, Divider, Typography } from "@mui/material";
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
          <Divider sx={{m: 2, background: "gray"}}/>
          <Typography variant="body1">
            A passionate coder who is very enthusiastic and always looking
            forward to learning new technologies. My interests are gaming and
            coding. 4 years of experience in multiple programming languges and
            frameworks including C++, C, HTML, CSS, JavaScript and ReactJS. I am
            currently looking for a position as a software developer.
          </Typography>
        </CardContent>
      </StyledCard>
    </StyledBox>
  );
};

const StyledCard = styled(Card)`
  padding: 100px;
  @media (max-width: 768px)
  {
    padding:30px;
  }
  @media (max-width: 468px)
  {
    padding: 10px;
  }
`

export default AboutPage;
