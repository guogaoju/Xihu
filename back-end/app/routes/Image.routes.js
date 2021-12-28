module.exports = app => {
    const Image = require("../controllers/Image.controller.js");
  
    var router = require("express").Router();
  
    //新增
    router.post("/", Image.create);
  
    //查找所有
    router.get("/", Image.findAll);
  
    //根据id查询
    router.get("/:id", Image.findOne);
    //sum加
    router.get("/img/:logid:name", Image.findimg);
    //修改
    router.put("/:id", Image.update);
  
    //删除
    router.delete("/:id", Image.delete);
  
    app.use('/api/Image', router);
  };