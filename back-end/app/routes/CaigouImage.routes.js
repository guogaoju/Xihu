module.exports = app => {
    const CaigouImage = require("../controllers/CaigouImage.controller.js");
  
    var router = require("express").Router();
  
    //新增
    router.post("/", CaigouImage.create);
  
    //查找所有
    router.get("/", CaigouImage.findAll);
  
    //根据id查询
    router.get("/:id", CaigouImage.findOne);

    //修改
    router.put("/:id", CaigouImage.update);
  
    //删除
    router.delete("/:id", CaigouImage.delete);
  
    app.use('/api/CaigouImage', router);
  };