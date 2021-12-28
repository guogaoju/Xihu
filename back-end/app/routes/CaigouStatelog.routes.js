module.exports = app => {
    const CaigouStatelog = require("../controllers/CaigouStatelog.controller.js");
  
    var router = require("express").Router();
  
    //新增
    router.post("/", CaigouStatelog.create);
  
    //查找所有
    router.get("/", CaigouStatelog.findAll);
  
    //根据id查询
    router.get("/:id", CaigouStatelog.findOne);
  
    //修改
    router.put("/:id", CaigouStatelog.update);
  
    //删除
    router.delete("/:id", CaigouStatelog.delete);
  
    app.use('/api/CaigouStatelog', router);
  };