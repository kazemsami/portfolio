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
  GithubLogo,
  LinkedInLogo,
  LocationImg,
  PhoneImg,
} from "../assets";
import { StyledBox, StyledCard } from "./styled";

const ContactPage = () => {
  const cards = [
    {
      link: "https://github.com/kazemsami",
      img: GithubLogo,
    },
    {
      link: "https://www.linkedin.com/in/kazem-abusitta/",
      img: LinkedInLogo,
    },
  ];
  return (
    <StyledBox component="main">
      <StyledCard>
        <CardContent>
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
            spacing={{ xs: 3, md: 4, lg: 5 }}
            columns={{ xs: 4, sm: 8, md: 12, lg: 16 }}
          >
            {cards.map((item) => (
              <Grid key={item} item xs={4} sm={4} md={4} lg={3}>
                <a href={item.link} target="_blank" rel="noreferrer">
                  <Card sx={{ p: 2, maxWidth: 200, background: "#284646" }}>
                    <CardMedia
                      component="img"
                      image={item.img}
                      alt={item.link}
                    />
                  </Card>
                </a>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </StyledCard>
    </StyledBox>
  );
};

export default ContactPage;
