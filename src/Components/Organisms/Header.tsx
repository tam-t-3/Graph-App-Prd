import React from "react";
import { 
  createStyles,
  makeStyles,
  Theme } from "@material-ui/core/styles";
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import AppBarMenu from "../Atoms/AppBarMenu/AppBarMenu";
import { aboutTxt } from "../../Constants/Strings";
import styled from "styled-components";
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
            <TitleLayout>{aboutTxt.appName}</TitleLayout>
          </Typography>
          <AppBarMenu />
        </Toolbar>
      </AppBar>
  )
};

const TitleLayout = styled.span`
  color: #61dafb;
  font-size: 20px;
  padding: 8px;
`;

export default ButtonAppBar;