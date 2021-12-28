module.exports = app => {
    const caigou = require("../controllers/Caigou.controller.js");
    const upload = require("../middleware/upload");
    //const uploads = require("../middleware/upload2");
    var router = require("express").Router();
  
    //新增
    router.post("/", caigou.create);

     //上传图片后向前端返回文件路径，前端收到这个路径以后和别的表单数据一起提交
     router.post("/upload", upload.single("file"), (req,res) => {
      // 需要返回图片的访问地址    域名+文件名
      const url = "http://localhost:8080/" +req.file.filename
       //服务器
      // const url = "http://106.15.5.29:8082/" +req.file.filename
      res.json({url})
    });

    //查找所有
    router.get("/", caigou.findAll);
  
    //根据id查询
    router.get("/:id", caigou.findOne);
  
    //修改
    router.put("/:id", caigou.update);
  
    //删除
    router.delete("/:id", caigou.delete);

    app.use('/api/Caigou', router);
  };