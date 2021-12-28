module.exports = app => {
    const corefirmStatelog = require("../controllers/corefirmStatelog.controller.js");
  
    var router = require("express").Router();
  
    //新增
    router.post("/", corefirmStatelog.create);
  
    //查找所有
    router.get("/", corefirmStatelog.findAll);
  
    //根据id查询
    router.get("/:id", corefirmStatelog.findOne);
  
    //修改
    router.put("/:id", corefirmStatelog.update);
  
    //删除
    router.delete("/:id", corefirmStatelog.delete);
  
    app.use('/api/corefirmStatelog', router);
  };