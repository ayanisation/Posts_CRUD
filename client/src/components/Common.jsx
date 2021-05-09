import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import { Container, IconButton } from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  appBar: {
    display: "flex",
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "black",
  },
  appBar2: {
    top: 50,
    display: "flex",
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "black",
  },
  heading: {
    color: "#C2936E",
    fontWeight: "bold",
  },
  image: {
    marginLeft: "15px",
  },
}));

export default function Common(props) {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="lg" style={{ height: 30 }}>
        <AppBar className={classes.appBar} position="fixed" color="inherit">
          <Typography className={classes.heading} variant="h4" align="center">
            {props.title}
          </Typography>
        </AppBar>
        <AppBar position="fixed" className={classes.appBar2}>
        <Typography style={{color:"black"}}>1</Typography>
          <IconButton component={Link} to="/searchPosts" title="Search Posts">
            <SearchOutlined style={{ color: "FFFFFF" }} />
          </IconButton>
        </AppBar>
      </Container>
    </>
  );
}
