const express = require('express');

const app = express();

const posts = [
     {id: "sdkufylkj3r", title: 'First post', content: 'This is the first post'},
     {id: "sdku;lk;oe", title: 'Second post', content: 'This is the second post'},
     {id: "sdkuf.,m[popdf", title: 'Third post', content: 'This is the third post'}
];

app.use("/api/posts", (req, res, next) => {
  res.status(200)
     .json({
       message: "Posts fetched successfully",
       posts
      });
});

module.exports = app;
