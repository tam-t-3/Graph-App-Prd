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
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <TitleLayout>{aboutTxt.appName}</TitleLayout>
          </Typography>
          <AppBarMenu />
        </Toolbar>
      </AppBar>
    </div>
  )
};

const TitleLayout = styled.span`
  padding: 8px;
`;

export default ButtonAppBar;