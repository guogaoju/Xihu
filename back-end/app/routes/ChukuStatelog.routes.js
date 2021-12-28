module.exports = app => {
    const ChukuStatelog = require("../controllers/ChukuStatelog.controller.js");
  
    var router = require("express").Router();
  
    //新增
    router.post("/", ChukuStatelog.create);
  
    //查找所有
    router.get("/", ChukuStatelog.findAll);
  
    //根据id查询
    router.get("/:id", ChukuStatelog.findOne);
  
    //修改
    router.put("/:id", ChukuStatelog.update);
  
    //删除
    router.delete("/:id", ChukuStatelog.delete);
  
    app.use('/api/ChukuStatelog', router);
  };