import {
  CardContent,
  CardMedia,
  Divider,
  Modal,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import {
  AnephityImg,
  AnephityURL,
  BusinessWebImg,
  BusinessWebURL,
  CafeSystemImg,
  CafeSystemURL,
  EvidenceImg,
  GithubImg,
  MinishellURL,
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
            life. As a gamer I decided that I should do something that is
            associated with computers. That is when I knew about programming. I
            was 21. I learnt by solving simple coding challenges and built my
            way up from there. <br />
            <br /> I then started working on a Internet Gaming Cafe Windows
            application with C/C++ Windows API as a freelancer. The most
            challenging issue that I faced was setting up a database. I first
            set it up using MySQL with C++ then went on to create my own
            database using csv files. I store all the information in a local csv
            file and fetch required information from there. Also coding a
            functional scrollbar from scratch was tough. All of this was a great
            learning experience and assisted in improving my C/C++ skills and
            understanding how Windows applications work behind the scenes.
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
            HTML, CSS and JavaScript. So, I built my own personal website which
            honestly looked horrific but thankfully was part of the learning
            process and I am proud of a script I created which locates keywords
            in a book and displays a sentence containing that keyword.
          </Typography>
          <ShowCaseComponent
            title="Personal website"
            image={PersonalWebImg}
            handleOpen={null}
            link={PersonalWebURL}
          />
          <Divider sx={{ m: 2, background: "gray" }} />
          <Typography variant="body1">
            For my next project I built a web application for a fishing trip
            business which was honestly a big improvement compared to my first
            website. I used Firebase for the Backend and HTML, CSS and
            JavaScript for the Frontend. Coming up with a proper design for the
            web application was a great challenge and played a huge role in my
            web development learning journey.
          </Typography>
          <ShowCaseComponent
            title="Business web app"
            image={BusinessWebImg}
            handleOpen={null}
            link={BusinessWebURL}
          />
          <Divider sx={{ m: 2, background: "gray" }} />
          <Typography variant="body1">
            My next project was inspired by the Business web app because I had
            to build a gallery and thought why not make it a social media kind
            of web app where people can post images, comment and like. The logic
            behind this idea was pretty complicated because it was my first time
            ever working with Firebase. The website is not very responsive
            albeit quite good considering it was my 2nd website.
          </Typography>
          <ShowCaseComponent
            title="Anephity web app"
            image={AnephityImg}
            handleOpen={null}
            link={AnephityURL}
          />
          <Divider sx={{ m: 2, background: "gray" }} />
          <Typography variant="h4" component="div">
            42 Abu Dhabi
          </Typography>
          <Divider sx={{ m: 2, background: "gray" }} />
          <Typography variant="body1">
            In 42 Abu Dhabi coding campus I worked on 12 projects until now but
            I will just talk about 4 projects that I think are worth mentioning
            or else this is going to be a long topic.
            <br />
            <br />
            So, the first project I want to mention is Minishell as it is by
            chronological order. It is a group project with a team of 2. Minishell
            is a replica of bash where you feed it commands and it executes them
            accordingly.
            <br />
            <br /> Myself and{" "}
            <a
              style={{ color: "white" }}
              href="https://github.com/Anastasiia-Ni"
              target="_blank"
              rel="noreferrer"
            >
              Anastasia
            </a>{" "}
            split up the work. I was working on execution and parsing and she
            worked on built-in commands. <br /> <br />A big issue I faced was
            trying to execute commands with piping functionality. I looked up
            Stackoverflow, read the pipe manual but still couldn't figure out
            why the shell just gets stuck when piping. Taking advantage of the
            peer-to-peer system in 42 I asked a few students and one of them
            said that I might not be waiting for the child process to finish. I
            tried that but to no avail until someone else told me that I should
            close the pipes after using them and voila it worked! It was a great
            learning experience.
          </Typography>
          <ShowCaseComponent
            title="Minishell"
            image={GithubImg}
            handleOpen={null}
            link={MinishellURL}
          />
          <Divider sx={{ m: 2, background: "gray" }} />
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
