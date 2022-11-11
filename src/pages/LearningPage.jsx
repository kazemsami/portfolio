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
  CPP_MODULE_URL,
  Cub3dImg,
  Cub3dURL,
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
          <Typography variant="h4">Autodidacticism</Typography>
          <Divider sx={{ m: 2, background: "gray" }} />
          <Typography variant="body1">
            So I will briefly tell you how my programming career began. I used
            to play so many computer games until I realised that I should be
            doing something useful with my life. As a gamer I decided that I
            should do something that is associated with computers. That is when
            I discovered programming. I was 21. I began my learning journey by
            watching YouTube tutorials and solving simple coding challenges and
            built my way up from there.
          </Typography>
          <Divider sx={{ m: 2, background: "gray" }} />
          <Typography variant="h5">
            Internet Gaming Cafe Windows Application
          </Typography>
          <Typography variant="body1">
            My first actual project I worked on was an Internet Gaming Cafe
            Windows application with C/C++ Windows API as a freelancer. The most
            challenging issue that I faced was setting up a database. I first
            set it up using MySQL with C++ then went on to create my own
            database using csv files. I store all the information in a local csv
            file and fetch required information from there. Coding a functional
            scrollbar from scratch was tough as well. All of this was a great
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
          <Typography variant="h5">My First Website</Typography>
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
          <Typography variant="h5">
            Fishing Trip Business Web Application
          </Typography>
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
          <Typography variant="h5">Social Media Web Application</Typography>
          <Typography variant="body1">
            My next project was inspired by the Business web app because I had
            to build a gallery and thought why not make it a social media kind
            of web app where people can post images, comment and like. The logic
            behind this idea was pretty complicated because it was my first time
            ever working with Firebase. The website is not very responsive
            albeit quite good considering it was my second website.
          </Typography>
          <ShowCaseComponent
            title="Anephity"
            image={AnephityImg}
            handleOpen={null}
            link={AnephityURL}
          />
          <Divider sx={{ m: 2, background: "gray" }} />
          <Typography variant="h4">42 Abu Dhabi</Typography>
          <Divider sx={{ m: 2, background: "gray" }} />
          <Typography variant="body1">
            42 Abu Dhabi is a coding school that encourages peer-to-peer
            learning. Until now I completed 12 projects in the school's
            curriculum which was a very exigent and long experience but I will
            just be writing about 4 projects that I think are worth mentioning
            or else this is going to be a long topic.
          </Typography>
          <Divider sx={{ m: 2, background: "gray" }} />
          <Typography variant="h5">42's Minishell Project</Typography>
          <Typography variant="body1">
            So, the first project I want to mention is Minishell as I will be
            mentioning my projects in a chronological order. It was a group
            project with a team of 2. Minishell is a replica of bash where you
            feed it commands and it parses them and executes them accordingly.
            <br />
            <br />
            Minishell was a huge project and it took us 2 months to complete.
            Myself and{" "}
            <a
              style={{ color: "white" }}
              href="https://github.com/Anastasiia-Ni"
              target="_blank"
              rel="noreferrer"
            >
              Anastasia
            </a>{" "}
            split up the work. I was working on execution and parsing and she
            worked on built-in commands. <br /> <br />A challenging issue I
            faced when working on my part was trying to execute commands with
            piping functionality. I looked up Stackoverflow, read the pipe
            manual but still couldn't figure out why the shell just gets stuck
            when piping. Taking advantage of the peer-to-peer system in 42 I
            asked a few students and one of them said that I might not be
            waiting for the child process to finish. I tried that but to no
            avail until someone else told me that I should close the pipes after
            using them. So I tried that and voila it worked!
            <br />
            <br />
            Another issue we both faced was relating builtin commands. She was
            testing the exit command she wrote and asked me to take a look. So
            then we both noticed that it does not work when passing a maximum
            unsigned long as an argument to exit. We solved it by using a quick
            hacky way where in our custom atoi we check that the size of the
            string digits that we want to convert to integer are not more than
            19. It was great working with a brilliant student like Anastasia, I
            learnt so much from her and would love to work with her again in the
            near future.
          </Typography>
          <ShowCaseComponent
            title="Minishell"
            image={GithubImg}
            handleOpen={null}
            link={MinishellURL}
          />
          <Divider sx={{ m: 2, background: "gray" }} />
          <Typography variant="h5">42's CPP Module Project</Typography>
          <Typography variant="body1">
            My next school project was CPP Module. It was a solo project. This
            project teaches you the fundamentals of C++ programming language and
            object-oriented programming.
            <br />
            <br />
            Object-oriented programming is pretty complicated and I did face a
            couple of challenges. In one tricky exercise you had to implement
            polymorphism so I had one tiny logical error where it was not
            printing the function of the derived class. I did some research and
            thought maybe I should make the function in the base class virtual
            and luckily enough I was right.
            <br />
            <br />
            Even though object-oriented programming is rather intricate, it gets
            easier as I proceed through my learning journey. You will know what
            I mean when we get to the last project.
          </Typography>
          <ShowCaseComponent
            title="CPP Module"
            image={GithubImg}
            handleOpen={null}
            link={CPP_MODULE_URL}
          />
          <Divider sx={{ m: 2, background: "gray" }} />
          <Typography variant="h5">42's Cub3D Project</Typography>
          <Typography variant="body1">
            Cub3D was one of the many sophisticated projects myself and{" "}
            <a
              style={{ color: "white" }}
              href="https://github.com/Anastasiia-Ni"
              target="_blank"
              rel="noreferrer"
            >
              Ahmed Hammoudeh
            </a>{" "}
            faced. This project requires an understanding of mathematical
            concepts such as Pythogoras theorem, Linear Algebra and Vectors.
            This{" "}
            <a
              style={{ color: "white" }}
              href="https://www.youtube.com/watch?v=NbSee-XM7WA"
              target="_blank"
              rel="noreferrer"
            >
              YouTube video
            </a>{" "}
            was very helpful as well as{" "}
            <a
              style={{ color: "white" }}
              href="https://lodev.org/cgtutor/raycasting.html"
              target="_blank"
              rel="noreferrer"
            >
              Lode's Tutorial
            </a>
            .
            <br />
            <br />A problem we faced was figuring out how to draw different
            textures depending on the direction the wall is facing. So a wall
            facing north has its own texture and a wall facing west has its own
            texture and so on. This problem was required by the project's
            subject but it was not explained in these tutorials. So I decided
            that each texture to be drawn must be calculated either using the
            player's direction or the ray's direction. I asked my partner and he
            told me that most likely it could be calculated using the ray's
            direction. So we implemented it plus the usual bug fixes and Lo and
            behold he was right. This project taught me how teamwork and
            communication are keys to success. Luckily I had a very smart and
            kind partner. I wouldn't have done it without him.
          </Typography>
          <ShowCaseComponent
            title="42's Cub3D Project"
            image={Cub3dImg}
            handleOpen={null}
            link={Cub3dURL}
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
