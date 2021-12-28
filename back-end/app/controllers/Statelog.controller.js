const db = require("../models");
const Qiye = db.qiye;
const QiyeState = db.QiyeState;
const Statelog = db.Statelog;
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
    const Statelogs = {
              userId:req.body.userId,
              qiyeId: req.body.qiyeId,
              oldstateid: req.body.oldstateid,
              newstateid:req.body.newstateid,
              operateId:req.body.operateId,
    };
    Statelog.create(Statelogs)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Statelog."
        });
      });
  };
  
  //新建
  exports.findAll = (req, res) => {
      console.log(req.body)
      const qiyeId = req.query.qiyeId;
      var condition = qiyeId ? { qiyeId: qiyeId}  : null;
      Statelog.findAll({
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
      Statelog.findByPk(id)
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
      Statelog.update(req.body, {
        where: { id: id }
      })
        .then(num => {
          if (num == 1) {
            res.send({
              message: "Ruku was updated successfully."
            });
          } else {
            res.send({
              message: `Cannot update Ruku with id=${id}. Maybe Ruku was not found or req.body is empty!`
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Error updating Ruku with id=" + id
          });
        });
  };
  
  //删除
  exports.delete = (req, res) => {
      const id = req.params.id;
      Statelog.destroy({
        where: { id: id }
      })
        .then(num => {
          if (num == 1) {
            res.send({
              message: "Ruku was deleted successfully!"
            });
          } else {
            res.send({
              message: `Cannot delete Ruku with id=${id}. Maybe Ruku was not found!`
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Could not delete Ruku with id=" + id
          });
        });
  };
  