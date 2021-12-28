module.exports = app => {
    const PingjiState = require("../controllers/PingjiState.controller.js");
  
    var router = require("express").Router();
  
    //新增
    router.post("/", PingjiState.create);
  
    //查找所有
    router.get("/", PingjiState.findAll);

    //根据id查询
    router.get("/:id", PingjiState.findOne);
  
    //修改
    router.put("/:id", PingjiState.update);
  
    //删除
    router.delete("/:id", PingjiState.delete);
  
  
    app.use('/api/PingjiState', router);
  };