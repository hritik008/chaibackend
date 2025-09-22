require("dotenv").config();
const express = require("express");
const app = express();
const port = 4000;

const githubdata = {
  login: "hritik008",
  id: 104013381,
  node_id: "U_kgDOBjMeRQ",
  avatar_url: "https://avatars.githubusercontent.com/u/104013381?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/hritik008",
  html_url: "https://github.com/hritik008",
  followers_url: "https://api.github.com/users/hritik008/followers",
  following_url:
    "https://api.github.com/users/hritik008/following{/other_user}",
  gists_url: "https://api.github.com/users/hritik008/gists{/gist_id}",
  starred_url: "https://api.github.com/users/hritik008/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/hritik008/subscriptions",
  organizations_url: "https://api.github.com/users/hritik008/orgs",
  repos_url: "https://api.github.com/users/hritik008/repos",
  events_url: "https://api.github.com/users/hritik008/events{/privacy}",
  received_events_url: "https://api.github.com/users/hritik008/received_events",
  type: "User",
  user_view_type: "public",
  site_admin: false,
  name: null,
  company: null,
  blog: "",
  location: null,
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 8,
  public_gists: 0,
  followers: 0,
  following: 0,
  created_at: "2022-04-19T14:09:37Z",
  updated_at: "2025-09-11T12:02:38Z",
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("hritikdotcom");
});

app.get("/login", (req, res) => {
  res.send("<h1>Please login at chai aur code</h1>");
});

app.get("/youtube", (req, res) => {
  res.send("<h2>Chai aur code</h2>");
});

app.get("/github", (req, res) => {
  res.json(githubdata);
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
