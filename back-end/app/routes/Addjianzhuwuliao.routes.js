module.exports = app => {
    const Addjianzhuwuliao = require("../controllers/addjianzhuwuliao.controller.js");
  
    var router = require("express").Router();
  
    //新增
    router.post("/", Addjianzhuwuliao.create);
  
    //查找所有
    router.get("/", Addjianzhuwuliao.findAll);
  
    //根据id查询
    router.get("/:id", Addjianzhuwuliao.findOne);
  
    app.use('/api/Addjianzhuwuliao', router);
  };