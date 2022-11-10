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
  BusinessWebImg,
  CafeSystemImg,
  Cub3dImg,
  EvidenceImg,
  GithubImg,
  PersonalWebImg,
} from "../assets";
import { StyledBox } from "./styled";
import styled from "styled-components";
import { IoCloseCircleOutline } from "react-icons/io5"

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
      link: "https://kazemsami.netlify.app/CafeSystem.mp4",
    },
    {
      description:
        "My first website that I built with just HTML, CSS and JavaScript that includes a script which locates a keyword in a book and displays a sentence containing that keyword.",
      img: PersonalWebImg,
      title: "Personal Website",
      link: "https://kazemsami.netlify.app/",
    },
    {
      description:
        "Website that I have created for a business using firebase as a backend and HTML, CSS and JavaScript for the frontend.",
      img: BusinessWebImg,
      title: "Business web app",
      link: "https://jp-kalamatkat.web.app/",
      evidence: EvidenceImg,
    },
    {
      description:
        "ft_containers is a project where you have to build the STL containers in C++ such as map, vector and stack from scratch.",
      img: GithubImg,
      title: "ft_containers",
      link: "https://github.com/kazemsami/ft_containers",
    },

    {
      description:
        "A 3D game programmed using the Ray casting method that calculates distance and generates only what needs to be seen.",
      img: Cub3dImg,
      title: "Cub3d",
      link: "https://github.com/kazemsami/cub3d",
    },
    {
      description:
        "This project aims to teach you the fundamentals of C++ and object-oriented-programming including polymorphism and inheritance.",
      img: GithubImg,
      title: "CPP Module",
      link: "https://github.com/kazemsami/cpp-module",
    },
    {
      description:
        "A bash replica built with C using system functions from libraries to execute commands in a child process, parse input and handle errors.",
      img: GithubImg,
      title: "Minishell",
      link: "https://github.com/kazemsami/minishell",
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
        <StyledCard>

		<StyledButton onClick={handleClose}><IoCloseCircleOutline size={25} style={{color: "white"}}></IoCloseCircleOutline></StyledButton>
          {show !== EvidenceImg ? (
            <CardMedia component="video" src={show} autoPlay controls />
          ) : (
            <CardMedia
              component="img"
              image={show}
              alt="Evidence for creating this business web application."
            />
          )}
        </StyledCard>
      </Modal>
    </StyledBox>
  );
};

const StyledButton = styled.button`
	background-color: transparent;
	border: none;
	cursor: pointer;
	float: right;
`

const StyledCard = styled(Card)`
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

export default HomePage;
