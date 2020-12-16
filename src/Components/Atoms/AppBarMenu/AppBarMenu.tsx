import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { navigation } from "../../../Constants/Strings";
import { Link } from "react-router-dom";
import { app } from "../../../Firebase/base";

const AppBarMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div >
      <Button
        style={{color: "white"}}
        aria-controls="simple-meny"
        aria-haspopup="true"
        onClick={handleClick}
        >
          {navigation.menu}
        </Button>

        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <Link style={{ textDecoration: "none", color: "black"}} to="signup">
            <MenuItem onClick={handleClose}>{navigation.signUp}</MenuItem>
          </Link>

          <Link style={{ textDecoration: "none", color: "black"}} to="logIn">
            <MenuItem onClick={handleClose}>{navigation.logIn}</MenuItem>
          </Link>

          <MenuItem onClick={() => app.auth().signOut()}>{navigation.logOut}</MenuItem>
        </Menu>
    </div>
  )
}

export default AppBarMenu;