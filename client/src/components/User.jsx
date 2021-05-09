import { Container, Grid, Grow } from "@material-ui/core";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import Menus from "./Menus";
import Common from "./Common";
import Posts from "./Posts";

const User = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  // useEffect(() => {
  //   dispatch(getPosts());
  // }, [dispatch]);
  let posts = useSelector((state) => state.posts);
  let title = "";

  if (location.pathname === "/liked") {
    posts = posts.filter((post) => post.liked);
    title = "Liked Posts";
  } else {
    posts = posts.filter((post) => post.disliked);
    title = "Disiked Posts";
  }
  return (
    <>
      <Common title={title} />
      <Container maxWidth="lg">
        <Grow in>
          <Container style={{ marginTop: 60, marginBottom: 120 }}>
            <Grid
              container
              justify="space-between"
              alignItems="stretch"
              spacing={5}
            >
              <Posts posts={posts} />
            </Grid>
          </Container>
        </Grow>
      </Container>
      <Menus parent="user" />
    </>
  );
};

export default User;
