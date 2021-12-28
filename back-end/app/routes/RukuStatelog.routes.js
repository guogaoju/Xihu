module.exports = app => {
    const RukuStatelog = require("../controllers/RukuStatelog.controller.js");
  
    var router = require("express").Router();
  
    //新增
    router.post("/", RukuStatelog.create);
  
    //查找所有
    router.get("/", RukuStatelog.findAll);
  
    //根据id查询
    router.get("/:id", RukuStatelog.findOne);
  
    //修改
    router.put("/:id", RukuStatelog.update);
  
    //删除
    router.delete("/:id", RukuStatelog.delete);
  
    app.use('/api/RukuStatelog', router);
  };