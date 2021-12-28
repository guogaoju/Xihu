module.exports = app => {
    const code = require("../controllers/Code.controller.js");
  
    var router = require("express").Router();
  
    //新增
    router.post("/", code.create);
  
    //查找所有
    router.get("/", code.findAll);

    //根据id查询
    router.get("/:id", code.findOne);
  
    //修改
    router.put("/:id", code.update);

    //删除
    router.delete("/:id", code.delete);
  
  
    app.use('/api/Code', router);
  };