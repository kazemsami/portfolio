import {
  Card,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import {
  EmailImg,
  GithubImg,
  LinkedInImg,
  LocationImg,
  PhoneImg,
} from "../assets";
import { StyledBox } from "./styled";

const ContactPage = () => {
  const cards = [
    {
      link: "https://github.com/kazemsami",
      img: GithubImg,
    },
    {
      link: "https://www.linkedin.com/in/kazem-abusitta/",
      img: LinkedInImg,
    },
  ];
  return (
    <StyledBox
      component="main"
    >
      <Card sx={{ p: 1 }}>
        <CardContent
          sx={{ gap: "10px", display: "flex", flexDirection: "column" }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <img width={30} src={LocationImg} alt="My location" />
            <Typography component="span" variant="h6">
              Abu Dhabi, United Arab Emirates
            </Typography>
          </div>
          <a
            href="tel:+971562880635"
            style={{
              color: "white",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <img width={30} src={PhoneImg} alt="My phone number" />
            <Typography component="span" variant="h6">
              +971 (56) 288-0635
            </Typography>
          </a>
          <a
            href="mailto:kazemzidane@gmail.com"
            style={{
              color: "white",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <img width={30} src={EmailImg} alt="My email" />
            <Typography component="span" variant="h6">
              kazemzidane@gmail.com
            </Typography>
          </a>
          <Divider sx={{ m: 2, background: "gray" }} />
          <Grid
            container
            spacing={{ xs: 2, md: 3, lg: 4 }}
            columns={{ xs: 4, sm: 8, md: 12, lg: 16 }}
          >
            {cards.map((item) => (
              <Grid key={item} item xs={4} sm={4} md={4} lg={4}>
                <a href={item.link} target="_blank" rel="noreferrer">
                  <Card sx={{ p: 2, background: "#284646" }}>
                    <CardMedia
                      component="img"
                      height="140"
                      image={item.img}
                      alt={item.link}
                    />
                  </Card>
                </a>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
    </StyledBox>
  );
};

export default ContactPage;
