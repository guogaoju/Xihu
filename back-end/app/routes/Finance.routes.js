module.exports = app => {
    const finance = require("../controllers/Finance.controller.js");
  
    var router = require("express").Router();
  
    //新增
    router.post("/", finance.create);
  
    //查找所有
    router.get("/", finance.findAll);
  
    //根据id查询
    router.get("/:id", finance.findOne);
  
    //修改
    router.put("/:id", finance.update);
  
    //删除
    router.delete("/:id", finance.delete);
  
    app.use('/api/Finance', router);
  };