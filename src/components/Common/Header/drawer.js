import * as React from "react";
import Drawer from "@mui/material/Drawer";

import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import Theme from '../Theme'

export default function AnchorTemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <IconButton onClick={() => setOpen(true)}>
        <MenuRoundedIcon className="link" />
      </IconButton>
      <Drawer anchor={"right"} open={open} onClose={() => setOpen(false)}>
        <div className="drawer-div">
        <Link to="/">
          <p className="link">Home</p>
        </Link>
        <Link to="/watchlist">
          <p className="link">Watchlist</p>
        </Link>
        <Link to="/compare">
          <p className="link">Compare</p>
        </Link>
        <Link to="/dashboard">
          <p className="link">Dashboard</p>
        </Link>
          <div style={{"backgroundColor": "var(--black)"}}>
            <Theme />
          </div>
        </div>
      </Drawer> 
    </div>
  );
}
