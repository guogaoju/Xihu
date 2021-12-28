module.exports = app => {
    const ruku = require("../controllers/Ruku.controller.js");
  
    var router = require("express").Router();
  
    //新增
    router.post("/", ruku.create);
  
    //查找所有
    router.get("/", ruku.findAll);
  
    //根据id查询
    router.get("/:id", ruku.findOne);
  
    //修改
    router.put("/:id", ruku.update);
  
    //删除
    router.delete("/:id", ruku.delete);
  
    app.use('/api/Ruku', router);
  };