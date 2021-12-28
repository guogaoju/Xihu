module.exports = app => {
    const WuliaoTypeStatelog = require("../controllers/WuliaoTypeStatelog.controller.js");
  
    var router = require("express").Router();
  
    //新增
    router.post("/", WuliaoTypeStatelog.create);
  
    //查找所有
    router.get("/", WuliaoTypeStatelog.findAll);
  
    //根据id查询
    router.get("/:id", WuliaoTypeStatelog.findOne);
  
    //修改
    router.put("/:id", WuliaoTypeStatelog.update);
  
    //删除
    router.delete("/:id", WuliaoTypeStatelog.delete);
  
    app.use('/api/WuliaoTypeStatelog', router);
  };