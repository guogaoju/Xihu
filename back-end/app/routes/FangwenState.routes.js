module.exports = app => {
    const FangwenState = require("../controllers/FangwenState.controller.js");
  
    var router = require("express").Router();
  
    //新增
    router.post("/", FangwenState.create);
  
    //查找所有
    router.get("/", FangwenState.findAll);

    //根据id查询
    router.get("/:id", FangwenState.findOne);
  
    //修改
    router.put("/:id", FangwenState.update);
  
    //删除
    router.delete("/:id", FangwenState.delete);
  
  
    app.use('/api/FangwenState', router);
  };