module.exports = app => {
    const caigouwuliao = require("../controllers/CaiGouwuliao.controller.js");
  
    var router = require("express").Router();
  
    //新增
    router.post("/", caigouwuliao.create);
  
    //查找所有
    router.get("/", caigouwuliao.findAll);
  
    //根据id查询
    router.get("/:id", caigouwuliao.findOne);
  
    app.use('/api/CaiGouwuliao', router);
  };