module.exports = app => {
    const JinduStatelog = require("../controllers/JinduStatelog.controller.js");
  
    var router = require("express").Router();
  
    //新增
    router.post("/", JinduStatelog.create);
  
    //查找所有
    router.get("/", JinduStatelog.findAll);
  
    //根据id查询
    router.get("/:id", JinduStatelog.findOne);
  
    //修改
    router.put("/:id", JinduStatelog.update);
  
    //删除
    router.delete("/:id", JinduStatelog.delete);
  
    app.use('/api/JinduStatelog', router);
  };