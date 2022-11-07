import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Modal,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { BusinessWebImg, CafeSystemImg, PersonalWebImg } from "../assets";
import { StyledBox } from "./styled";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const HomePage = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = (link) => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const cards = [
    {
      description:
        "Internet Cafe Windows application that I developed using C/C++ Windows API interface.",
      img: CafeSystemImg,
      title: "Internet Cafe System",
      link: "https://kazemsami.netlify.app/CafeSystem.mp4",
    },
    {
      description:
        "My first website that I built with just HTML, CSS and JavaScript.",
      img: PersonalWebImg,
      title: "Personal Website",
      link: "https://kazemsami.netlify.app/",
    },
    {
      description:
        "Website that I have created for a business using firebase as a backend and HTML, CSS and JavaScript for the frontend.",
      img: BusinessWebImg,
      title: "Business web application",
      link: "https://jp-kalamatkat.web.app/",
    },
  ];
  return (
    <StyledBox
      component="main"
    >
      <Grid
        container
        spacing={{ xs: 3, md: 4, lg: 5 }}
        columns={{ xs: 4, sm: 8, md: 12, lg: 16 }}
        alignItems="stretch"
      >
        {cards.map((item) => (
          <Grid
            key={item}
            item
            xs={4}
            sm={4}
            md={4}
            lg={4}
            sx={{ display: "flex" }}
          >
            <Card
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "column",
                p: 1,
              }}
            >
              <CardMedia
                component="img"
                height="140"
                image={item.img}
                alt={item.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  href={item.link}
                  onClick={
                    item.title === "Internet Cafe System" ? handleOpen : null
                  }
                  size="small"
                >
                  {item.title === "Internet Cafe System" ? "Watch" : "View"}
                </Button>
              </CardActions>
            </Card>
            {item.title === "Internet Cafe System" && (
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Card sx={style}>
                  <CardMedia
                    component="video"
                    src={item.link}
                    autoplay
                    controls
                  />
                </Card>
              </Modal>
            )}
          </Grid>
        ))}
      </Grid>
    </StyledBox>
  );
};

export default HomePage;
