const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;
const Role = db.role;
const Dept = db.dept;
const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
const { dept } = require("../models");

exports.signup = (req, res) => {
  //问题一------------------------
  console.log(req.body+"------------------")
  // 数据库添加用户表
  User.create({
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8)
  })
    .then(user => {
      if (req.body.roles) {
        Role.findAll({
          where: {
            name: {
              [Op.or]: req.body.roles
            }
          }
        }).then(roles => {
          user.setRoles(roles).then(() => {
          });
        });
      } else {
        // user role = 1
        user.setRoles([1]).then(() => {
        });
      };
      //添加部门信息
      if (req.body.depts) {
        Dept.findAll({
          where: {
            name: {
              [Op.or]: req.body.depts
            }
          }
        }).then(depts => {
          user.setDepts(depts).then(() => {
            res.send({ message: "用户注册成功！" });
          });
        });
      } else {
        // 部门可以为空
        res.send({ message: "用户注册成功！" });
      }
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};
//根据id查找
exports.findOne = (req, res) => {
  User.findOne({ where: { id: req.params.userid },include : [Role,Dept] })
  .then(user => {
        res.send(user)
  })
  .catch(err => {
    res.status(500).send({ message: "Error retrieving user with id=" + id
  });
    });
};
exports.findDeptUsers = (req, res) => {
  //console.log(req.body.deptid+"------------------")
  User.findAll({ include:[{
    model: Dept,    
    where: {
        id: req.params.deptid
    }
    }] })
  .then(user => {  
        var userIds = [];
        for (var i = 0; i < user.length; i++) {
          userIds.push(user[i].id);
        }
        console.log(userIds);
        User.findAll({ where: {id:userIds},include:[{
          model: Dept
          }] })
          .then(user=>{
            res.send(user)
          }

          )
          .catch(err => {
            res.status(500).send({ message: err.message
          });
            })
  })
  .catch(err => {
    res.status(500).send({ message: err.message
  });
    });
};
//查找全部信息
exports.findAll = (req, res) => {
  User.findAll({include : [Role,Dept] })
  .then(user => {  
        res.send(user)
  })
  .catch(err => {
    res.status(500).send({ message: err.message
  });
    });
};
exports.update = (req, res) => {
  const id = req.params.userid;
  //修改
  User.update(req.body, {
    where: { id: id }
  }).catch(err => {
    res.status(500).send({ message: err.message });
  });

  User.findByPk(id)
  .then(user => {
    if (req.body.roles) {
      Role.findAll({
        where: {
          name: {
            [Op.or]: req.body.roles
          }
        }
      }).then(roles => {
        user.setRoles(roles).then(() => {
        });
      });
    } else {
      res.send({ message: "用户可以为空！" });
      // user role = 1
      // user.setRoles([1]).then(() => {
      // });
    };
    //修改部门信息
    if (req.body.depts) {
      Dept.findAll({
        where: {
          name: {
            [Op.or]: req.body.depts
          }
        }
      }).then(depts => {
        user.setDepts(depts).then(() => {
          res.send({ message: "用户修改成功！" });
        });
      });
    } else {
      // 部门可以为空
      res.send({ message: "用户可以为空！" });
    }
  })
  .catch(err => {
    res.status(500).send({ message: err.message });
    });
};
//删除
exports.delete = (req, res) => {
  const id = req.params.userid;
  User.destroy({
    where: { id: id }
  })
  .then(num => {
    if (num == 1) {
      res.send({
        message: "deleted successfully!"
      });
    } else {
      res.send({
        message: `Cannot delete bumen with id=${id}. Maybe bumen was not found!`
      });
    }
  }).catch(err => {
    res.status(500).send({ message: err.message });
  });
  User.findByPk(id)
  .then(user => {
    //删除角色中间表信息
        user.setRoles([])
    //删除部门中间表信息
        user.setDepts([])
  })
  .catch(err => {
    res.status(500).send({ message: err.message });
    });
};
exports.signin = (req, res) => {
  User.findOne({
    where: {
      username: req.body.username
    }
  })
    .then(user => {
      if (!user) {
        return res.status(404).send({ message: "用户名找不到" });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          // accessToken: null,
          message: "密码错误"
        });
      }

      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400 // 24 hours
      });

      var authorities = [];
      user.getRoles().then(roles => {
        for (let i = 0; i < roles.length; i++) {
          authorities.push("ROLE_" + roles[i].name.toUpperCase());
        }
        res.status(200).send({
          id: user.id,
          username: user.username,
          email: user.email,
          roles: authorities,
          accessToken: token
        });
      });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};