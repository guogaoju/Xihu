module.exports = app => {
    const dept = require("../controllers/dept.controller.js");
    var router = require("express").Router();
  
    //新增
    router.post("/", dept.create);

    //查找所有
    router.get("/", dept.findAll);
  
    //根据id查询
    router.get("/:id", dept.findOne);
  
    //修改
    router.put("/:id", dept.update);
  
    //删除
    router.delete("/:id", dept.delete);

    app.use('/api/Dept', router);
  };