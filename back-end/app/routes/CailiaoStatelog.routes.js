module.exports = app => {
    const CailiaoStatelog = require("../controllers/CailiaoStatelog.controller.js");
  
    var router = require("express").Router();
  
    //新增
    router.post("/", CailiaoStatelog.create);
  
    //查找所有
    router.get("/", CailiaoStatelog.findAll);
  
    //根据id查询
    router.get("/:id", CailiaoStatelog.findOne);
  
    //修改
    router.put("/:id", CailiaoStatelog.update);
  
    //删除
    router.delete("/:id", CailiaoStatelog.delete);
  
    app.use('/api/CailiaoStatelog', router);
  };