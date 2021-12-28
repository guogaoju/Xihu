const db = require("../models");
const HuankuanStatelog = db.HuankuanStatelog;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    // Validate request
    // if (!req.body.userid) {
    //   res.status(400).send({
    //     message: "Content can not be empty!"
    //   });
    //   return;
    // }
    //新建
    const HuankuanStatelogs = {
              userId:req.body.userId,
              huankuanId: req.body.huankuanId,
              oldstateid: req.body.oldstateid,
              newstateid:req.body.newstateid,
              operateId:req.body.operateId,
    };
    HuankuanStatelog.create(HuankuanStatelogs)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the HuankuanStatelog."
        });
      });
  };
  
  //新建
  exports.findAll = (req, res) => {
      const huankuanId = req.query.huankuanId;
      var condition = huankuanId ? { huankuanId: huankuanId}  : null;
    
      HuankuanStatelog.findAll({
        where:condition
    })
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving HuankuanStatelog."
          });
        });
  };
  
  //根据id查询
  exports.findOne = (req, res) => {
      const id = req.params.id;
      HuankuanStatelog.findByPk(id)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message: "Error retrieving Ruku with id=" + id
          });
        });
  };
  
  
  //修改
  exports.update = (req, res) => {
      const id = req.params.id;
      HuankuanStatelog.update(req.body, {
        where: { id: id }
      })
        .then(num => {
          if (num == 1) {
            res.send({
              message: "HuankuanStatelog was updated successfully."
            });
          } else {
            res.send({
              message: `Cannot update HuankuanStatelog with id=${id}. Maybe HuankuanStatelog was not found or req.body is empty!`
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Error updating HuankuanStatelog with id=" + id
          });
        });
  };
  
  //删除
  exports.delete = (req, res) => {
      const id = req.params.id;
      HuankuanStatelog.destroy({
        where: { id: id }
      })
        .then(num => {
          if (num == 1) {
            res.send({
              message: "HuankuanStatelog was deleted successfully!"
            });
          } else {
            res.send({
              message: `Cannot delete HuankuanStatelog with id=${id}. Maybe HuankuanStatelog was not found!`
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Could not delete HuankuanStatelog with id=" + id
          });
        });
  };
  