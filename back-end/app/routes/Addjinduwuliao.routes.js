module.exports = app => {
    const addjinduwuliao = require("../controllers/addjinduwuliao.controller.js");
  
    var router = require("express").Router();
  
    //新增
    router.post("/", addjinduwuliao.create);
  
    //查找所有
    router.get("/", addjinduwuliao.findAll);
  
    //根据id查询
    router.get("/:id", addjinduwuliao.findOne);
  
    app.use('/api/Addjinduwuliao', router);
  };