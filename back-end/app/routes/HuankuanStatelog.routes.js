module.exports = app => {
    const HuankuanStatelog = require("../controllers/HuankuanStatelog.controller.js");
  
    var router = require("express").Router();
  
    //新增
    router.post("/", HuankuanStatelog.create);
  
    //查找所有
    router.get("/", HuankuanStatelog.findAll);
  
    //根据id查询
    router.get("/:id", HuankuanStatelog.findOne);
  
    //修改
    router.put("/:id", HuankuanStatelog.update);
  
    //删除
    router.delete("/:id", HuankuanStatelog.delete);
  
    app.use('/api/HuankuanStatelog', router);
  };