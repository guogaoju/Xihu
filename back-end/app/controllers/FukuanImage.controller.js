const db = require("../models");
const FukuanImage = db.FukuanImage;
const Op = db.Sequelize.Op;

// 新建controller层
exports.create = (req, res) => {
  // Validate request
  if (!req.body.zujianid) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  const FukuanImages = {
        name:req.body.name ,
        fukuanId: req.body.fukuanId ,
        path:req.body.path,
        zujianid:req.body.zujianid,
  };

// 新增
FukuanImage.create(FukuanImages)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Jindu."
      });
    });
};
//从数据库查找所有,模糊查询
exports.findAll = (req, res) => {
  const fukuanId = req.query.fukuanId;
  var condition = fukuanId ? { fukuanId: fukuanId}  : null;
    FukuanImage.findAll({where:condition,order: [['id', 'ASC']]})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Image."
        });
      });
};

//根据id查找
exports.findOne = (req, res) => {
    const id = req.params.id;
    FukuanImage.findOne({ where: { id: req.params.id }})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Image with id=" + id
        });
      });
};

//修改
exports.update = (req, res) => {
    const id = req.params.id;
    FukuanImage.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Image was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Image with id=${id}. Maybe Image was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Image with id=" + id
        });
      });
};
//删除
exports.delete = (req, res) => {
    const id = req.params.id;
    FukuanImage.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Image was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Image with id=${id}. Maybe Image was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Image with id=" + id
        });
      });
};
