module.exports = app => {
    const role = require("../controllers/Role.controller.js");
    var router = require("express").Router();
  
    //新增
    router.post("/", role.create);

    //查找所有
    router.get("/", role.findAll);
  
    //根据id查询
    router.get("/:id", role.findOne);
  
    //修改
    router.put("/:id", role.update);
  
    //删除
    router.delete("/:id", role.delete);

    app.use('/api/Role', router);
  };