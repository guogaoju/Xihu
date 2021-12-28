const db = require("../models");
const JianzhuStatelog = db.JianzhuStatelog;
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
    const JianzhuStatelogs = {
              userId:req.body.userId,
              jianzhuId: req.body.jianzhuId,
              oldstateid: req.body.oldstateid,
              newstateid:req.body.newstateid,
              operateId:req.body.operateId,
    };
    JianzhuStatelog.create(JianzhuStatelogs)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the JianzhuStatelog."
        });
      });
  };
  
  //新建
  exports.findAll = (req, res) => {
      const jianzhuId = req.query.jianzhuId;
      var condition = jianzhuId ? { jianzhuId: jianzhuId}  : null;
    
      JianzhuStatelog.findAll({
        where:condition
    })
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving JianzhuStatelog."
          });
        });
  };
  
  //根据id查询
  exports.findOne = (req, res) => {
      const id = req.params.id;
      JianzhuStatelog.findByPk(id)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message: "Error retrieving JianzhuStatelog with id=" + id
          });
        });
  };
  
  
  //修改
  exports.update = (req, res) => {
      const id = req.params.id;
      JianzhuStatelog.update(req.body, {
        where: { id: id }
      })
        .then(num => {
          if (num == 1) {
            res.send({
              message: "JianzhuStatelog was updated successfully."
            });
          } else {
            res.send({
              message: `Cannot update JianzhuStatelog with id=${id}. Maybe JianzhuStatelog was not found or req.body is empty!`
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Error updating JianzhuStatelog with id=" + id
          });
        });
  };
  
  //删除
  exports.delete = (req, res) => {
      const id = req.params.id;
      JianzhuStatelog.destroy({
        where: { id: id }
      })
        .then(num => {
          if (num == 1) {
            res.send({
              message: "JianzhuStatelog was deleted successfully!"
            });
          } else {
            res.send({
              message: `Cannot delete JianzhuStatelog with id=${id}. Maybe JianzhuStatelog was not found!`
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Could not delete JianzhuStatelog with id=" + id
          });
        });
  };
  