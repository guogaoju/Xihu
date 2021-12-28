module.exports = app => {
    const DanweiState = require("../controllers/DanweiState.controller.js");
  
    var router = require("express").Router();
  
    //新增
    router.post("/", DanweiState.create);
  
    //查找所有
    router.get("/", DanweiState.findAll);

    //根据id查询
    router.get("/:id", DanweiState.findOne);
  
    //修改
    router.put("/:id", DanweiState.update);
  
    //删除
    router.delete("/:id", DanweiState.delete);
  
  
    app.use('/api/DanweiState', router);
  };