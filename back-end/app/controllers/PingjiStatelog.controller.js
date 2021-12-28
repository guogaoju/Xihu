const db = require("../models");
const PingjiStatelog = db.PingjiStatelog;
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
    const PingjiStatelogs = {
              userId:req.body.userId,
              pingjiId: req.body.pingjiId,
              oldstateid: req.body.oldstateid,
              newstateid:req.body.newstateid,
              operateId:req.body.operateId,
    };
    PingjiStatelog.create(PingjiStatelogs)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the PingjiStatelog."
        });
      });
  };
  
  //新建
  exports.findAll = (req, res) => {
      const pingjiId = req.query.pingjiId;
      var condition = pingjiId ? { pingjiId: pingjiId}  : null;
    
      PingjiStatelog.findAll({
        where:condition
    })
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving Statelog."
          });
        });
  };
  
  //根据id查询
  exports.findOne = (req, res) => {
      const id = req.params.id;
      PingjiStatelog.findByPk(id)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message: "Error retrieving PingjiStatelog with id=" + id
          });
        });
  };
  
  
  //修改
  exports.update = (req, res) => {
      const id = req.params.id;
      PingjiStatelog.update(req.body, {
        where: { id: id }
      })
        .then(num => {
          if (num == 1) {
            res.send({
              message: "PingjiStatelog was updated successfully."
            });
          } else {
            res.send({
              message: `Cannot update PingjiStatelog with id=${id}. Maybe PingjiStatelog was not found or req.body is empty!`
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Error updating PingjiStatelog with id=" + id
          });
        });
  };
  
  //删除
  exports.delete = (req, res) => {
      const id = req.params.id;
      PingjiStatelog.destroy({
        where: { id: id }
      })
        .then(num => {
          if (num == 1) {
            res.send({
              message: "PingjiStatelog was deleted successfully!"
            });
          } else {
            res.send({
              message: `Cannot delete PingjiStatelog with id=${id}. Maybe PingjiStatelog was not found!`
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Could not delete PingjiStatelog with id=" + id
          });
        });
  };
  