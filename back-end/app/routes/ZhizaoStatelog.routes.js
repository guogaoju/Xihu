module.exports = app => {
    const ZhizaoStatelog = require("../controllers/ZhizaoStatelog.controller.js");
  
    var router = require("express").Router();
  
    //新增
    router.post("/", ZhizaoStatelog.create);
  
    //查找所有
    router.get("/", ZhizaoStatelog.findAll);
  
    //根据id查询
    router.get("/:id", ZhizaoStatelog.findOne);
  
    //修改
    router.put("/:id", ZhizaoStatelog.update);
  
    //删除
    router.delete("/:id", ZhizaoStatelog.delete);
  
    app.use('/api/ZhizaoStatelog', router);
  };