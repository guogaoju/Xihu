module.exports = app => {
    const FukuanState = require("../controllers/FukuanState.controller.js");
  
    var router = require("express").Router();
  
    //新增
    router.post("/", FukuanState.create);
  
    //查找所有
    router.get("/", FukuanState.findAll);

    //根据id查询
    router.get("/:id", FukuanState.findOne);
  
    //修改
    router.put("/:id", FukuanState.update);
  
    //删除
    router.delete("/:id", FukuanState.delete);
  
  
    app.use('/api/FukuanState', router);
  };