module.exports = app => {
    const kucun = require("../controllers/Kucun.controller.js");
  
    var router = require("express").Router();
  
    //新增
    router.post("/", kucun.create);
  
    //查找所有
    router.get("/", kucun.findAll);
  
    //根据id查询
    router.get("/:id", kucun.findOne);

    //修改
    router.put("/:id", kucun.update);
  
    //删除
    router.delete("/:id", kucun.delete);
  
    app.use('/api/Kucun', router);
  };