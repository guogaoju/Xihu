module.exports = app => {
    const QiyepingjiStatelog = require("../controllers/QiyepingjiStatelog.controller.js");
  
    var router = require("express").Router();
  
    //新增
    router.post("/", QiyepingjiStatelog.create);
  
    //查找所有
    router.get("/", QiyepingjiStatelog.findAll);
  
    //根据id查询
    router.get("/:id", QiyepingjiStatelog.findOne);
  
    //修改
    router.put("/:id", QiyepingjiStatelog.update);
  
    //删除
    router.delete("/:id", QiyepingjiStatelog.delete);
  
    app.use('/api/QiyepingjiStatelog', router);
  };