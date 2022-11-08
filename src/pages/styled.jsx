import { Box } from "@mui/material";
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