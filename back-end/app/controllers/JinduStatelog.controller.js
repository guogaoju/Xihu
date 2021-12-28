const db = require("../models");
const JinduStatelog = db.JinduStatelog;
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
    const JinduStatelogs = {
              userId:req.body.userId,
              jinduId: req.body.jinduId,
              oldstateid: req.body.oldstateid,
              newstateid:req.body.newstateid,
              operateId:req.body.operateId,
    };
    JinduStatelog.create(JinduStatelogs)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the JinduStatelog."
        });
      });
  };
  
  //新建
  exports.findAll = (req, res) => {
      const jinduId = req.query.jinduId;
      var condition = jinduId ? { jinduId: jinduId}  : null;
    
      JinduStatelog.findAll({
        where:condition
    })
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving JinduStatelog."
          });
        });
  };
  
  //根据id查询
  exports.findOne = (req, res) => {
      const id = req.params.id;
      JinduStatelog.findByPk(id)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message: "Error retrieving JinduStatelog with id=" + id
          });
        });
  };
  
  
  //修改
  exports.update = (req, res) => {
      const id = req.params.id;
      JinduStatelog.update(req.body, {
        where: { id: id }
      })
        .then(num => {
          if (num == 1) {
            res.send({
              message: "JinduStatelog was updated successfully."
            });
          } else {
            res.send({
              message: `Cannot update JinduStatelog with id=${id}. Maybe JinduStatelog was not found or req.body is empty!`
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Error updating JinduStatelog with id=" + id
          });
        });
  };
  
  //删除
  exports.delete = (req, res) => {
      const id = req.params.id;
      JinduStatelog.destroy({
        where: { id: id }
      })
        .then(num => {
          if (num == 1) {
            res.send({
              message: "JinduStatelog was deleted successfully!"
            });
          } else {
            res.send({
              message: `Cannot delete JinduStatelog with id=${id}. Maybe JinduStatelog was not found!`
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Could not delete JinduStatelog with id=" + id
          });
        });
  };
  