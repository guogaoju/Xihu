module.exports = app => {
    const jianzhu = require("../controllers/Jianzhu.controller.js");
  
    var router = require("express").Router();
  
    //新增
    router.post("/", jianzhu.create);
  
    //查找所有
    router.get("/", jianzhu.findAll);

    //根据id查询
    router.get("/:id", jianzhu.findOne);
  
    //修改
    router.put("/:id", jianzhu.update);
  
    //删除
    router.delete("/:id", jianzhu.delete);
  
    app.use('/api/Jianzhu', router);
  };