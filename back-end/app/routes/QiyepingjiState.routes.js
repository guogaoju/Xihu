module.exports = app => {
    const QiyepingjiState = require("../controllers/QiyepingjiState.controller.js");
  
    var router = require("express").Router();
  
    //新增
    router.post("/", QiyepingjiState.create);
  
    //查找所有
    router.get("/", QiyepingjiState.findAll);

    //根据id查询
    router.get("/:id", QiyepingjiState.findOne);
  
    //修改
    router.put("/:id", QiyepingjiState.update);
  
    //删除
    router.delete("/:id", QiyepingjiState.delete);
  
  
    app.use('/api/QiyepingjiState', router);
  };