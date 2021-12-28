module.exports = app => {
    const danwei = require("../controllers/Danwei.controller.js");
  
    var router = require("express").Router();
  
    //新增
    router.post("/", danwei.create);
  
    //查找所有
    router.get("/", danwei.findAll);
  
    //根据id查询
    router.get("/:id", danwei.findOne);
  
    //修改
    router.put("/:id", danwei.update);
  
    //删除
    router.delete("/:id", danwei.delete);
  
    app.use('/api/Danwei', router);
  };