module.exports = app => {
    const alpha = require("../controllers/Alpha.controller.js");
  
    var router = require("express").Router();
  
    //新增
    router.post("/", alpha.create);
  
    //查找所有
    router.get("/", alpha.findAll);
  
    //根据id查询
    router.get("/:id", alpha.findOne);
  
    //修改
    router.put("/:id", alpha.update);
  
    //删除
    router.delete("/:id", alpha.delete);
  
    app.use('/api/Alpha', router);
  };