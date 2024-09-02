import * as React from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Grid from "../Grid";
import "./style.css";
import List from "../List";
import { useTheme } from "../../../../context/ThemeContext";

export default function Tabs({ coins }) {
  const [value, setValue] = React.useState("grid");
  const {darkMode} = useTheme();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const tabColorStyle = darkMode ? "var(--white)" : "var(--black)";
  const style = {
    color: tabColorStyle,
    "& .Mui-selected": {
      color: "var(--blue) !important",
    },
    fontFamily: "Inter,sans-serif",
    fontWeight: 600,
    textTransform: "capitalize",
  };

  return (
    <div>
      <TabContext value={value}>
        <TabList onChange={handleChange} variant="fullWidth">
          <Tab label="Grid" value="grid" sx={style} />
          <Tab label="List" value="list" sx={style} />
        </TabList>

        <TabPanel value="grid">
          <div className="grid-flex">
            {coins.map((coin, i) => {
              return <Grid coin={coin} key={i} />;
            })}
          </div>
        </TabPanel>
        <TabPanel value="list">
          <div className="list-table">
            {coins.map((coin, i) => {
              return <List coin={coin} key={i} hover={true}/>;
            })}
          </div>
        </TabPanel>
      </TabContext>
    </div>
  );
}
