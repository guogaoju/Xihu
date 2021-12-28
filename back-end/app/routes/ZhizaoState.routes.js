module.exports = app => {
    const ZhizaoState = require("../controllers/ZhizaoState.controller.js");
  
    var router = require("express").Router();
  
    //新增
    router.post("/", ZhizaoState.create);
  
    //查找所有
    router.get("/", ZhizaoState.findAll);

    //根据id查询
    router.get("/:id", ZhizaoState.findOne);
  
    //修改
    router.put("/:id", ZhizaoState.update);
  
    //删除
    router.delete("/:id", ZhizaoState.delete);
  
  
    app.use('/api/ZhizaoState', router);
  };