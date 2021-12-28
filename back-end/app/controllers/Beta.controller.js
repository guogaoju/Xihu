const db = require("../models");
const Beta = db.Beta;
const Op = db.Sequelize.Op;

// 新建controller层
exports.create = (req, res) => {
  const beta = {
    x: req.body.x,
    y: req.body.y,
    s: req.body.s,
  };

// 新增
Beta.create(beta)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the RongziB."
      });
    });
};


//从数据库查找所有,模糊查询
exports.findAll = (req, res) => {
    // const name = req.query.name;
    // var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;
    Beta.findAll({attributes:['s'], group :'s',})
      .then(async data => {
        var arr=[];
        for(var i=0;i<data.length;i++){
          await Beta.findAll({where:{s:data[i].s}, limit:12,order: [['createdAt', 'DESC']]},).then(data1 =>{
            data1=data1.reverse()
            for(var j=0;j<data1.length;j++){
              arr.push(data1[j])
            }
          }).catch(err => {
            res.status(500).send({
              message:
                err.message || "Some error occurred while retrieving RongziB."
            });
          });
        }
        res.send(arr);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving RongziB."
        });
      });
};

//根据id查找
exports.findOne = (req, res) => {
    const id = req.params.id;
    Beta.findOne({ where: { id: req.params.id }})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving RongziB with id=" + id
        });
      });
};

//修改
exports.update = (req, res) => {
    const id = req.params.id;
    Beta.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "RongziB was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update RongziB with id=${id}. Maybe RongziB was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating RongziB with id=" + id
        });
      });
};

//删除
exports.delete = (req, res) => {
    const id = req.params.id;
    Beta.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "RongziB was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete RongziB with id=${id}. Maybe RongziB was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete RongziB with id=" + id
        });
      });
};