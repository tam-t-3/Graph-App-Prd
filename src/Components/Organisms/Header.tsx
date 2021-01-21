import React from "react";
import { aboutTxt } from "../../Constants/Strings";
import AppBar from '@material-ui/core/AppBar';
import AppBarMenu from "../Molecules/AppBarMenu";
import { 
  createStyles,
  makeStyles,
  Theme } from "@material-ui/core/styles";
import styled from "styled-components";
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    root: {
      flexGrow: 1,
      backgroundColor: "#262525",
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

const ButtonAppBar = () => {
  const classes = useStyles();

  return (
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <LayoutAppTitle>{aboutTxt.appName}</LayoutAppTitle>
          </Typography>
          <AppBarMenu />
        </Toolbar>
      </AppBar>
  )
};

const LayoutAppTitle = styled.span`
  color: #61dafb;
  font-size: 20px;
  padding: 8px;
`;

export default ButtonAppBar;