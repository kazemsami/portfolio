import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

const ShowCaseComponent = ({ title, link, image, evidence, handleOpen }) => {
  return (
    <Card
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        p: 1,
		maxWidth: 500,
        background: "#284646",
      }}
    >
      <CardMedia component="img" height="300" image={image} alt={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          href={title !== "Internet Cafe System" ? link : ""}
          onClick={
            title === "Internet Cafe System" ? () => handleOpen(link) : null
          }
		  target="_blank"
		  rel="noreferrer"
          size="small"
        >
          {title === "Internet Cafe System" ? "Watch" : "View"}
        </Button>
        {evidence && (
          <Button onClick={() => handleOpen(evidence)} size="small">
            Evidence
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default ShowCaseComponent;
