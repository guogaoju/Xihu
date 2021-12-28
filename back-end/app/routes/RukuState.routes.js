module.exports = app => {
    const RukuState = require("../controllers/RukuState.controller.js");
  
    var router = require("express").Router();
  
    //新增
    router.post("/", RukuState.create);
  
    //查找所有
    router.get("/", RukuState.findAll);

    //根据id查询
    router.get("/:id", RukuState.findOne);
  
    //修改
    router.put("/:id", RukuState.update);
  
    //删除
    router.delete("/:id", RukuState.delete);
  
  
    app.use('/api/RukuState', router);
  };