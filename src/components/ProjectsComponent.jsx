import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

const ProjectsComponent = ({ projects, handleOpen }) => {
  return (
    <Grid
      container
      spacing={{ xs: 3, md: 4, lg: 5 }}
      columns={{ xs: 4, sm: 8, md: 12, lg: 16 }}
      alignItems="stretch"
      sx={{ paddingTop: 2, paddingBottom: 2 }}
    >
      {projects.map((item) => (
        <Grid
          key={item.title}
          item
          xs={4}
          sm={8}
          md={6}
          lg={5}
          sx={{ display: "flex" }}
        >
          <Card
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
              p: 1,
			  background: "#284646"
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
              <Typography variant="body2">
                {item.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                href={item.title !== "Internet Cafe System" ? item.link : null}
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
                <Button onClick={() => handleOpen(item.evidence)} size="small">
                  Evidence
                </Button>
              )}
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProjectsComponent;
