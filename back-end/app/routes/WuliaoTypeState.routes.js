module.exports = app => {
    const WuliaoTypeState = require("../controllers/WuliaoTypeState.controller.js");
  
    var router = require("express").Router();
  
    //新增
    router.post("/", WuliaoTypeState.create);
  
    //查找所有
    router.get("/", WuliaoTypeState.findAll);

    //根据id查询
    router.get("/:id", WuliaoTypeState.findOne);
  
    //修改
    router.put("/:id", WuliaoTypeState.update);
  
    //删除
    router.delete("/:id", WuliaoTypeState.delete);
  
  
    app.use('/api/WuliaoTypeState', router);
  };