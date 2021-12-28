module.exports = app => {
    const fangwen = require("../controllers/Fangwen.controller.js");
  
    var router = require("express").Router();
  
    //新增
    router.post("/", fangwen.create);
  
    //查找所有
    router.get("/", fangwen.findAll);
  
    //根据id查询
    router.get("/:id", fangwen.findOne);
  
    //修改
    router.put("/:id", fangwen.update);
  
    //删除
    router.delete("/:id", fangwen.delete);
  
  
    app.use('/api/Fangwen', router);
  };