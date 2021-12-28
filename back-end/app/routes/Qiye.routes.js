module.exports = app => {
    const qiye = require("../controllers/Qiye.controller.js");
  
    var router = require("express").Router();
  
    //新增
    router.post("/", qiye.create);
  
    //查找所有
    router.get("/", qiye.findAll);
  
    //根据id查询
    router.get("/:id", qiye.findOne);
  
    //修改
    router.put("/:id", qiye.update);

    //删除
    router.delete("/:id", qiye.delete);
  
    app.use('/api/Qiye', router);
  };