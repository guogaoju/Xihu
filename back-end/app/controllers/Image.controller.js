const db = require("../models");
const Image = db.images;
const Op = db.Sequelize.Op;
const upload = require("../middleware/upload");

// 新建controller层
exports.create = (req, res) => {
  // Validate request
  if (!req.body.zujianid) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  const image = {
        name:req.body.name,
        jinduId: req.body.jinduId ,
        path:req.body.path,
        zujianid:req.body.zujianid,
        // current_process:req.body.current_process
  };

// 新增
Image.create(image)
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
exports.findimg = (req, res) => {
    Image.findOne({ where: { logid: req.params.logid, name:req.params.name} })
      .then(data => {
      res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Image with id=" 
        });
      });
};
//从数据库查找所有,模糊查询
exports.findAll = (req, res) => {
  const jinduId = req.query.jinduId;
  var condition = jinduId ? { jinduId: jinduId}  : null;
    Image.findAll({where:condition,order: [['id', 'ASC']]})
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
    Jindu.findOne({ where: { id: req.params.id }})
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
    Image.update(req.body, {
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
    Image.destroy({
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
