import { Box, CardContent, Divider, Typography } from "@mui/material";
import React from "react";
import GoalsComponent from "../components/GoalsComponent";
import { StyledBox, StyledCard } from "./styled";

const GoalsPage = () => {
  const goals = [
    {
      actionSteps: [
        {
          step: "Research ReactJS concepts by reading documentations and watching YouTube videos to better understand the web application requirements and how things should be implemented.",
          priority: "High",
          startDate: "Started",
          dueDate: "25/10/2022",
          resources: ["ReactJS documentation", "YouTube tutorials"],
        },
        {
          step: "Cooperate with my team to better understand the issues we are facing and produce solutions.",
          priority: "High",
          startDate: "Started",
          dueDate: "15/11/2022",
          resources: ["monday.com"],
        },
        {
          step: "Develop my collaboration and teamwork skills in an agile environment and learn to be more efficient.",
          priority: "High",
          startDate: "Started",
          dueDate: "30/10/2022",
          resources: ["monday.com"],
        },
      ],
      goal: "Work with my team to finalize ADEK’s screening web application. We still need to work on parts of the application like automated mailing, video/picture upload and test them to make sure they are operational. With proper teamwork and communication, we will be able to attain this goal. This goal will also help sharpen required skills in the frontend domain. We also receive a budget for our work. Our deadline is in 1 month so we have to finish it by then.",
    },
    {
      actionSteps: [
        {
          step: "Read books related to C++ programming language and object-oriented programming to apprehend algorithms and how to properly structure objects.",
          priority: "Medium",
          startDate: "20/11/2022",
          dueDate: "1/2/2023",
          resources: ["C++ books"],
        },
        {
          step: "Work on C++ school projects whilst reading C++ documentation like cppreference.com and cplusplus.com and also watching YouTube videos to better comprehend my project's requirements/tasks.",
          priority: "High",
          startDate: "Started",
          dueDate: "1/1/2023",
          resources: [
            "cplusplus.com",
            "cppreference.com",
            "Youtube tutorials and courses",
          ],
        },
        {
          step: "Ask questions on Stackoverflow or search for questions that have already been answered related to the issues that I am facing in my C++ school projects.",
          priority: "High",
          startDate: "Started",
          dueDate: "1/1/2023",
          resources: ["Stackoverflow forums"],
        },
      ],
      goal: "Become proficient in C++. I should be able to solve more complex problems related to object-oriented programming and also problems specific to C++. I need to practice and read C++ documentation and with a little patience I will be able to achieve this goal. Countless jobs require knowledge in object-oriented programming languages like C++ and knowing C++ can ease the learning process of other object-oriented languages. I can confidently say that I will be proficient in C++ within 7 more months if I put the required time and effort into it.",
    },
    {
      actionSteps: [
        {
          step: "Collect evaluation points by evaluating students in their projects which can be used to further my progress in the 42 program.",
          priority: "High",
          startDate: "Started",
          dueDate: "1/3/2023",
          resources: [
            "Accommodation",
            "Daily meal",
            "Access to computers with an internet connection",
          ],
        },
        {
          step: "Work on and get evaluated on all my projects in the 42 core curriculum with the support of other students and by doing my own research and perusing various resources.",
          priority: "High",
          startDate: "Started",
          dueDate: "1/3/2023",
          resources: [
            "Online documentation",
            "YouTube tutorials",
            "Stackoverflow forums",
            "Accommodation",
            "Daily meal",
            "Access to computers with an internet connection",
          ],
        },
        {
          step: "Attend the classes for the accredited path and excel at assignments and exams to obtain a distinction grade in my diploma.",
          priority: "High",
          startDate: "Started",
          dueDate: "1/3/2023",
          resources: [
            "Slack",
            "Microsoft teams",
            "Accommodation",
            "Daily meal",
            "Access to computers with an internet connection",
          ],
        },
      ],
      goal: "Complete 42 Abu Dhabi’s core curriculum. I have 3 more projects to complete and 1 final exam. Currently I have finished a total of 12 projects and 4 exams. I have 300 days left in my blackhole which is more than enough for me to complete my remaining projects. I need to obtain the diploma from 42 Abu Dhabi because it will assist in my endeavours to finding a job in a well esteemed organization. I aim to complete the 42 core curriculum within 5 more months.",
    },
    {
      actionSteps: [
        {
          step: "Read novels and books in the English language to improve my writing and comprehension skills.",
          priority: "High",
          startDate: "Started",
          dueDate: "1/4/2023",
          resources: ["English books and novels"],
        },
        {
          step: "Listen to podcasts and watch movies to enhance my listening and speaking skills.",
          priority: "Medium",
          startDate: "30/11/2022",
          dueDate: "1/4/2023",
          resources: ["Podcasts", "Movies"],
        },
        {
          step: "Communicate and collaborate with other students to improve my speaking and communication skills.",
          priority: "High",
          startDate: "Started",
          dueDate: "1/3/2023",
          resources: ["A working environment to communicate with colleagues"],
        },
      ],
      goal: "Improve my communication and English language skills. I have to become more confident when communicating with people and I should possess the vocabulary to efficiently describe and express my needs, problems that I am facing, etc. I am currently a student in a peer-to-peer coding school that encourages you to communicate with your peers and will therefore help accommodate my wishes to completing this goal. Communication and English language skills are valuable because they are required in various jobs and are supplemental to achieving my goals. I plan to be efficient in my communication skills within 6 more months.",
    },
  ];
  return (
    <StyledBox component="main">
      <StyledCard>
        <CardContent>
          <Typography variant="h4">Goals</Typography>
          <Divider sx={{ m: 2, background: "gray" }} />
          {goals.map((item, index) => (
            <Box key={item.goal}>
              <GoalsComponent
                actionSteps={item.actionSteps}
                goal={item.goal}
                index={index + 1}
              />
              {index !== goals.length - 1 && (
                <Divider sx={{ m: 2, background: "gray" }} />
              )}
            </Box>
          ))}
        </CardContent>
      </StyledCard>
    </StyledBox>
  );
};

export default GoalsPage;
