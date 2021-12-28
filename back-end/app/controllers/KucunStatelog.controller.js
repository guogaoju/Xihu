const db = require("../models");
const KucunStatelog = db.KucunStatelog;
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
    const KucunStatelogs = {
              userId:req.body.userId,
              kucunId: req.body.kucunId,
              oldstateid: req.body.oldstateid,
              newstateid:req.body.newstateid,
              operateId:req.body.operateId,
    };
    KucunStatelog.create(KucunStatelogs)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the KucunStatelog."
        });
      });
  };
  
  //新建
  exports.findAll = (req, res) => {
      const kucunId = req.query.kucunId;
      var condition = kucunId ? { kucunId: kucunId}  : null;
    
      KucunStatelog.findAll({
        where:condition
    })
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving KucunStatelog."
          });
        });
  };
  
  //根据id查询
  exports.findOne = (req, res) => {
      const id = req.params.id;
      KucunStatelog.findByPk(id)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message: "Error retrieving KucunStatelog with id=" + id
          });
        });
  };
  
  
  //修改
  exports.update = (req, res) => {
      const id = req.params.id;
      KucunStatelog.update(req.body, {
        where: { id: id }
      })
        .then(num => {
          if (num == 1) {
            res.send({
              message: "KucunStatelog was updated successfully."
            });
          } else {
            res.send({
              message: `Cannot update KucunStatelog with id=${id}. Maybe KucunStatelog was not found or req.body is empty!`
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Error updating KucunStatelog with id=" + id
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
              message: "KucunStatelog was deleted successfully!"
            });
          } else {
            res.send({
              message: `Cannot delete KucunStatelog with id=${id}. Maybe KucunStatelog was not found!`
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Could not delete KucunStatelog with id=" + id
          });
        });
  };
  