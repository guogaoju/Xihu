module.exports = app => {
    const JinduState = require("../controllers/JinduState.controller.js");
  
    var router = require("express").Router();
  
    //新增
    router.post("/", JinduState.create);
  
    //查找所有
    router.get("/", JinduState.findAll);

    //根据id查询
    router.get("/:id", JinduState.findOne);
  
    //修改
    router.put("/:id", JinduState.update);
  
    //删除
    router.delete("/:id", JinduState.delete);
  
  
    app.use('/api/JinduState', router);
  };