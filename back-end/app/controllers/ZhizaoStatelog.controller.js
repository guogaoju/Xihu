const db = require("../models");
const ZhizaoStatelog = db.ZhizaoStatelog;
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
    const ZhizaoStatelogs = {
              userId:req.body.userId,
              zhizaoId: req.body.zhizaoId,
              oldstateid: req.body.oldstateid,
              newstateid:req.body.newstateid,
              operateId:req.body.operateId,
    };
    ZhizaoStatelog.create(ZhizaoStatelogs)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the ZhizaoStatelog."
        });
      });
  };
  
  //新建
  exports.findAll = (req, res) => {
      const zhizaoId = req.query.zhizaoId;
      var condition = zhizaoId ? { zhizaoId: zhizaoId}  : null;
    
      ZhizaoStatelog.findAll({
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
      ZhizaoStatelog.findByPk(id)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message: "Error retrieving ZhizaoStatelog with id=" + id
          });
        });
  };
  
  
  //修改
  exports.update = (req, res) => {
      const id = req.params.id;
      ZhizaoStatelog.update(req.body, {
        where: { id: id }
      })
        .then(num => {
          if (num == 1) {
            res.send({
              message: "ZhizaoStatelog was updated successfully."
            });
          } else {
            res.send({
              message: `Cannot update ZhizaoStatelog with id=${id}. Maybe ZhizaoStatelog was not found or req.body is empty!`
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Error updating ZhizaoStatelog with id=" + id
          });
        });
  };
  
  //删除
  exports.delete = (req, res) => {
      const id = req.params.id;
      ZhizaoStatelog.destroy({
        where: { id: id }
      })
        .then(num => {
          if (num == 1) {
            res.send({
              message: "ZhizaoStatelog was deleted successfully!"
            });
          } else {
            res.send({
              message: `Cannot delete ZhizaoStatelog with id=${id}. Maybe ZhizaoStatelog was not found!`
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Could not delete ZhizaoStatelog with id=" + id
          });
        });
  };
  