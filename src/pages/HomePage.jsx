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
import React, { useState } from "react";
import {
  AnephityImg,
  AnephityURL,
  BusinessWebImg,
  BusinessWebURL,
  CafeSystemImg,
  CafeSystemURL,
  CPP_MODULE_URL,
  Cub3dImg,
  Cub3dURL,
  EvidenceImg,
  Ft_containersURL,
  GithubImg,
  MinishellURL,
  PersonalWebImg,
  PersonalWebURL,
} from "../assets";
import { StyledBox, StyledButton, StyledCardModal } from "./styled";
import { IoCloseCircleOutline } from "react-icons/io5";

const HomePage = () => {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(null);
  const handleOpen = (link) => {
    setShow(link);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const cards = [
    {
      description:
        "Internet Cafe Windows application that I developed using C/C++ Windows API interface.",
      img: CafeSystemImg,
      title: "Internet Cafe System",
      link: CafeSystemURL,
    },
    {
      description:
        "My first website that I built with just HTML, CSS and JavaScript that includes a script which locates a keyword in a book and displays a sentence containing that keyword.",
      img: PersonalWebImg,
      title: "Personal Website",
      link: PersonalWebURL,
    },
    {
      description:
        "Website that I have created for a business using firebase as a backend and HTML, CSS and JavaScript for the frontend.",
      img: BusinessWebImg,
      title: "Business web app",
      link: BusinessWebURL,
      evidence: EvidenceImg,
    },
    {
      description:
        "A website with firebase as backend and HTML, CSS and Javascript as backend. You can post random images and others can like and comment on them.",
      img: AnephityImg,
      title: "Anephity web app",
      link: AnephityURL,
    },
    {
      description:
        "ft_containers is a school project where you have to build the STL containers in C++ such as map, vector and stack from scratch.",
      img: GithubImg,
      title: "42's ft_containers",
      link: Ft_containersURL,
    },

    {
      description:
        "A school project where you have to build a 3D game using the Ray casting method that calculates distance and generates only what needs to be seen.",
      img: Cub3dImg,
      title: "42's Cub3D",
      link: Cub3dURL,
    },
    {
      description:
        "This school project aims to teach you the fundamentals of C++ and object-oriented-programming including polymorphism and inheritance.",
      img: GithubImg,
      title: "42's CPP Modules",
      link: CPP_MODULE_URL,
    },
    {
      description:
        "In this school project we have to replicate bash in the C language using system functions from libraries to execute commands in a child process, parse input and handle errors.",
      img: GithubImg,
      title: "42's Minishell",
      link: MinishellURL,
    },
  ];
  return (
    <StyledBox component="main">
      <Grid
        container
        spacing={{ xs: 3, md: 4, lg: 5 }}
        columns={{ xs: 4, sm: 8, md: 12, lg: 16 }}
        alignItems="stretch"
      >
        {cards.map((item) => (
          <Grid
            key={item.title}
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
                  href={
                    item.title !== "Internet Cafe System" ? item.link : null
                  }
                  target="_blank"
                  rel="noreferrer"
                  onClick={
                    item.title === "Internet Cafe System"
                      ? () => handleOpen(item.link)
                      : null
                  }
                  size="small"
                >
                  {item.title === "Internet Cafe System" ? "Watch" : "View"}
                </Button>
                {item.evidence && (
                  <Button
                    onClick={() => handleOpen(item.evidence)}
                    size="small"
                  >
                    Evidence
                  </Button>
                )}
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <StyledCardModal>
          <StyledButton onClick={handleClose}>
            <IoCloseCircleOutline
              size={25}
              style={{ color: "white" }}
            ></IoCloseCircleOutline>
          </StyledButton>
          {show !== EvidenceImg ? (
            <CardMedia component="video" src={show} autoPlay controls />
          ) : (
            <CardMedia
              component="img"
              image={show}
              alt="Evidence for creating this business web application."
            />
          )}
        </StyledCardModal>
      </Modal>
    </StyledBox>
  );
};

export default HomePage;
