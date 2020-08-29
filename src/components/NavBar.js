import React from "react";
import { makeStyles, StylesProvider } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import styles from "./Navbar.module.css";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Image from "../images/mask.png";
import { red, blue } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        style={{ background: "transparent", boxShadow: "none" }}
      >
        <Toolbar>
          <img src={Image} className={(classes.image, styles.imag)} />
          <Typography
            style={{ color: "green" }}
            variant="h5"
            className={classes.title}
          >
            Covid-19 Tracker
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
