import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { CafeSystemImg } from "../assets";

const HomePage = () => {
  const cards = [
    {
        description: "Windows network cafe that I created using win api C++",
        img: CafeSystemImg,
        title: "Internet Cafe System"
    },
  ];
  return (
    <Box
      component="main"
      sx={{
        p: 10,
      }}
    >
      <Grid
        container
        spacing={{ xs: 2, md: 3, lg: 4 }}
        columns={{ xs: 4, sm: 8, md: 12, lg: 16 }}
      >
        {cards.map((item) => (
          <Grid key={item} item xs={4} sm={4} md={4} lg={4}>
            <Card>
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
                <Button size="small">Watch</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HomePage;
