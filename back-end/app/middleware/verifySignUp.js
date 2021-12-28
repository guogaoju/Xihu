const db = require("../models");
const Role = db.role;
const User = db.user;
const Dept = db.dept;
//这一句引入了index.js里提前定义好的静态数组
//const ROLES = db.ROLES;
checkDuplicateUsernameOrEmail = (req, res, next) => {
  // Username
  User.findOne({
    where: {
      username: req.body.username
    }
  }).then(user => {
    if (user) {
      res.status(400).send({
        message: "Failed! Username is already in use!"
      });
      return;
    }

    // Email
    User.findOne({
      where: {
        email: req.body.email
      }
    }).then(user => {
      if (user) {
        res.status(400).send({
          message: "Failed! Email is already in use!"
        });
        return;
      }

      next();
    });
  });
};

checkRolesExisted = (req, res, next) => {
  if (req.body.roles) {
    for (let i = 0; i < req.body.roles.length; i++) {
      /* 根据静态提前定义好的数组的内容验证role是否存在
      if (!ROLES.includes(req.body.roles[i])) {
        res.status(400).send({
          message: "Failed! Role does not exist = " + req.body.roles[i]
        });
        return;
      }
      */

      //根据数据库里的内容验证
      Role.findOne({
        where: {
          name: req.body.roles[i]
        }
      }).then(role => {
        //如果
        if (!role) {
          res.status(400).send({
            message: "Failed! Role does not exist = " + req.body.roles[i]
          });
          return;
        }
      });
    }
  }
  next();
};

checkDeptExisted = (req, res, next) => {
  if (req.body.depts) {
    for (let i = 0; i < req.body.depts.length; i++) {
      /*
      if (!Roles.includes(req.body.roles[i])) {
        res.status(400).send({
          message: "Failed! Role does not exist = " + req.body.roles[i]
        });
        return;
      }
      */
      Dept.findOne({
        where: {
          name: req.body.depts[i]
        }
      }).then(dept => {
        if (!dept) {
          res.status(400).send({
            message: "Failed! Dept does not exist = " + req.body.depts[i]
          });
          return;
        }
      });
    }
  }
  next();
};

const verifySignUp = {
  checkDuplicateUsernameOrEmail: checkDuplicateUsernameOrEmail,
  checkRolesExisted: checkRolesExisted,
  checkDeptExisted: checkDeptExisted
};

module.exports = verifySignUp;