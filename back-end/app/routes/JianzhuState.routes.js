module.exports = app => {
    const JianzhuState = require("../controllers/JianzhuState.controller.js");
  
    var router = require("express").Router();
  
    //新增
    router.post("/", JianzhuState.create);
  
    //查找所有
    router.get("/", JianzhuState.findAll);

    //根据id查询
    router.get("/:id", JianzhuState.findOne);
  
    //修改
    router.put("/:id", JianzhuState.update);
  
    //删除
    router.delete("/:id", JianzhuState.delete);
  
  
    app.use('/api/JianzhuState', router);
  };