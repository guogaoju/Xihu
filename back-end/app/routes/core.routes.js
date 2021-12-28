module.exports = app => {
    const hexin = require("../controllers/core.controller.js");
  
    var router = require("express").Router();
  
    //新增
    router.post("/", hexin.create);
  
    //查找所有
    router.get("/", hexin.findAll);
  
    //根据id查询
    router.get("/:id", hexin.findOne);
  
    //修改
    router.put("/:id", hexin.update);
  
    //删除
    router.delete("/:id", hexin.delete);
  
    // //删除所有
    // router.delete("/", hexin.deleteAll);
  
    app.use('/api/Hexin', router);
  };