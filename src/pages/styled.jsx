import { Box, Card } from "@mui/material";
import styled from "styled-components";

export const StyledBox = styled(Box)`
  padding: 95px 50px 25px 50px;
  @media (max-width: 599px)
  {
    padding: 82px 30px 25px 30px;
  }
  @media (max-width: 468px)
  {
    padding: 82px 10px 25px 10px;
  }
`

export const StyledCard = styled(Card)`
  padding: 100px;
  @media (max-width: 768px) {
    padding: 30px;
  }
  @media (max-width: 468px) {
    padding: 10px;
  }
`;

export const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  float: right;
`;

export const StyledCardModal = styled(Card)`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 70%;
  transform: translate(-50%, -50%);
  background-color: "background.paper";
  border: 2px solid #000;
  padding: 4px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;