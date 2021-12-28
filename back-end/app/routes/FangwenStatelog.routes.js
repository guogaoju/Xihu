module.exports = app => {
    const FangwenStatelog = require("../controllers/FangwenStatelog.controller.js");
  
    var router = require("express").Router();
  
    //新增
    router.post("/", FangwenStatelog.create);
  
    //查找所有
    router.get("/", FangwenStatelog.findAll);
  
    //根据id查询
    router.get("/:id", FangwenStatelog.findOne);
  
    //修改
    router.put("/:id", FangwenStatelog.update);
  
    //删除
    router.delete("/:id", FangwenStatelog.delete);
  
    app.use('/api/FangwenStatelog', router);
  };