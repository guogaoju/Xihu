module.exports = app => {
    const FinanceStatelog = require("../controllers/FinanceStatelog.controller.js");
  
    var router = require("express").Router();
  
    //新增
    router.post("/", FinanceStatelog.create);
  
    //查找所有
    router.get("/", FinanceStatelog.findAll);
  
    //根据id查询
    router.get("/:id", FinanceStatelog.findOne);
  
    //修改
    router.put("/:id", FinanceStatelog.update);
  
    //删除
    router.delete("/:id", FinanceStatelog.delete);
  
    app.use('/api/FinanceStatelog', router);
  };