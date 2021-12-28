module.exports = app => {
    const qiyepingji = require("../controllers/Qiyepingji.controller.js");
  
    var router = require("express").Router();
  
    //新增
    router.post("/", qiyepingji.create);
  
    //查找所有
    router.get("/", qiyepingji.findAll);

    //根据id查询
    router.get("/:id", qiyepingji.findOne);
  
    //修改
    router.put("/:id", qiyepingji.update);
  
    //删除
    router.delete("/:id", qiyepingji.delete);
  
  
    app.use('/api/QiyePingji', router);
  };