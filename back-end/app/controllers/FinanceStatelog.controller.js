const db = require("../models");
const FinanceStatelog = db.FinanceStatelog;
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
    const FinanceStatelogs = {
              userId:req.body.userId,
              financeId: req.body.financeId,
              oldstateid: req.body.oldstateid,
              newstateid:req.body.newstateid,
              operateId:req.body.operateId,
    };
    FinanceStatelog.create(FinanceStatelogs)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the FinanceStatelog."
        });
      });
  };
  
  //新建
  exports.findAll = (req, res) => {
      const financeId = req.query.financeId;
      var condition = financeId ? { financeId: financeId}  : null;
    
      FinanceStatelog.findAll({
        where:condition
    })
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving FinanceStatelog."
          });
        });
  };
  
  //根据id查询
  exports.findOne = (req, res) => {
      const id = req.params.id;
      FinanceStatelog.findByPk(id)
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
      FinanceStatelog.update(req.body, {
        where: { id: id }
      })
        .then(num => {
          if (num == 1) {
            res.send({
              message: "FinanceStatelog was updated successfully."
            });
          } else {
            res.send({
              message: `Cannot update FinanceStatelog with id=${id}. Maybe FinanceStatelog was not found or req.body is empty!`
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Error updating FinanceStatelog with id=" + id
          });
        });
  };
  
  //删除
  exports.delete = (req, res) => {
      const id = req.params.id;
      FinanceStatelog.destroy({
        where: { id: id }
      })
        .then(num => {
          if (num == 1) {
            res.send({
              message: "FinanceStatelog was deleted successfully!"
            });
          } else {
            res.send({
              message: `Cannot delete FinanceStatelog with id=${id}. Maybe FinanceStatelog was not found!`
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Could not delete Ruku with id=" + id
          });
        });
  };
  