const {
  getUser,
  getUserImage,
  editUserAbout,
  getDrills,
  editUserImg
} = require("./controllers/userCtrl");
const { getLesson, getQuiz, getImages } = require("./controllers/lessonCtrl");
const {
  makePost,
  getAllPosts,
  getPost,
  makeComment,
  getAllComments
} = require("./controllers/forumCtrl");

const express = require("express");

module.exports = app => {
  //user
  app.post("/api/user/favorites");
  app.get("/api/drills", getDrills);
  app.get("/api/user", getUser);
  app.get("/api/userImage", getUserImage);
  app.get("/api/user/all");
  app.get("/api/completed/:user_id");
  app.put("/api/user/:user_id", editUserAbout);
  app.put("/api/user/img/:user_id", editUserImg);
  app.put("/api/completed_counter");
  app.put("/api/drill_counter");

  //lessons
  app.post("/api/lesson"); //create new lesson, return lesson id
  app.post("/api/completed/:lesson_id"); //to create a new row in completed_lessons
  app.post("/api/image/:lesson_id");
  app.delete("/api/lesson/:lesson_id");
  app.put("/api/completed/:lesson_id");
  app.put("/api/lesson/:lesson_id");
  app.put("/api/image/:lesson_id");
  app.get("/api/lesson/all");
  app.get("/api/lesson/:lesson_id", getLesson);
  app.get("/api/lesson/:user_id");
  app.get("/api/images", getImages);

  //quiz
  app.get("/api/quiz/:lesson_id", getQuiz);

  //forum
  app.post("/api/post", makePost);
  app.get("/api/posts/all", getAllPosts);
  app.get("/api/post/:id", getPost);
  app.post("/api/comment", makeComment);
  app.get("/api/comments/all/:post_id", getAllComments);

  //rating
  app.put("/api/rating/:lesson_id");
  app.get("/api/rating/:lesson_id");
};
