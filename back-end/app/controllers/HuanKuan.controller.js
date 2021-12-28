const db = require("../models");
const HuanKuan = db.huankuan;
const HuanKuanState = db.HuankuanState;
const HuankuanImage = db.HuankuanImage;
const Op = db.Sequelize.Op;
const Dept = db.dept;
// 新建controller层
exports.create = (req, res) => {
  // Validate request
  if (!req.body.item_name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  const huankuan = {
        code:req.body.code,
        item_name:req.body.item_name,
        total_quota: req.body.total_quota,
        money: req.body.money ,
        huan_money:req.body.huan_money,
        huan_money1:req.body.huan_money1,
        time:req.body.time,
        huan_stream:req.body.huan_stream,
        // current_process:req.body.current_process
  };

// 新增
  HuanKuan.create(huankuan)
    .then(huankuan => {
      huankuan.setHuankuanState([1])
      res.send(huankuan);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the HuanKuan."
      });
    });
};

//从数据库查找所有,模糊查询
exports.findAll = (req, res) => {
 
  
  const HuankuanStateId = req.query.HuankuanStateId;
  var condition = HuankuanStateId ? { HuankuanStateId: HuankuanStateId}  : null;
    HuanKuan.findAll({order: [['id', 'ASC']],where: condition ,include : [HuanKuanState,HuankuanImage]})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving HuanKuan."
        });
      });
};

// exports.findAlls = (req, res) => {
//   console.log(req.body.deptId+"6666666666")
//     HuanKuan.findAll({order: [['id', 'ASC']],include : [HuanKuanState]})
//       .then(data => {
//           for(var i=0;i<data.length;i++){
//             console.log(data[i].HuankuanStateId+"77777")
//             HuanKuanState.getDepts([data[i].HuankuanStateId]).then(data1 =>{
//               console.log(data1+"99999999")
//           //     if(data1.depts[i].id===req.body.deptId){
//           //       // res.send(data);
//           //  }
//              })
            
//           }
//         })
//         // res.send(data);
//       .catch(err => {
//         res.status(500).send({
//           message:
//             err.message || "Some error occurred while retrieving HuanKuan."
//         });
//       });
// };
//根据id查找
exports.findOne = (req, res) => {
    const id = req.params.id;
    HuanKuan.findOne({ where: { id: req.params.id },include : [HuanKuanState,HuankuanImage] })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving HuanKuan with id=" + id
        });
      });
};

//修改
exports.update = (req, res) => {
    const id = req.params.id;
    HuanKuan.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "HuanKuan was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update HuanKuan with id=${id}. Maybe HuanKuan was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating HuanKuan with id=" + id
        });
      });
};

//删除
exports.delete = (req, res) => {
    const id = req.params.id;
    HuanKuan.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "HuanKuan was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete HuanKuan with id=${id}. Maybe HuanKuan was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete HuanKuan with id=" + id
        });
      });
};
