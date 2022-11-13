import {
  Card,
  CardContent,
  CardMedia,
  Divider,
  Modal,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import {
  AnephityImg,
  AnephityURL,
  BinaryTreeImg,
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
  MinishellImg,
  MinishellURL,
  PersonalWebImg,
  PersonalWebURL,
  UnbalancedTreeImg,
} from "../assets";
import ShowCaseComponent from "../components/ShowCaseComponent";
import { StyledBox, StyledButton, StyledCard, StyledCardModal } from "./styled";
import hljs from "highlight.js";

const LearningPage = () => {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(null);
  const handleOpen = (link) => {
    setShow(link);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <StyledBox component="main">
      <StyledCard>
        <CardContent
          sx={{ gap: "10px", display: "flex", flexDirection: "column" }}
        >
          <Typography variant="h4">Autodidacticism</Typography>
          <Divider sx={{ m: 2, background: "gray" }} />
          <Typography variant="body1">
            I will briefly tell you how my programming career began. I used to
            play so many computer games until I realised that I should be doing
            something useful with my life. As a gamer, I decided that I should
            do something that is associated with computers. That is when I
            discovered programming. I was 21. I began my learning journey by
            watching YouTube tutorials and solving simple coding challenges and
            built my way up from there.
          </Typography>
          <Divider sx={{ m: 2, background: "gray" }} />
          <Typography variant="h5">
            Internet Gaming Cafe Windows Application
          </Typography>
          <Typography variant="body1">
            The first actual project I worked on was an Internet Gaming Cafe
            Windows application with C/C++ Windows API as a freelancer. The most
            complicated part was setting up a database. I first set it up by
            using the MySQL library for C++ then decided that creating my own
            database using CSV files was the way to go. I store all the
            information in a local CSV file and fetch the required information
            from there. Coding a functional scrollbar from scratch was tough as
            well. Needless to say, this was a great learning experience and
            assisted in improving my C/C++ skills and understanding how Windows
            applications work behind the scenes.
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
            HTML, CSS and JavaScript. So, later on, I built a personal website
            which honestly looked horrific but thankfully was part of the
            learning process and I am proud of a script I created which locates
            keywords in a book and displays a sentence containing that keyword.
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
            For my next project, I built a web application for a fishing trip
            business which was honestly a big improvement compared to my first
            website. I used Firebase for the Backend and HTML, CSS and
            JavaScript for the Frontend. Constructing a proper design for the
            web application was a great challenge and played a huge role in my
            web development learning journey.
          </Typography>
          <ShowCaseComponent
            title="Business web app"
            image={BusinessWebImg}
            handleOpen={handleOpen}
            link={BusinessWebURL}
            evidence={EvidenceImg}
          />
          <Divider sx={{ m: 2, background: "gray" }} />
          <Typography variant="h5">Social Media Web Application</Typography>
          <Typography variant="body1">
            This project was inspired by the Business web application because I
            had to build a gallery for it anyway and thought why not make it a
            social media kind of website where people can post images, comment
            and like. The logic behind this idea was pretty complicated because
            it was my first time working with Firebase. The website is not very
            responsive albeit quite good considering it was my second website.
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
            learning. Until now, I completed 12 projects in the school's
            curriculum which was exigent and long but I will just be writing
            about 4 projects that I think are worth mentioning or else this will
            be a long topic.
          </Typography>
          <Divider sx={{ m: 2, background: "gray" }} />
          <Typography variant="h5">42's Minishell Project</Typography>
          <Typography variant="body1">
            The first project I want to discuss is Minishell. It was a group
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
            piping functionality. I looked up Stackoverflow and read the pipe
            manual but still could not figure out why the shell just gets stuck
            when piping. Taking advantage of the peer-to-peer system in 42 I
            asked a few students and one of them said that I might not be
            waiting for the child process to finish. I gave it a try but to no
            avail until someone else told me that I should close the pipes after
            using them. I tried that and voila it worked!
            <br />
            <br />
            Another issue we both faced was related to built-in commands. She
            was testing the exit command she wrote and asked me to take a look.
            We both noticed that it does not work when passing a maximum
            unsigned long as an argument to exit. We solved it by using a quick
            hacky way where in our custom atoi function we check that the size
            of the string digits that we want to convert to integer is not more
            than 19. It was great working with a brilliant student like
            Anastasia, I learnt so much from her and would love to work with her
            again in the near future.
          </Typography>
          <ShowCaseComponent
            title="Minishell"
            image={MinishellImg}
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
            couple of challenges. In one tricky exercise, you had to implement
            polymorphism where I had one tiny logical error. My program was not
            calling the function of the derived class. I did some research and
            thought maybe I should make the function in the base class virtual
            and luckily enough I was right.
            <br />
            <br />
            Even though object-oriented programming is rather intricate, it gets
            simpler as I proceeded through my learning journey. You will know
            what I mean when we get to the last project.
          </Typography>
          <ShowCaseComponent
            title="CPP Modules"
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
            concepts such as the Pythagorean theorem, Linear Algebra and
            Vectors. This{" "}
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
            textures depending on the direction the wall is facing. A wall
            facing north has its own texture and a wall facing west has its own
            texture and so on. This problem was required by the project's
            subject but it was not explained in these tutorials. I guessed that
            each texture to be drawn must be calculated either by using the
            player's direction or the ray's direction. I asked my partner and he
            told me that most likely it could be calculated using the ray's
            direction. So, we implemented it plus the usual bug fixes and Lo and
            behold he was right. This shows how teamwork and communication are
            keys to a successful application. Luckily, I had a very smart and
            kind partner and I would not have done it without him.
          </Typography>
          <ShowCaseComponent
            title="Cub3D"
            image={Cub3dImg}
            handleOpen={null}
            link={Cub3dURL}
          />
          <Divider sx={{ m: 2, background: "gray" }} />
          <Typography variant="h5">42's ft_containers Project</Typography>
          <Typography variant="body1">
            ft_containers is a very long and complicated project where you have
            to rebuild a couple of C++ STL containers from scratch. Imagine
            having to recreate what some of the most talented coders wrote. The
            good thing is you did not have to come up with everything because
            most of it is documented on{" "}
            <a
              style={{ color: "white" }}
              href="https://en.cppreference.com/w/"
              target="_blank"
              rel="noreferrer"
            >
              cppreference
            </a>{" "}
            and{" "}
            <a
              style={{ color: "white" }}
              href="https://cplusplus.com/"
              target="_blank"
              rel="noreferrer"
            >
              cplusplus
            </a>
            . But honestly, even with all of that documentation this project was
            still relatively demanding.
            <br />
            <br />
            Previously I mentioned how C++ and object-oriented programming
            becomes easier. Not yet. Not until after this project. Once you
            complete this project you could pat yourself on the back and truly
            call yourself a C++ mini master. Yes, I said mini because C++ is
            extraordinarily vast and ft_containers is not enough to cover it
            all.
            <br />
            <br />I will begin by writing about the hardships that I faced in
            ft_containers. First, let me tell you about templates. Templates are
            a broad topic in and of itself. I had to peruse both of the
            documentations I mentioned to know how they did their magic. When I
            undertook this project, I knew a few things here and there about
            templates. I knew that they could be used to pass arguments with
            different data types to a function at runtime thanks to my previous
            project CPP modules. But did you know that templates can also be
            used to detect whether a data type that you are passing to a
            function is an integer data type or not. Honestly, it seemed
            complicated at first but once I got the hang of it, it became quite
            simple.
            <br />
            <br />
            Now, I will talk about binary search trees. Why binary search trees
            you might be asking? Because they are an essential part of the C++
            map implementation. A map comprises one or multiple (key, value)
            pairs. So, to locate a specific key in a map you need an efficient
            algorithm. That is where binary trees come into play. This will be
            easy, all I need to do is code a binary tree and I am done right? It
            was not that simple as you will come to know shortly. I implemented
            a binary tree with the help of{" "}
            <a
              style={{ color: "white" }}
              href="https://www.youtube.com/watch?v=hfwwaNNJ-0A"
              target="_blank"
              rel="noreferrer"
            >
              a video tutorial
            </a>{" "}
            and{" "}
            <a
              style={{ color: "white" }}
              href="https://www.youtube.com/watch?v=hfwwaNNJ-0A"
              target="_blank"
              rel="noreferrer"
            >
              a geeksforgeeks guide
            </a>
            . but wait, how in the world am I supposed to iterate through the
            binary tree in ascending and descending order. I sat and thought
            about it for a while. Let us say I had a binary tree such as this.
          </Typography>
          <Card sx={{ boxShadow: 0 }}>
            <CardMedia
              sx={{ objectFit: "contain" }}
              component="img"
              height="300"
              image={BinaryTreeImg}
              alt={"Binary Search Tree"}
            />
          </Card>
          <Typography variant="body1">
            If for example I start at the node with the value 30 and I need to
            proceed to the next node which in this case is 31. I could say if
            the right node exists go right and then I would just go left? I do
            not think so because if the right node might have been 33 and the
            left node 32 then I would have to go left one more time to get to
            31. Easy. Just keep going left as long as the left node exists. Now,
            what if I assume that the node with value 31 does not exist, so that
            would mean that the node that I am currently at is where I need to
            be.
            <pre>
              <code class="language-c">
                {
                  "if (node->right != NULL) \n{\n\tnode = node->right;\n\twhile(node != NULL)\n\t\tnode = node->left;\n}"
                }
              </code>
            </pre>
            For the next part let us say I need to go from 31 to 32. I repeat
            the same steps but this time the right node does not exist, so this
            is when I have to add a different condition and say while the parent
            node exists and its value is less than the value I started with
            which is 31, traverse the parent nodes.
            <pre>
              <code class="language-c">
                {
                  "if (node->right != NULL) \n{\n\tnode = node->right;\n\twhile(node->left != NULL)\n\t\tnode = node->left;\n}\nelse\n{\n\tNode tmp = node;\n\twhile(tmp != NULL && tmp.value < node.value)\n\t\ttmp = tmp->parent;\n\tnode = tmp;\n}"
                }
              </code>
            </pre>
            Finally, I am done. Now all I need to do is create some tests and it
            should be time for submission. While testing, I added numbers to the
            binary tree in ascending order and noticed that it is taking more
            time than usual to traverse the binary tree. I then realised that
            the binary tree has become more like a linked list with a time
            complexity of O(n).
          </Typography>
          <Card sx={{ boxShadow: 0 }}>
            <CardMedia
              sx={{ objectFit: "contain" }}
              component="img"
              height="300"
              image={UnbalancedTreeImg}
              alt={"Unbalanced Tree"}
            />
          </Card>
          <Typography variant="body1">
            A quick google search got me to self-balancing binary trees such as
            an AVL tree or Red-black tree. My body heated up at the thought of
            having to implement the whole thing once again. Thankfully it was
            not that bad. Everything I implemented remained the same except for
            a few changes in the removal and insertion of nodes. This was a
            lengthy project and I can confidently say that I am very proud of my
            work. I hope I will get the opportunity to work on more projects
            that are as challenging and exciting as ft_containers.
          </Typography>
          <ShowCaseComponent
            title="ft_containers"
            image={GithubImg}
            handleOpen={null}
            link={Ft_containersURL}
          />
          <Divider sx={{ m: 2, background: "gray" }} />
          <Typography variant="body1">
            Some roads in this journey were indeed more challenging than others
            but what really matters is the things you learn from it. An
            interesting thing that I learnt is when you need to do something for
            the first time, carry out proper research or else you might end up
            having to repeat everything or end up with a website that
            is designed poorly. God willing, I will not be repeating the same
            mistakes. Thank you for diving deep with me in my learning journey.
            I hope you found some things inspiring and learnt from my
            experience.
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
