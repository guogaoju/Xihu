module.exports = app => {
    const bumen = require("../controllers/bumen.controller.js");
    var router = require("express").Router();
  
    //新增
    router.post("/", bumen.create);

    //查找所有
    router.get("/", bumen.findAll);
  
    //根据id查询
    router.get("/:id", bumen.findOne);
  
    //修改
    router.put("/:id", bumen.update);
  
    //删除
    router.delete("/:id", bumen.delete);

    app.use('/api/Bumen', router);
  };