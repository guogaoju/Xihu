module.exports = app => {
    const KucunStatelog = require("../controllers/KucunStatelog.controller.js");
  
    var router = require("express").Router();
  
    //新增
    router.post("/", KucunStatelog.create);
  
    //查找所有
    router.get("/", KucunStatelog.findAll);
  
    //根据id查询
    router.get("/:id", KucunStatelog.findOne);
  
    //修改
    router.put("/:id", KucunStatelog.update);
  
    //删除
    router.delete("/:id", KucunStatelog.delete);
  
    app.use('/api/KucunStatelog', router);
  };