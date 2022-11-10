import {
  Card,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Modal,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import {
  CafeSystemImg,
  CafeSystemURL,
  EvidenceImg,
  GithubLogo,
  LinkedInLogo,
  PersonalWebImg,
  PersonalWebURL,
} from "../assets";
import ShowCaseComponent from "../components/ShowCaseComponent";
import { StyledBox, StyledButton, StyledCard, StyledCardModal } from "./styled";

const LearningPage = () => {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(null);
  const handleOpen = (link) => {
    setShow(link);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  return (
    <StyledBox component="main">
      <StyledCard>
        <CardContent
          sx={{ gap: "10px", display: "flex", flexDirection: "column" }}
        >
          <Typography variant="h4" component="div">
            Self-learning
          </Typography>
          <Divider sx={{ m: 2, background: "gray" }} />
          <Typography variant="body1">
            So how this is how it all began. I used to play so many computer
            games until I realised that I should do something useful with my
            life. I then decided to do something that is associated with
            computers. That is when I knew about programming. I was 21. I learnt
            by solving simple coding challenges and built my way up from there.{" "}
            <br />
            <br /> I then started working on a Internet Gaming Cafe Windows
            application with C/C++ Windows API as a freelancer which assisted in
            improving my C/C++ skills and understanding how Windows applications
            work behind the scenes.
          </Typography>
          <ShowCaseComponent
            title="Internet Cafe System"
            image={CafeSystemImg}
            handleOpen={handleOpen}
			link={CafeSystemURL}
          />
          <Divider sx={{ m: 2, background: "gray" }} />
          <Typography variant="body1">
            I then took my time to learn some web development and I started with
            HTML, CSS and Javascript. So I built my own personal website which
            honestly looked horrific but thankfully was part of the learning
            process. I am proud of a script I created in my website which locates keywords in
            a book and displays a sentence containing that keyword.
          </Typography>
		  <ShowCaseComponent
            title="Personal website"
            image={PersonalWebImg}
            handleOpen={null}
			link={PersonalWebURL}
          />
		  <Typography variant="body1">
		  	So for my next project I built a web application for a fishing trip business which was
            honestly a big improvement compared to my first website. I used Firebase for the Backend and HTML, CSS and JavaScript for the Frontend.
          </Typography>
        </CardContent>
      </StyledCard>
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

export default LearningPage;
