import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import data from "../data/sample";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";

export default function LabTabs() {
  const [value, setValue] = React.useState("0");
  const { title, section } = data;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            {section.map((i, index) => {
              console.log(index);
              return <Tab label={i.title} value={String(index)} />;
            })}
          </TabList>
        </Box>

        {section.map((i, index) => {
          const { data } = i;
          const ind = index;
          return (
            <div>
              {data.map((j) => {
                return (
                  <TabPanel value={String(ind)}>
                    <FormGroup>
                      <FormControlLabel
                        control={<Checkbox defaultChecked />}
                        label={j.title}
                      />
                    </FormGroup>
                  </TabPanel>
                );
              })}
            </div>
          );
        })}
      </TabContext>
    </Box>
  );
}
