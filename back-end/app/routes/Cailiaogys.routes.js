module.exports = app => {
    const cailiaogys = require("../controllers/Cailiaogys.controller.js");
  
    var router = require("express").Router();
  
    //新增
    router.post("/", cailiaogys.create);
  
    //查找所有
    router.get("/", cailiaogys.findAll);
  
    //根据id查询
    router.get("/:id", cailiaogys.findOne);
  
    //根据id查询
    router.put("/:id", cailiaogys.update);
  
    //删除
    router.delete("/:id", cailiaogys.delete);
  
    app.use('/api/Cailiaogys', router);
  };