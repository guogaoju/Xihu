module.exports = app => {
    const DanweiStatelog = require("../controllers/DanweiStatelog.controller.js");
  
    var router = require("express").Router();
  
    //新增
    router.post("/", DanweiStatelog.create);
  
    //查找所有
    router.get("/", DanweiStatelog.findAll);
  
    //根据id查询
    router.get("/:id", DanweiStatelog.findOne);
  
    //修改
    router.put("/:id", DanweiStatelog.update);
  
    //删除
    router.delete("/:id", DanweiStatelog.delete);
  
    app.use('/api/DanweiStatelog', router);
  };