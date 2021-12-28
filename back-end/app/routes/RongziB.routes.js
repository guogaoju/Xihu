module.exports = app => {
    const rongziB = require("../controllers/RongziB.controller.js");
  
    var router = require("express").Router();
  
    //新增
    router.post("/", rongziB.create);
  
    //查找所有
    router.get("/", rongziB.findAll);
  
    //根据id查询
    router.get("/:id", rongziB.findOne);
  
    //修改
    router.put("/:id", rongziB.update);
  
    //删除
    router.delete("/:id", rongziB.delete);
  
    app.use('/api/RongziB', router);
  };