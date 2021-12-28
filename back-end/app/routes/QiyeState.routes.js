module.exports = app => {
    const QiyeState = require("../controllers/QiyeState.controller.js");
  
    var router = require("express").Router();
  
    //新增
    router.post("/", QiyeState.create);
  
    //查找所有
    router.get("/", QiyeState.findAll);

    //根据id查询
    router.get("/:id", QiyeState.findOne);
  
    //修改
    router.put("/:id", QiyeState.update);
  
    //删除
    router.delete("/:id", QiyeState.delete);
  
  
    app.use('/api/QiyeState', router);
  };