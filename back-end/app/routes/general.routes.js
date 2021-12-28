module.exports = app => {
    var router = require("express").Router();
    var fs = require('fs');

    //删除
    router.delete("/deletefile",function (req, res) {
          if (!req.body.filename) {
              console.log("No file received");
              message = "Error! in image delete.";
              return res.status(500).json('error in delete');
            } else {
              var filename = req.body.filename.split("/").pop();
              try {
                  fs.unlinkSync(__basedir + "/resources/static/assets/uploads/"+filename);
                  console.log(filename + ' has been deleted successfully deleted');
                  return res.status(200).send('Successfully! Image has been Deleted');
                } catch (err) {
                  // handle the error
                  return res.status(400).send(err);
                }
              
            }
      
      });
  
    app.use('/api/general', router);
  };