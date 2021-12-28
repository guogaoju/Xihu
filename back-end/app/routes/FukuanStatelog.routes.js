module.exports = app => {
    const FukuanStatelog = require("../controllers/FukuanStatelog.controller.js");
  
    var router = require("express").Router();
  
    //新增
    router.post("/", FukuanStatelog.create);
  
    //查找所有
    router.get("/", FukuanStatelog.findAll);
  
    //根据id查询
    router.get("/:id", FukuanStatelog.findOne);
  
    //修改
    router.put("/:id", FukuanStatelog.update);
  
    //删除
    router.delete("/:id", FukuanStatelog.delete);
  
    app.use('/api/FukuanStatelog', router);
  };