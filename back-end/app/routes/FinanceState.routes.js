module.exports = app => {
    const FinanceState = require("../controllers/FinanceState.controller.js");
  
    var router = require("express").Router();
  
    //新增
    router.post("/", FinanceState.create);
  
    //查找所有
    router.get("/", FinanceState.findAll);

    //根据id查询
    router.get("/:id", FinanceState.findOne);
  
    //修改
    router.put("/:id", FinanceState.update);
  
    //删除
    router.delete("/:id", FinanceState.delete);
  
  
    app.use('/api/FinanceState', router);
  };