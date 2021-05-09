import "./App.css";
import React from "react";
import { Redirect, Route, Switch } from "react-router";
import Feed from "./components/Feed";
import User from "./components/User";
import Forms from "./components/Forms";
import Searchposts from "./components/Searchposts";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Feed} />
      <Route exact path="/liked" component={User} />
      <Route exact path="/disliked" component={User} />
      <Route exact path="/populate" component={Forms} />
      <Route exact path="/populate/:id" component={Forms} />
      <Route exact path="/searchPosts" component={Searchposts} />
      <Redirect to="/" />
    </Switch>
  );
}

export default App;
