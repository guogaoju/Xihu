module.exports = app => {
    const HuankuanImage = require("../controllers/HuankuanImage.controller.js");
  
    var router = require("express").Router();
  
    //新增
    router.post("/", HuankuanImage.create);
  
    //查找所有
    router.get("/", HuankuanImage.findAll);
  
    //根据id查询
    router.get("/:id", HuankuanImage.findOne);

    //修改
    router.put("/:id", HuankuanImage.update);
  
    //删除
    router.delete("/:id", HuankuanImage.delete);
  
    app.use('/api/HuankuanImage', router);
  };