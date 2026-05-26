// This Is How We Create Server ...

require('dotenv').config()    // REQUIRE TO USE
const express = require('express');
const app = express();
const port = 5000;

const githubData = {

  "login": "talha0603",
  "id": 252909433,
  "node_id": "U_kgDODxMXeQ",
  "avatar_url": "https://avatars.githubusercontent.com/u/252909433?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/talha0603",
  "html_url": "https://github.com/talha0603",
  "followers_url": "https://api.github.com/users/talha0603/followers",
  "following_url": "https://api.github.com/users/talha0603/following{/other_user}",
  "gists_url": "https://api.github.com/users/talha0603/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/talha0603/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/talha0603/subscriptions",
  "organizations_url": "https://api.github.com/users/talha0603/orgs",
  "repos_url": "https://api.github.com/users/talha0603/repos",
  "events_url": "https://api.github.com/users/talha0603/events{/privacy}",
  "received_events_url": "https://api.github.com/users/talha0603/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "M Talha Makhdoom",
  "company": null,
  "blog": "",
  "location": "Pakistan",
  "email": null,
  "hireable": null,
  "bio": "Web developer turning ideas into interactive experiences | HTML, CSS & JS explorer",
  "twitter_username": null,
  "public_repos": 4,
  "public_gists": 0,
  "followers": 1,
  "following": 0,
  "created_at": "2026-01-04T16:23:06Z",
  "updated_at": "2026-05-05T19:19:07Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/Instagram', (req, res) => {
    res.send('rabby003')
})

app.get('/Login', (req, res) => {
    res.send('<h1>Login To Get Your Security Patches</h1>')
})

app.get('/github', (req, res) => {
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});