module.exports = app => {
    const JianzhuStatelog = require("../controllers/JianzhuStatelog.controller.js");
  
    var router = require("express").Router();
  
    //新增
    router.post("/", JianzhuStatelog.create);
  
    //查找所有
    router.get("/", JianzhuStatelog.findAll);
  
    //根据id查询
    router.get("/:id", JianzhuStatelog.findOne);
  
    //修改
    router.put("/:id", JianzhuStatelog.update);
  
    //删除
    router.delete("/:id", JianzhuStatelog.delete);
  
    app.use('/api/JianzhuStatelog', router);
  };