module.exports = app => {
    const pingji = require("../controllers/Pingji.controller.js");
  
    var router = require("express").Router();
  
    //新增
    router.post("/", pingji.create);
  
    //查找所有
    router.get("/", pingji.findAll);
  
    //根据id查询
    router.get("/:id", pingji.findOne);
  
    //修改
    router.put("/:id", pingji.update);

    //删除
    router.delete("/:id", pingji.delete);
  
    app.use('/api/Pingji', router);
  };