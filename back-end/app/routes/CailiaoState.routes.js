module.exports = app => {
    const CailiaoState = require("../controllers/CailiaoState.controller.js");
  
    var router = require("express").Router();
  
    //新增
    router.post("/", CailiaoState.create);
  
    //查找所有
    router.get("/", CailiaoState.findAll);

    //根据id查询
    router.get("/:id", CailiaoState.findOne);
  
    //修改
    router.put("/:id", CailiaoState.update);
  
    //删除
    router.delete("/:id", CailiaoState.delete);
  
  
    app.use('/api/CailiaoState', router);
  };