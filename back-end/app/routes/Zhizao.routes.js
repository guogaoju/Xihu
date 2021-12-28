module.exports = app => {
    const zhizao = require("../controllers/Zhizao.controller.js");
  
    var router = require("express").Router();
  
    //新增
    router.post("/", zhizao.create);
  
    //查找所有
    router.get("/", zhizao.findAll);

    //根据id查询
    router.get("/:id", zhizao.findOne);
  
    //修改
    router.put("/:id", zhizao.update);
  
    //删除
    router.delete("/:id", zhizao.delete);
  
    app.use('/api/Zhizao', router);
  };