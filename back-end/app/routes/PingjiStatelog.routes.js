module.exports = app => {
    const PingjiStatelog = require("../controllers/PingjiStatelog.controller.js");
  
    var router = require("express").Router();
  
    //新增
    router.post("/", PingjiStatelog.create);
  
    //查找所有
    router.get("/", PingjiStatelog.findAll);
  
    //根据id查询
    router.get("/:id", PingjiStatelog.findOne);
  
    //修改
    router.put("/:id", PingjiStatelog.update);
  
    //删除
    router.delete("/:id", PingjiStatelog.delete);
  
    app.use('/api/PingjiStatelog', router);
  };