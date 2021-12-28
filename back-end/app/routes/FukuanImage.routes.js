module.exports = app => {
    const FukuanImage = require("../controllers/FukuanImage.controller.js");
  
    var router = require("express").Router();
  
    //新增
    router.post("/", FukuanImage.create);
  
    //查找所有
    router.get("/", FukuanImage.findAll);
  
    //根据id查询
    router.get("/:id", FukuanImage.findOne);

    //修改
    router.put("/:id", FukuanImage.update);
  
    //删除
    router.delete("/:id", FukuanImage.delete);
  
    app.use('/api/FukuanImage', router);
  };