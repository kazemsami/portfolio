import { Box } from "@mui/material";
import styled from "styled-components";

export const StyledBox = styled(Box)`
  padding: 50px;
  padding-top: 95px;
  @media (max-width: 599px)
  {
    padding: 30px;
    padding-top: 82px;
  }
  @media (max-width: 468px)
  {
    padding: 10px;
    padding-top: 82px;
  }
`