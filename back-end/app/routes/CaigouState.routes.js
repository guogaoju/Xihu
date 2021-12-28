module.exports = app => {
    const CaigouState = require("../controllers/CaigouState.controller.js");
  
    var router = require("express").Router();
  
    //新增
    router.post("/", CaigouState.create);
  
    //查找所有
    router.get("/", CaigouState.findAll);

    //根据id查询
    router.get("/:id", CaigouState.findOne);
  
    //修改
    router.put("/:id", CaigouState.update);
  
    //删除
    router.delete("/:id", CaigouState.delete);
  
  
    app.use('/api/CaigouState', router);
  };