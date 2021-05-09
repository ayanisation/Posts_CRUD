import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { Delete, MoreHoriz, ThumbUpAlt } from "@material-ui/icons";
import ThumbUpOutlinedIcon from "@material-ui/icons/ThumbUpOutlined";
import ThumbDownAltIcon from "@material-ui/icons/ThumbDownAlt";
import ThumbDownAltOutlinedIcon from "@material-ui/icons/ThumbDownAltOutlined";
import moment from "moment";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deletePost, dislikePost, likePost } from "../actions/postAction";

const useStyles = makeStyles({
  media: {
    height: 0,
    paddingTop: "66.25%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    // backgroundBlendMode: "darken",
  },
  border: {
    border: "solid",
  },
  fullHeightCard: {
    height: "100%",
  },
  card: {
    backgroundColor: "black",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "15px",
    height: "100%",
    position: "relative",
  },
  overlay: {
    position: "absolute",
    top: "20px",
    left: "20px",
    color: "white",
  },
  overlay2: {
    position: "absolute",
    top: "240px",
    right: "20px",
    color: "white",
  },
  grid: {
    display: "flex",
  },
  details: {
    marginLeft: 16,
    marginRight: 10,
    marginTop: 5,
    justifyContent: "space-between",
  },
  title: {
    color: "#F2E9EA",
  },
  cardActions: {
    // padding: "0 16px 8px 16px",
    marginRight: 10,
    marginTop: 20,
    display: "flex",
    justifyContent: "space-between",
  },
  texts: { color: "#F2E9EA", marginTop: 5 },
});

const Post = ({ post, parent, username }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem("profile"));

  const likeIt = () => {
    dispatch(likePost(post._id, user.username));
  };
  const dislikeIt = () => {
    dispatch(dislikePost(post._id, user.username));
  };
  const deleteIt = () => {
    if (window.confirm("Are you sure you wish to delete this post?"))
      dispatch(deletePost(post._id));
  };

  return (
    <>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={post.selectedFile}
          title={post.title}
        />

        <div className={classes.overlay2}>
          <Button
            style={{ color: "white" }}
            size="small"
            component={Link}
            to={`/populate/${post._id}`}
            title="Edit Post"
          >
            <MoreHoriz fontSize="large" />
          </Button>
        </div>
        <div className={classes.details}>
          <Typography
            variant="h6"
            style={{
              fontWeight: "bold",
              color: "#C2936E",
              textDecoration: "none",
            }}
          >
            {post.title}
          </Typography>
          <Typography variant="body2" style={{ color: "grey" }}>
            {moment(post.createdAt).fromNow()}
          </Typography>
        </div>

        <CardContent>
          <Typography className={classes.title} variant="body1" gutterBottom>
            {post.message}
          </Typography>
        </CardContent>
        <div className={classes.details}>
          <Typography variant="body2" className={classes.texts}>
            {post.tags
              .split(" ")
              .map((tag) => (tag.length > 0 ? `#${tag} ` : ""))}
          </Typography>
        </div>
        <CardActions className={classes.cardActions}>
          <div style={{ display: "flex" }}>
            <Button size="small" color="primary" onClick={likeIt}>
              {!post.liked ? (
                <ThumbUpOutlinedIcon fontSize="small" />
              ) : (
                <ThumbUpAlt fontSize="small" />
              )}
            </Button>
          </div>
          <div style={{ display: "flex" }}>
            <Button size="small" color="primary" onClick={dislikeIt}>
              {!post.disliked ? (
                <ThumbDownAltOutlinedIcon fontSize="small" />
              ) : (
                <ThumbDownAltIcon fontSize="small" />
              )}
            </Button>
          </div>
        </CardActions>
      </Card>
    </>
  );
};

export default Post;
