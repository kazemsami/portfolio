import { Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";

const GoalsComponent = ({ actionSteps, goal, index }) => {
  return (
    <Card
      sx={{
        background: "#284646",
      }}
    >
      <CardContent
        sx={{ gap: "10px", display: "flex", flexDirection: "column" }}
      >
        <Typography variant="h5">Goal {index}</Typography>
        <Typography variant="body1">{goal}</Typography>
        {actionSteps.map((item) => (
          <Card key={item.step}>
            <CardContent
              sx={{ gap: "10px", display: "flex", flexDirection: "column" }}
            >
              <Typography variant="h5">Action step</Typography>
              <Typography variant="body1" color="text.secondary">
                {item.step}
              </Typography>
              <Grid
                container
                spacing={{ xs: 3, md: 4, lg: 5 }}
                columns={{ xs: 4, sm: 8, md: 12, lg: 16 }}
                alignItems="stretch"
              >
                {Object.entries(item).map(([key, property], ind) => {
                  if (ind !== 0) {
                    return (
                      <Grid
                        key={key}
                        item
                        xs={4}
                        sm={6}
                        md={6}
                        lg={4}
                        sx={{ display: "flex" }}
                      >
                        <Card
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            flexDirection: "column",
                            boxShadow: 0,
                            p: 1,
                          }}
                        >
                          <CardContent
                            sx={{
                              gap: "10px",
                              display: "flex",
                              flexDirection: "column",
                            }}
                          >
                            <Typography variant="h5">
                              {key === "resources"
                                ? "Resources"
                                : key === "priority"
                                ? "Priority"
                                : key === "startDate"
                                ? "Start Date"
                                : "Due Date"}
                            </Typography>
                            {key === "resources" ? (
                              <ul
                                style={{
                                  color: "text.secondary",
                                  paddingLeft: 15,
                                  margin: 0,
                                }}
                              >
                                {property.map((ite) => (
                                  <li style={{ padding: 5 }} key={ite}>
                                    {ite}
                                  </li>
                                ))}
                              </ul>
                            ) : (
                              <Typography variant="body1">
                                {property}
                              </Typography>
                            )}
                          </CardContent>
                        </Card>
                      </Grid>
                    );
                  } else {
                    return null;
                  }
                })}
              </Grid>
            </CardContent>
          </Card>
        ))}
      </CardContent>
    </Card>
  );
};

export default GoalsComponent;
