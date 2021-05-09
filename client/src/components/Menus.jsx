import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import AddCircleOutlinedIcon from "@material-ui/icons/AddCircleOutlined";
import { Link, useLocation } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import {
  BottomNavigation,
  BottomNavigationAction,
  Grow,
  Typography,
} from "@material-ui/core";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import ThumbsUpDownIcon from "@material-ui/icons/ThumbsUpDown";
import ThumbsUpDownOutlinedIcon from "@material-ui/icons/ThumbsUpDownOutlined";
const useStyles = makeStyles(() => ({
  appBar: {
    top: "auto",
    bottom: 0,
  },
  appBar2: {
    background: "black",
    top: "auto",
    bottom: 50,
    padding: 20,
  },
  fabButton: {
    top: -10,
  },
}));

export default function Menus({ parent }) {
  const classes = useStyles();
  const location = useLocation();

  return (
    <>
      {parent === "user" ? (
        <Grow in>
          <AppBar position="fixed" className={classes.appBar2}>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <Typography
                style={{
                  fontWeight: "bold",
                  textDecoration: "none",
                  color: location.pathname === "/liked" ? "#C2936E" : "white",
                }}
                variant="h6"
                component={Link}
                to="/liked"
              >
                Liked
              </Typography>
              <Typography
                style={{
                  fontWeight: "bold",
                  textDecoration: "none",
                  color:
                    location.pathname === "/disliked" ? "#C2936E" : "white",
                }}
                variant="h6"
                component={Link}
                to="/disliked"
              >
                Disliked
              </Typography>
            </div>
          </AppBar>
        </Grow>
      ) : (
        <></>
      )}
      <AppBar position="fixed" className={classes.appBar}>
        <BottomNavigation style={{ background: "black", minWidth: 50 }}>
          <BottomNavigationAction
            label="Recents"
            value="recents"
            component={Link}
            to="/feed"
            icon={
              location.pathname === "/" ? (
                <HomeIcon style={{ color: "#ffffff" }} />
              ) : (
                <HomeOutlinedIcon style={{ color: "#ffffff" }} />
              )
            }
          />
          <BottomNavigationAction
            label="Recents"
            value="recents"
            component={Link}
            to="/populate"
            icon={
              location.pathname === "/populate" ? (
                <AddCircleOutlinedIcon
                  style={{ color: "#ffffff" }}
                  fontSize="large"
                />
              ) : (
                <AddCircleOutlineOutlinedIcon
                  style={{ color: "#ffffff" }}
                  fontSize="large"
                />
              )
            }
          />
          <BottomNavigationAction
            label="Recents"
            value="recents"
            component={Link}
            to="/liked"
            icon={
              location.pathname === "/liked" ||
              location.pathname === "/disliked" ? (
                <ThumbsUpDownIcon style={{ color: "#ffffff" }} />
              ) : (
                <ThumbsUpDownOutlinedIcon style={{ color: "#ffffff" }} />
              )
            }
          />
        </BottomNavigation>
      </AppBar>
    </>
  );
}
