module.exports = app => {
    const xinyongA = require("../controllers/XinyongA.controller.js");
  
    var router = require("express").Router();
  
    //新增
    router.post("/", xinyongA.create);
  
    //查找所有
    router.get("/", xinyongA.findAll);
  
    //根据id查询
    router.get("/:id", xinyongA.findOne);
  
    //修改
    router.put("/:id", xinyongA.update);
  
    //删除
    router.delete("/:id", xinyongA.delete);
  
    app.use('/api/XinyongA', router);
  };