module.exports = app => {
    const Statelog = require("../controllers/Statelog.controller.js");
  
    var router = require("express").Router();
  
    //新增
    router.post("/", Statelog.create);
  
    //查找所有
    router.get("/", Statelog.findAll);
  
    //根据id查询
    router.get("/:id", Statelog.findOne);
  
    //修改
    router.put("/:id", Statelog.update);
  
    //删除
    router.delete("/:id", Statelog.delete);
  
    app.use('/api/Statelog', router);
  };