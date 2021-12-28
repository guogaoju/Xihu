module.exports = app => {
    const corefirmState = require("../controllers/corefirmState.controller.js");
  
    var router = require("express").Router();
  
    //新增
    router.post("/", corefirmState.create);
  
    //查找所有
    router.get("/", corefirmState.findAll);

    //根据id查询
    router.get("/:id", corefirmState.findOne);
  
    //修改
    router.put("/:id", corefirmState.update);
  
    //删除
    router.delete("/:id", corefirmState.delete);
  
  
    app.use('/api/corefirmState', router);
  };