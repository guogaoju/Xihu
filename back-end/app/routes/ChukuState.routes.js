module.exports = app => {
    const ChukuState = require("../controllers/ChukuState.controller.js");
  
    var router = require("express").Router();
  
    //新增
    router.post("/", ChukuState.create);
  
    //查找所有
    router.get("/", ChukuState.findAll);

    //根据id查询
    router.get("/:id", ChukuState.findOne);
  
    //修改
    router.put("/:id", ChukuState.update);
  
    //删除
    router.delete("/:id", ChukuState.delete);
  
  
    app.use('/api/ChukuState', router);
  };