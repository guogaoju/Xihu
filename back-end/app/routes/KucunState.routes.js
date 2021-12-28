module.exports = app => {
    const KucunState = require("../controllers/KucunState.controller.js");
  
    var router = require("express").Router();
  
    //新增
    router.post("/", KucunState.create);
  
    //查找所有
    router.get("/", KucunState.findAll);

    //根据id查询
    router.get("/:id", KucunState.findOne);
  
    //修改
    router.put("/:id", KucunState.update);
  
    //删除
    router.delete("/:id", KucunState.delete);
  
  
    app.use('/api/KucunState', router);
  };