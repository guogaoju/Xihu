const { verifySignUp } = require("../middleware");
const controller = require("../controllers/auth.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });


  app.post(
    "/api/signup",
    [
      verifySignUp.checkDuplicateUsernameOrEmail,
      verifySignUp.checkRolesExisted,
      verifySignUp.checkDeptExisted
    ],
    controller.signup
  );

  app.post("/api/signin", controller.signin);
  //app.put("/api/signupdate", controller.update);
  app.put("/api/signupdate/:userid",
  [
    verifySignUp.checkRolesExisted,
    verifySignUp.checkDeptExisted
  ],
  controller.update);

  app.delete("/api/signdelete/:userid",controller.delete);
  app.get("/api/signselect/:userid",controller.findOne);
  app.get("/api/signselectAll",controller.findAll);

  app.get("/api/signselectdept/:deptid",controller.findDeptUsers);
};