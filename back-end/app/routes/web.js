module.exports = app => {
// const express = require("express");
// const router = express.Router();
// const homeController = require("../controllers/home");
var router = require("express").Router();
const uploadController = require("../controllers/upload");
const upload = require("../middleware/upload");


//   router.get("/", homeController.getHome);
1
  // router.post("/upload", upload.single("file"), uploadController.uploadFiles);

  // app.use("/api/upload", router);
};