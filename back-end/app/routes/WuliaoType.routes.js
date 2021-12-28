module.exports = app => {
    const wuliaotype = require("../controllers/WuliaoType.controller.js");
  
    var router = require("express").Router();
  
    //新增
    router.post("/", wuliaotype.create);
  
    //查找所有
    router.get("/", wuliaotype.findAll);
  
    //根据id查询
    router.get("/:id", wuliaotype.findOne);
  
    //修改
    router.put("/:id", wuliaotype.update);
  
    //删除
    router.delete("/:id", wuliaotype.delete);
  
    app.use('/api/WuliaoType', router);
  };