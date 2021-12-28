module.exports = app => {
    const dange = require("../controllers/Dange.controller.js");
  
    var router = require("express").Router();
  
    //新增
    router.post("/", dange.create);
  
    //查找所有
    router.get("/", dange.findAll);
  
    //根据id查询
    router.get("/:id", dange.findOne);
  
    //修改
    router.put("/:id", dange.update);
  
    //删除
    router.delete("/:id", dange.delete);
  
    app.use('/api/Dange', router);
  };