module.exports = app => {
    const Fukuanwuliao = require("../controllers/Fukuanwuliao.controller.js");
  
    var router = require("express").Router();
  
    //新增
    router.post("/", Fukuanwuliao.create);
  
    //查找所有
    router.get("/", Fukuanwuliao.findAll);

    //根据id查询
    router.get("/:id", Fukuanwuliao.findOne);
  
    //修改
    router.put("/:id", Fukuanwuliao.update);
  
    //删除
    router.delete("/:id", Fukuanwuliao.delete);
  
    app.use('/api/Fukuanwuliao', router);
  };