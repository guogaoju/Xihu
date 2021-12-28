const db = require("../models");
const CailiaoStatelog = db.CailiaoStatelog;
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
    const CailiaoStatelogs = {
              userId:req.body.userId,
              cailiaogyId: req.body.cailiaogyId,
              oldstateid: req.body.oldstateid,
              newstateid:req.body.newstateid,
              operateId:req.body.operateId,
    };
    CailiaoStatelog.create(CailiaoStatelogs)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the CailiaoStatelog."
        });
      });
  };
  
  //新建
  exports.findAll = (req, res) => {
      const cailiaogyId = req.query.cailiaogyId;
      var condition = cailiaogyId ? { cailiaogyId: cailiaogyId}  : null;
    
      CailiaoStatelog.findAll({
        where:condition
    })
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving FangwenStatelog."
          });
        });
  };
  
  //根据id查询
  exports.findOne = (req, res) => {
      const id = req.params.id;
      CailiaoStatelog.findByPk(id)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message: "Error retrieving CailiaoStatelog with id=" + id
          });
        });
  };
  
  
  //修改
  exports.update = (req, res) => {
      const id = req.params.id;
      CailiaoStatelog.update(req.body, {
        where: { id: id }
      })
        .then(num => {
          if (num == 1) {
            res.send({
              message: "CailiaoStatelog was updated successfully."
            });
          } else {
            res.send({
              message: `Cannot update CailiaoStatelog with id=${id}. Maybe CailiaoStatelog was not found or req.body is empty!`
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Error updating CailiaoStatelog with id=" + id
          });
        });
  };
  
  //删除
  exports.delete = (req, res) => {
      const id = req.params.id;
      CailiaoStatelog.destroy({
        where: { id: id }
      })
        .then(num => {
          if (num == 1) {
            res.send({
              message: "CailiaoStatelog was deleted successfully!"
            });
          } else {
            res.send({
              message: `Cannot delete CailiaoStatelog with id=${id}. Maybe CailiaoStatelog was not found!`
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Could not delete CailiaoStatelog with id=" + id
          });
        });
  };
  