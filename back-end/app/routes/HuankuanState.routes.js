module.exports = app => {
    const HuankuanState = require("../controllers/HuankuanState.controller.js");
  
    var router = require("express").Router();
  
    //新增
    router.post("/", HuankuanState.create);
  
    //查找所有
    router.get("/", HuankuanState.findAll);

    //根据id查询
    router.get("/:id", HuankuanState.findOne);
  
    //修改
    router.put("/:id", HuankuanState.update);
  
    //删除
    router.delete("/:id", HuankuanState.delete);
  
  
    app.use('/api/HuankuanState', router);
  };