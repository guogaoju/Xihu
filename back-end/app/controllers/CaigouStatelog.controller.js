const db = require("../models");
const CaigouStatelog = db.CaigouStatelog;
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
    const CaigouStatelogs = {
              userId:req.body.userId,
              caigouId: req.body.caigouId,
              oldstateid: req.body.oldstateid,
              newstateid:req.body.newstateid,
              operateId:req.body.operateId,
    };
    CaigouStatelog.create(CaigouStatelogs)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the CaigouStatelog."
        });
      });
  };
  
  //新建
  exports.findAll = (req, res) => {
      const caigouId = req.query.caigouId;
      var condition = caigouId ? { caigouId: caigouId}  : null;
    
      CaigouStatelog.findAll({
        where:condition
    })
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving CaigouStatelog."
          });
        });
  };
  
  //根据id查询
  exports.findOne = (req, res) => {
      const id = req.params.id;
      CaigouStatelog.findByPk(id)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message: "Error retrieving CaigouStatelog with id=" + id
          });
        });
  };
  
  
  //修改
  exports.update = (req, res) => {
      const id = req.params.id;
      CaigouStatelog.update(req.body, {
        where: { id: id }
      })
        .then(num => {
          if (num == 1) {
            res.send({
              message: "CaigouStatelog was updated successfully."
            });
          } else {
            res.send({
              message: `Cannot update CaigouStatelog with id=${id}. Maybe CaigouStatelog was not found or req.body is empty!`
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Error updating CaigouStatelog with id=" + id
          });
        });
  };
  
  //删除
  exports.delete = (req, res) => {
      const id = req.params.id;
      CaigouStatelog.destroy({
        where: { id: id }
      })
        .then(num => {
          if (num == 1) {
            res.send({
              message: "CaigouStatelog was deleted successfully!"
            });
          } else {
            res.send({
              message: `Cannot delete CaigouStatelog with id=${id}. Maybe CaigouStatelog was not found!`
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Could not delete CaigouStatelog with id=" + id
          });
        });
  };
  