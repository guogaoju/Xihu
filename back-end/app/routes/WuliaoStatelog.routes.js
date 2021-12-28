module.exports = app => {
    const WuliaoStatelog = require("../controllers/WuliaoStatelog.controller.js");
  
    var router = require("express").Router();
  
    //新增
    router.post("/", WuliaoStatelog.create);
  
    //查找所有
    router.get("/", WuliaoStatelog.findAll);
  
    //根据id查询
    router.get("/:id", WuliaoStatelog.findOne);
  
    //修改
    router.put("/:id", WuliaoStatelog.update);
  
    //删除
    router.delete("/:id", WuliaoStatelog.delete);
  
    app.use('/api/WuliaoStatelog', router);
  };