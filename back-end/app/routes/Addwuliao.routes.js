module.exports = app => {
    const addwuliao = require("../controllers/addWuliao.controller.js");
  
    var router = require("express").Router();
  
    //新增
    router.post("/", addwuliao.create);
  
    //查找所有
    router.get("/", addwuliao.findAll);
  
    //根据id查询
    router.get("/:id", addwuliao.findOne);
  
    app.use('/api/Addwuliao', router);
  };