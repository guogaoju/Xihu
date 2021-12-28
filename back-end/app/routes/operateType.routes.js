module.exports = app => {
    const operate = require("../controllers/operateType.controller.js");
  
    var router = require("express").Router();
  
    //新增
    router.post("/", operate.create);
  
    //查找所有
    router.get("/", operate.findAll);
  
    //根据id查询
    router.get("/:id", operate.findOne);

    //修改
    router.put("/:id", operate.update);
  
    //删除
    router.delete("/:id", operate.delete);
  
    app.use('/api/operate', router);
  };