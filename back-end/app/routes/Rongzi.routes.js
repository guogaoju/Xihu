module.exports = app => {
    const Rongzi = require("../controllers/Rongzi.controller.js");
  
    var router = require("express").Router();
  
    //新增
    router.post("/", Rongzi.create);
  
    //查找所有
    router.get("/", Rongzi.findAll);

    //根据id查询
    router.get("/:id", Rongzi.findOne);
  
    //修改
    router.put("/:id", Rongzi.update);
  
    //删除
    router.delete("/:id", Rongzi.delete);
  
    app.use('/api/Rongzi', router);
  };