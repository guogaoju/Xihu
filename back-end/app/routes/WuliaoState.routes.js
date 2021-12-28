module.exports = app => {
    const WuliaoState = require("../controllers/WuliaoState.controller.js");
  
    var router = require("express").Router();
  
    //新增
    router.post("/", WuliaoState.create);
  
    //查找所有
    router.get("/", WuliaoState.findAll);

    //根据id查询
    router.get("/:id", WuliaoState.findOne);
  
    //修改
    router.put("/:id", WuliaoState.update);
  
    //删除
    router.delete("/:id", WuliaoState.delete);
  
  
    app.use('/api/WuliaoState', router);
  };