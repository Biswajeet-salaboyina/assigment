import React from "react";

import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

import { Drawer } from "@mui/material";
import LabTabs from "./tabs";

const Section = ({ title, data }) => {
  const DemoPaper = styled(Paper)(({ theme }) => ({
    height: 200,

    padding: theme.spacing(2),
    ...theme.typography.body2,
    textAlign: "center",
  }));

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <div className="section">
      <h3 style={{ textAlign: "left" }}>{title}</h3>
      {/* <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item md={4}>
          <DemoPaper variant="elevation">default variant</DemoPaper>
        </Grid>
        <Grid item md={4}>
          <DemoPaper variant="elevation">default variant</DemoPaper>
        </Grid>
        <Grid item md={4}>
          <DemoPaper variant="elevation">default variant</DemoPaper>
        </Grid>
      </Grid> */}
      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        {data.map((j) => {
          return (
            <Grid item md={4}>
              <DemoPaper variant="elevation">
                <h4 style={{ textAlign: "left" }}>{j.title} </h4>
                {j.data ? j.data : "No data"}
              </DemoPaper>
            </Grid>
          );
        })}
        <Grid item md={4}>
          <DemoPaper variant="elevation">
            <Button
              onClick={toggleDrawer(true)}
              style={{ color: "black", borderColor: "gray", margin: "90px" }}
              variant="outlined"
            >
              + Add Widget
            </Button>
            <Drawer anchor={"right"} open={open} onClose={toggleDrawer(false)}>
              <LabTabs></LabTabs>
            </Drawer>
          </DemoPaper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Section;
