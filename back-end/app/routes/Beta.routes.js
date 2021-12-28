module.exports = app => {
    const beta = require("../controllers/Beta.controller.js");
  
    var router = require("express").Router();
  
    //新增
    router.post("/", beta.create);
  
    //查找所有
    router.get("/", beta.findAll);
  
    //根据id查询
    router.get("/:id", beta.findOne);
  
    //修改
    router.put("/:id", beta.update);
  
    //删除
    router.delete("/:id", beta.delete);
  
    app.use('/api/Beta', router);
  };