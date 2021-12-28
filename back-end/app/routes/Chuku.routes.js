module.exports = app => {
    const chuku = require("../controllers/Chuku.controller.js");
  
    var router = require("express").Router();
  
    //新增
    router.post("/", chuku.create);
  
    //查找所有
    router.get("/", chuku.findAll);

    //根据id查询
    router.get("/:id", chuku.findOne);
  
    //修改
    router.put("/:id", chuku.update);

    //删除
    router.delete("/:id", chuku.delete);
  
  
    app.use('/api/Chuku', router);
  };