const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.core_firm = require("./core_firm.model.js")(sequelize, Sequelize);
db.pingji = require("./Pingji.model.js")(sequelize, Sequelize);
db.cailiaogys = require("./Cailiaogys.model.js")(sequelize, Sequelize);
db.qiye = require("./Qiye.model.js")(sequelize, Sequelize);
db.fangwen = require("./Fangwen.model.js")(sequelize, Sequelize);
db.qiyepingji = require("./Qiyepingji.model.js")(sequelize, Sequelize);
db.finance = require("./Finance.model.js")(sequelize, Sequelize);
db.wuliao = require("./Wuliao.model.js")(sequelize, Sequelize);
db.danwei = require("./Danwei.model.js")(sequelize, Sequelize);
db.wuliaotype = require("./WuliaoType.model.js")(sequelize, Sequelize);
db.images = require("./image.model.js")(sequelize, Sequelize);
db.jianzhu = require("./Jianzhu.model.js")(sequelize, Sequelize);
db.addwuliao = require("./Addwuliao.model.js")(sequelize, Sequelize);
db.zhizao = require("./Zhizao.model.js")(sequelize, Sequelize);
db.caigou = require("./Caigou.model.js")(sequelize, Sequelize);
db.caigouwuliao = require("./CaiGouwuliao.model.js")(sequelize, Sequelize);
db.huankuan = require("./HuanKuan.model.js")(sequelize, Sequelize);
db.jindu = require("./Jindu.model.js")(sequelize, Sequelize);
db.addjinduwuliao = require("./Addjinduwuliao.model.js")(sequelize, Sequelize);
db.ruku = require("./Ruku.model.js")(sequelize, Sequelize);
db.chuku = require("./Chuku.model.js")(sequelize, Sequelize);
db.kucun = require("./Kucun.model.js")(sequelize, Sequelize);
db.user = require("./user.model.js")(sequelize, Sequelize);
db.role = require("./role.model.js")(sequelize, Sequelize);
db.bumen = require("./Bumen.model.js")(sequelize, Sequelize);
db.dept = require("./Dept.model.js")(sequelize, Sequelize);
db.role = require("./role.model.js")(sequelize, Sequelize);
db.QiyeState = require("./QiyeState.model.js")(sequelize, Sequelize);
db.Statelog = require("./Statelog.model.js")(sequelize, Sequelize);
db.operate = require("./operateType.model.js")(sequelize, Sequelize);
db.QiyepingjiState = require("./QiyepingjiState.model.js")(sequelize, Sequelize);
db.QiyepingjiStatelog = require("./QiyepingjiStatelog.model.js")(sequelize, Sequelize);
db.FinanceState = require("./FinanceState.model.js")(sequelize, Sequelize);
db.FinanceStatelog = require("./FinanceStatelog.model.js")(sequelize, Sequelize);
db.FangwenStatelog = require("./FangwenStatelog.model.js")(sequelize, Sequelize);
db.FangwenState = require("./FangwenState.model.js")(sequelize, Sequelize);
db.CailiaoState = require("./CailiaoState.model.js")(sequelize, Sequelize);
db.CailiaoStatelog = require("./CailiaoStatelog.model.js")(sequelize, Sequelize);
db.PingjiStatelog = require("./PingjiStatelog.model.js")(sequelize, Sequelize);
db.PingjiState = require("./PingjiState.model.js")(sequelize, Sequelize);
db.corefirmState = require("./corefirmState.model.js")(sequelize, Sequelize);
db.corefirmStatelog = require("./corefirmStatelog.model.js")(sequelize, Sequelize);
db.JianzhuStatelog = require("./JianzhuStatelog.model.js")(sequelize, Sequelize);
db.JianzhuState = require("./JianzhuState.model.js")(sequelize, Sequelize);
db.ZhizaoState = require("./ZhizaoState.model.js")(sequelize, Sequelize);
db.ZhizaoStatelog = require("./ZhizaoStatelog.model.js")(sequelize, Sequelize);
db.CaigouStatelog = require("./CaigouStatelog.model.js")(sequelize, Sequelize);
db.CaigouState = require("./CaigouState.model.js")(sequelize, Sequelize);
db.HuankuanState = require("./HuankuanState.model.js")(sequelize, Sequelize);
db.HuankuanStatelog = require("./HuankuanStatelog.model.js")(sequelize, Sequelize);
db.JinduStatelog = require("./JinduStatelog.model.js")(sequelize, Sequelize);
db.JinduState = require("./JinduState.model.js")(sequelize, Sequelize);
db.RukuState = require("./RukuState.model.js")(sequelize, Sequelize);
db.RukuStatelog = require("./RukuStatelog.model.js")(sequelize, Sequelize);
db.ChukuStatelog = require("./ChukuStatelog.model.js")(sequelize, Sequelize);
db.ChukuState = require("./ChukuState.model.js")(sequelize, Sequelize);
db.KucunState = require("./KucunState.model.js")(sequelize, Sequelize);
db.KucunStatelog = require("./KucunStatelog.model.js")(sequelize, Sequelize);
db.WuliaoStatelog = require("./WuliaoStatelog.model.js")(sequelize, Sequelize);
db.WuliaoState = require("./WuliaoState.model.js")(sequelize, Sequelize);
db.DanweiState = require("./DanweiState.model.js")(sequelize, Sequelize);
db.DanweiStatelog = require("./DanweiStatelog.model.js")(sequelize, Sequelize);
db.WuliaoTypeState = require("./WuliaoTypeState.model.js")(sequelize, Sequelize);
db.WuliaoTypeStatelog = require("./WuliaoTypeStatelog.model.js")(sequelize, Sequelize);
db.Rongzi = require("./Rongzi.model.js")(sequelize, Sequelize);
db.Addjianzhuwuliao = require("./Addjianzhuwuliao.model.js")(sequelize, Sequelize);
db.Daiban = require("./Daiban.model.js")(sequelize, Sequelize);
db.Code = require("./code.model.js")(sequelize, Sequelize);
db.FukuanState = require("./FukuanState.model.js")(sequelize, Sequelize);
db.FukuanStatelog = require("./FukuanStatelog.model.js")(sequelize, Sequelize);
db.Fukuan = require("./Fukuan.model.js")(sequelize, Sequelize);
db.Fukuanwuliao = require("./Fukuanwuliao.model.js")(sequelize, Sequelize);
db.CaigouImage = require("./CaigouImage.model.js")(sequelize, Sequelize);
db.FukuanImage = require("./FukuanImage.model.js")(sequelize, Sequelize);
db.HuankuanImage = require("./HuankuanImage.model.js")(sequelize, Sequelize);
db.Dange = require("./Dange.model.js")(sequelize, Sequelize);
db.RongziB = require("./RongziB.model.js")(sequelize, Sequelize);
db.XinyongA = require("./XinyongA.model.js")(sequelize, Sequelize);
db.Alpha = require("./Alpha.model.js")(sequelize, Sequelize);
db.Beta = require("./Beta.model.js")(sequelize, Sequelize);
db.role.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId"
});
db.user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId"
});
db.user.belongsToMany(db.dept, {
  through: "user_dept",
  foreignKey: "userId",
  otherKey: "deptId"
});
db.dept.belongsToMany(db.user, {
  through: "user_dept",
  foreignKey: "deptId",
  otherKey: "userId"
});
db.QiyeState.hasMany(db.qiye);
db.qiye.belongsTo(db.QiyeState);

//记录表和user表
db.user.hasMany(db.Statelog, {
  foreignKey: "userId",
});
db.Statelog.belongsTo(db.user);
//记录表和qiye表
db.qiye.hasMany(db.Statelog, {
  foreignKey: "qiyeId",
});
db.Statelog.belongsTo(db.qiye);
//记录表和State表
db.QiyeState.hasMany(db.Statelog, {
  as:"oldstate",
  foreignKey: "oldstateid"
});
db.QiyeState.hasMany(db.Statelog, {
  as:"newstate",
  foreignKey: "newstateid"
});
//状态表和部门表
db.QiyeState.belongsToMany(db.dept, {
  through: "qiyestate_dept",
  foreignKey: "qiyestateId",
  otherKey: "deptId"
});
db.dept.belongsToMany(db.QiyeState, {
  through: "qiyestate_dept",
  foreignKey: "deptId",
  otherKey: "qiyestateId"
});
//记录表和操作类型表
db.operate.hasMany(db.Statelog, {
  foreignKey: "operateId",
});
db.Statelog.belongsTo(db.operate);


//企业评级表和企业评级状态表
db.QiyepingjiState.hasMany(db.qiyepingji);
db.qiyepingji.belongsTo(db.QiyepingjiState);
//企业评级状态表和部门表
db.QiyepingjiState.belongsToMany(db.dept, {
  through: "QiyepingjiState_dept",
  foreignKey: "QiyepingjiStateId",
  otherKey: "deptId"
});
db.dept.belongsToMany(db.QiyepingjiState, {
  through: "QiyepingjiState_dept",
  foreignKey: "deptId",
  otherKey: "QiyepingjiStateId"
});
//qiyepingji记录表和user表
db.user.hasMany(db.QiyepingjiStatelog, {
  foreignKey: "userId",
});
db.QiyepingjiStatelog.belongsTo(db.user);
//记录表和qiyepingji表
db.qiyepingji.hasMany(db.QiyepingjiStatelog, {
  foreignKey: "qiyepingjiId",
});
db.QiyepingjiStatelog.belongsTo(db.qiyepingji);
//记录表和qiyepingjiState表
db.QiyepingjiState.hasMany(db.QiyepingjiStatelog, {
  foreignKey: "oldstateid"
});
db.QiyepingjiState.hasMany(db.QiyepingjiStatelog, {
  foreignKey: "newstateid"
});
//记录表和操作类型表
db.operate.hasMany(db.QiyepingjiStatelog, {
  foreignKey: "operateId",
});
//图片表和进度表
db.jindu.hasMany(db.images, {
  foreignKey: "jinduId",
});
db.images.belongsTo(db.jindu);

//finance表和finance状态表
db.FinanceState.hasMany(db.finance);
db.finance.belongsTo(db.FinanceState);
//finance状态表和部门表
db.FinanceState.belongsToMany(db.dept, {
  through: "FinanceState_dept",
  foreignKey: "FinanceStateId",
  otherKey: "deptId"
});
db.dept.belongsToMany(db.FinanceState, {
  through: "FinanceState_dept",
  foreignKey: "deptId",
  otherKey: "FinanceStateId"
});
//FinanceStatelog记录表和user表
db.user.hasMany(db.FinanceStatelog, {
  foreignKey: "userId",
});
db.FinanceStatelog.belongsTo(db.user);
//记录表和finance表
db.finance.hasMany(db.FinanceStatelog, {
  foreignKey: "financeId",
});
db.FinanceStatelog.belongsTo(db.finance);
//记录表和qiyepingjiState表
db.FinanceState.hasMany(db.FinanceStatelog, {
  foreignKey: "oldstateid"
});
db.FinanceState.hasMany(db.FinanceStatelog, {
  foreignKey: "newstateid"
});
//记录表和操作类型表
db.operate.hasMany(db.FinanceStatelog, {
  foreignKey: "operateId",
});


//fangwen表和fangwen状态表
db.FangwenState.hasMany(db.fangwen);
db.fangwen.belongsTo(db.FangwenState);
//fangwen状态表和部门表
db.FangwenState.belongsToMany(db.dept, {
  through: "FangwenState_dept",
  foreignKey: "FangwenStateId",
  otherKey: "deptId"
});
db.dept.belongsToMany(db.FangwenState, {
  through: "FangwenState_dept",
  foreignKey: "deptId",
  otherKey: "FangwenStateId"
});
//fangwenStatelog记录表和user表
db.user.hasMany(db.FangwenStatelog, {
  foreignKey: "userId",
});
db.FangwenStatelog.belongsTo(db.user);
//记录表和fangwen表
db.fangwen.hasMany(db.FangwenStatelog, {
  foreignKey: "fangwenId",
});
db.FangwenStatelog.belongsTo(db.fangwen);
//记录表和fangwenState表
db.FangwenState.hasMany(db.FangwenStatelog, {
  foreignKey: "oldstateid"
});
db.FangwenState.hasMany(db.FangwenStatelog, {
  foreignKey: "newstateid"
});
//记录表和操作类型表
db.operate.hasMany(db.FangwenStatelog, {
  foreignKey: "operateId",
});


//Cailiaogys表和Cailiao状态表
db.CailiaoState.hasMany(db.cailiaogys);
db.cailiaogys.belongsTo(db.CailiaoState);
//cailiaogys状态表和部门表
db.CailiaoState.belongsToMany(db.dept, {
  through: "CailiaoState_dept",
  foreignKey: "CailiaoStateId",
  otherKey: "deptId"
});
db.dept.belongsToMany(db.CailiaoState, {
  through: "CailiaoState_dept",
  foreignKey: "deptId",
  otherKey: "CailiaoStateId"
});
//CailiaoStatelog记录表和user表
db.user.hasMany(db.CailiaoStatelog, {
  foreignKey: "userId",
});
db.CailiaoStatelog.belongsTo(db.user);
//CailiaoStatelog记录表和cailiaogys表
db.cailiaogys.hasMany(db.CailiaoStatelog, {
  foreignKey: "cailiaogyId",
});
db.CailiaoStatelog.belongsTo(db.cailiaogys);
//记录表和qiyepingjiState表
db.CailiaoState.hasMany(db.CailiaoStatelog, {
  foreignKey: "oldstateid"
});
db.CailiaoState.hasMany(db.CailiaoStatelog, {
  foreignKey: "newstateid"
});
//记录表和操作类型表
db.operate.hasMany(db.CailiaoStatelog, {
  foreignKey: "operateId",
});


//Pingji表和PingjiState状态表
db.PingjiState.hasMany(db.pingji);
db.pingji.belongsTo(db.PingjiState);
//cailiaogys状态表和部门表
db.PingjiState.belongsToMany(db.dept, {
  through: "PingjiState_dept",
  foreignKey: "PingjiStateId",
  otherKey: "deptId"
});
db.dept.belongsToMany(db.PingjiState, {
  through: "PingjiState_dept",
  foreignKey: "deptId",
  otherKey: "PingjiStateId"
});
//CailiaoStatelog记录表和user表
db.user.hasMany(db.PingjiStatelog, {
  foreignKey: "userId",
});
db.PingjiStatelog.belongsTo(db.user);
//CailiaoStatelog记录表和cailiaogys表
db.pingji.hasMany(db.PingjiStatelog, {
  foreignKey: "pingjiId",
});
db.PingjiStatelog.belongsTo(db.pingji);
//记录表和qiyepingjiState表
db.PingjiState.hasMany(db.PingjiStatelog, {
  foreignKey: "oldstateid"
});
db.PingjiState.hasMany(db.PingjiStatelog, {
  foreignKey: "newstateid"
});
//记录表和操作类型表
db.operate.hasMany(db.PingjiStatelog, {
  foreignKey: "operateId",
});


//core_firm表和corefirmState状态表
db.corefirmState.hasMany(db.core_firm);
db.core_firm.belongsTo(db.corefirmState);
//corefirmState状态表和部门表
db.corefirmState.belongsToMany(db.dept, {
  through: "corefirmState_dept",
  foreignKey: "corefirmStateId",
  otherKey: "deptId"
});
db.dept.belongsToMany(db.corefirmState, {
  through: "corefirmState_dept",
  foreignKey: "deptId",
  otherKey: "corefirmStateId"
});
//corefirmStatelog记录表和user表
db.user.hasMany(db.corefirmStatelog, {
  foreignKey: "userId",
});
db.corefirmStatelog.belongsTo(db.user);
//corefirmStatelog记录表和cailiaogys表
db.core_firm.hasMany(db.corefirmStatelog, {
  foreignKey: "core_firmId",
});
db.corefirmStatelog.belongsTo(db.core_firm);
//记录表和qiyepingjiState表
db.corefirmState.hasMany(db.corefirmStatelog, {
  foreignKey: "oldstateid"
});
db.corefirmState.hasMany(db.corefirmStatelog, {
  foreignKey: "newstateid"
});
//记录表和操作类型表
db.operate.hasMany(db.corefirmStatelog, {
  foreignKey: "operateId",
});


//jianzhu表和JianzhuState状态表
db.JianzhuState.hasMany(db.jianzhu);
db.jianzhu.belongsTo(db.JianzhuState);
//JianzhuState状态表和部门表
db.JianzhuState.belongsToMany(db.dept, {
  through: "JianzhuState_dept",
  foreignKey: "JianzhuStateId",
  otherKey: "deptId"
});
db.dept.belongsToMany(db.JianzhuState, {
  through: "JianzhuState_dept",
  foreignKey: "deptId",
  otherKey: "JianzhuStateId"
});
//JianzhuStatelog记录表和user表
db.user.hasMany(db.JianzhuStatelog, {
  foreignKey: "userId",
});
db.JianzhuStatelog.belongsTo(db.user);
//JianzhuStatelog记录表和jianzhu表
db.jianzhu.hasMany(db.JianzhuStatelog, {
  foreignKey: "jianzhuId",
});
db.JianzhuStatelog.belongsTo(db.jianzhu);
//记录表和qiyepingjiState表
db.JianzhuState.hasMany(db.JianzhuStatelog, {
  foreignKey: "oldstateid"
});
db.JianzhuState.hasMany(db.JianzhuStatelog, {
  foreignKey: "newstateid"
});
//记录表和操作类型表
db.operate.hasMany(db.JianzhuStatelog, {
  foreignKey: "operateId",
});


//zhizao表和ZhizaoState状态表
db.ZhizaoState.hasMany(db.zhizao);
db.zhizao.belongsTo(db.ZhizaoState);
//ZhizaoState状态表和部门表
db.ZhizaoState.belongsToMany(db.dept, {
  through: "ZhizaoState_dept",
  foreignKey: "ZhizaoStateId",
  otherKey: "deptId"
});
db.dept.belongsToMany(db.ZhizaoState, {
  through: "ZhizaoState_dept",
  foreignKey: "deptId",
  otherKey: "ZhizaoStateId"
});
//ZhizaoStatelog记录表和user表
db.user.hasMany(db.ZhizaoStatelog, {
  foreignKey: "userId",
});
db.ZhizaoStatelog.belongsTo(db.user);
//ZhizaoStatelog记录表和zhizao表
db.zhizao.hasMany(db.ZhizaoStatelog, {
  foreignKey: "zhizaoId",
});
db.ZhizaoStatelog.belongsTo(db.zhizao);
//记录表和ZhizaoState表
db.ZhizaoState.hasMany(db.ZhizaoStatelog, {
  foreignKey: "oldstateid"
});
db.ZhizaoState.hasMany(db.ZhizaoStatelog, {
  foreignKey: "newstateid"
});
//记录表和操作类型表
db.operate.hasMany(db.ZhizaoStatelog, {
  foreignKey: "operateId",
});


//caigou表和CaigouState状态表
db.CaigouState.hasMany(db.caigou);
db.caigou.belongsTo(db.CaigouState);
//CaigouState状态表和部门表
db.CaigouState.belongsToMany(db.dept, {
  through: "CaigouState_dept",
  foreignKey: "CaigouStateId",
  otherKey: "deptId"
});
db.dept.belongsToMany(db.CaigouState, {
  through: "CaigouState_dept",
  foreignKey: "deptId",
  otherKey: "CaigouStateId"
});
//CaigouStatelog记录表和user表
db.user.hasMany(db.CaigouStatelog, {
  foreignKey: "userId",
});
db.CaigouStatelog.belongsTo(db.user);
//CaigouStatelog记录表和caigou表
db.caigou.hasMany(db.CaigouStatelog, {
  foreignKey: "caigouId",
});
db.CaigouStatelog.belongsTo(db.caigou);
//记录表和ZhizaoState表
db.CaigouState.hasMany(db.CaigouStatelog, {
  foreignKey: "oldstateid"
});
db.CaigouState.hasMany(db.CaigouStatelog, {
  foreignKey: "newstateid"
});
//记录表和操作类型表
db.operate.hasMany(db.CaigouStatelog, {
  foreignKey: "operateId",
});


//huankuan表和HuankuanState状态表
db.HuankuanState.hasMany(db.huankuan);
db.huankuan.belongsTo(db.HuankuanState);
//HuankuanState状态表和部门表
db.HuankuanState.belongsToMany(db.dept, {
  through: "HuankuanState_dept",
  foreignKey: "HuankuanStateId",
  otherKey: "deptId"
});
db.dept.belongsToMany(db.HuankuanState, {
  through: "HuankuanState_dept",
  foreignKey: "deptId",
  otherKey: "HuankuanStateId"
});
//HuankuanStatelog记录表和user表
db.user.hasMany(db.HuankuanStatelog, {
  foreignKey: "userId",
});
db.HuankuanStatelog.belongsTo(db.user);
//HuankuanStatelog记录表和huankuan表
db.huankuan.hasMany(db.HuankuanStatelog, {
  foreignKey: "huankuanId",
});
db.HuankuanStatelog.belongsTo(db.huankuan);
//记录表和ZhizaoState表
db.HuankuanState.hasMany(db.HuankuanStatelog, {
  foreignKey: "oldstateid"
});
db.HuankuanState.hasMany(db.HuankuanStatelog, {
  foreignKey: "newstateid"
});
//记录表和操作类型表
db.operate.hasMany(db.HuankuanStatelog, {
  foreignKey: "operateId",
});


//jindu表和JinduState状态表
db.JinduState.hasMany(db.jindu);
db.jindu.belongsTo(db.JinduState);
//JinduState状态表和部门表
db.JinduState.belongsToMany(db.dept, {
  through: "JinduState_dept",
  foreignKey: "JinduStateId",
  otherKey: "deptId"
});
db.dept.belongsToMany(db.JinduState, {
  through: "JinduState_dept",
  foreignKey: "deptId",
  otherKey: "JinduStateId"
});
//JinduStatelog记录表和user表
db.user.hasMany(db.JinduStatelog, {
  foreignKey: "userId",
});
db.JinduStatelog.belongsTo(db.user);
//JinduStatelog记录表和jindu表
db.jindu.hasMany(db.JinduStatelog, {
  foreignKey: "jinduId",
});
db.JinduStatelog.belongsTo(db.jindu);
//记录表和JinduState表
db.JinduState.hasMany(db.JinduStatelog, {
  foreignKey: "oldstateid"
});
db.JinduState.hasMany(db.JinduStatelog, {
  foreignKey: "newstateid"
});
//记录表和操作类型表
db.operate.hasMany(db.JinduStatelog, {
  foreignKey: "operateId",
});


//ruku表和RukuState状态表
db.RukuState.hasMany(db.ruku);
db.ruku.belongsTo(db.RukuState);
//RukuState状态表和部门表
db.RukuState.belongsToMany(db.dept, {
  through: "RukuState_dept",
  foreignKey: "RukuStateId",
  otherKey: "deptId"
});
db.dept.belongsToMany(db.RukuState, {
  through: "RukuState_dept",
  foreignKey: "deptId",
  otherKey: "RukuStateId"
});
//RukuStatelog记录表和user表
db.user.hasMany(db.RukuStatelog, {
  foreignKey: "userId",
});
db.RukuStatelog.belongsTo(db.user);
//JinduStatelog记录表和ruku表
db.ruku.hasMany(db.RukuStatelog, {
  foreignKey: "rukuId",
});
db.RukuStatelog.belongsTo(db.ruku);
//记录表和RukuState表
db.RukuState.hasMany(db.RukuStatelog, {
  foreignKey: "oldstateid"
});
db.RukuState.hasMany(db.RukuStatelog, {
  foreignKey: "newstateid"
});
//记录表和操作类型表
db.operate.hasMany(db.RukuStatelog, {
  foreignKey: "operateId",
});

//chuku表和ChukuState状态表
db.ChukuState.hasMany(db.chuku);
db.chuku.belongsTo(db.ChukuState);
//ChukuState状态表和部门表
db.ChukuState.belongsToMany(db.dept, {
  through: "ChukuState_dept",
  foreignKey: "ChukuStateId",
  otherKey: "deptId"
});
db.dept.belongsToMany(db.ChukuState, {
  through: "ChukuState_dept",
  foreignKey: "deptId",
  otherKey: "ChukuStateId"
});
//ChukuStatelog记录表和user表
db.user.hasMany(db.ChukuStatelog, {
  foreignKey: "userId",
});
db.ChukuStatelog.belongsTo(db.user);
//ChukuStatelog记录表和ruku表
db.chuku.hasMany(db.ChukuStatelog, {
  foreignKey: "chukuId",
});
db.ChukuStatelog.belongsTo(db.chuku);
//记录表和RukuState表
db.ChukuState.hasMany(db.ChukuStatelog, {
  foreignKey: "oldstateid"
});
db.ChukuState.hasMany(db.ChukuStatelog, {
  foreignKey: "newstateid"
});
//记录表和操作类型表
db.operate.hasMany(db.ChukuStatelog, {
  foreignKey: "operateId",
});

//kucun表和KucunState状态表
db.KucunState.hasMany(db.kucun);
db.kucun.belongsTo(db.KucunState);
//KucunState状态表和部门表
db.KucunState.belongsToMany(db.dept, {
  through: "KucunState_dept",
  foreignKey: "KucunStateId",
  otherKey: "deptId"
});
db.dept.belongsToMany(db.KucunState, {
  through: "KucunState_dept",
  foreignKey: "deptId",
  otherKey: "KucunStateId"
});
//KucunStatelog记录表和user表
db.user.hasMany(db.KucunStatelog, {
  foreignKey: "userId",
});
db.KucunStatelog.belongsTo(db.user);
//KucunStatelog记录表和kucun表
db.kucun.hasMany(db.KucunStatelog, {
  foreignKey: "kucunId",
});
db.KucunStatelog.belongsTo(db.kucun);
//记录表和KucunState表
db.KucunState.hasMany(db.KucunStatelog, {
  foreignKey: "oldstateid"
});
db.KucunState.hasMany(db.KucunStatelog, {
  foreignKey: "newstateid"
});
//记录表和操作类型表
db.operate.hasMany(db.KucunStatelog, {
  foreignKey: "operateId",
});


//wuliao表和WuliaoState状态表
db.WuliaoState.hasMany(db.wuliao);
db.wuliao.belongsTo(db.WuliaoState);
//WuliaoState状态表和部门表
db.WuliaoState.belongsToMany(db.dept, {
  through: "WuliaoState_dept",
  foreignKey: "WuliaoStateId",
  otherKey: "deptId"
});
db.dept.belongsToMany(db.WuliaoState, {
  through: "WuliaoState_dept",
  foreignKey: "deptId",
  otherKey: "WuliaoStateId"
});
//WuliaoStatelog记录表和user表
db.user.hasMany(db.WuliaoStatelog, {
  foreignKey: "userId",
});
db.WuliaoStatelog.belongsTo(db.user);
//WuliaoStatelog记录表和wuliao表
db.wuliao.hasMany(db.WuliaoStatelog, {
  foreignKey: "wuliaoId",
});
db.WuliaoStatelog.belongsTo(db.wuliao);
//记录表和WuliaoState表
db.WuliaoState.hasMany(db.WuliaoStatelog, {
  foreignKey: "oldstateid"
});
db.WuliaoState.hasMany(db.WuliaoStatelog, {
  foreignKey: "newstateid"
});
//记录表和操作类型表
db.operate.hasMany(db.WuliaoStatelog, {
  foreignKey: "operateId",
});


//danwei表和DanweiState状态表
db.DanweiState.hasMany(db.danwei);
db.danwei.belongsTo(db.DanweiState);
//DanweiState状态表和部门表
db.DanweiState.belongsToMany(db.dept, {
  through: "DanweiState_dept",
  foreignKey: "DanweiStateId",
  otherKey: "deptId"
});
db.dept.belongsToMany(db.DanweiState, {
  through: "DanweiState_dept",
  foreignKey: "deptId",
  otherKey: "DanweiStateId"
});
//DanweiStatelog记录表和user表
db.user.hasMany(db.DanweiStatelog, {
  foreignKey: "userId",
});
db.DanweiStatelog.belongsTo(db.user);
//DanweiStatelog记录表和danwei表
db.danwei.hasMany(db.DanweiStatelog, {
  foreignKey: "danweiId",
});
db.DanweiStatelog.belongsTo(db.danwei);
//记录表和DanweiState表
db.DanweiState.hasMany(db.DanweiStatelog, {
  foreignKey: "oldstateid"
});
db.DanweiState.hasMany(db.DanweiStatelog, {
  foreignKey: "newstateid"
});
//记录表和操作类型表
db.operate.hasMany(db.DanweiStatelog, {
  foreignKey: "operateId",
});

//wuliaotype表和WuliaoTypeState状态表
db.WuliaoTypeState.hasMany(db.wuliaotype);
db.wuliaotype.belongsTo(db.WuliaoTypeState);
//WuliaoTypeState状态表和部门表
db.WuliaoTypeState.belongsToMany(db.dept, {
  through: "WuliaoTypeState_dept",
  foreignKey: "WuliaoTypeStateId",
  otherKey: "deptId"
});
db.dept.belongsToMany(db.WuliaoTypeState, {
  through: "WuliaoTypeState_dept",
  foreignKey: "deptId",
  otherKey: "WuliaoTypeStateId"
});
//WuliaoTypeStatelog记录表和user表
db.user.hasMany(db.WuliaoTypeStatelog, {
  foreignKey: "userId",
});
db.WuliaoTypeStatelog.belongsTo(db.user);
//WuliaoStatelog记录表和wuliao表
db.wuliaotype.hasMany(db.WuliaoTypeStatelog, {
  foreignKey: "wuliaotypeId",
});
db.WuliaoTypeStatelog.belongsTo(db.wuliaotype);
//记录表和WuliaoTypeState表
db.WuliaoTypeState.hasMany(db.WuliaoTypeStatelog, {
  foreignKey: "oldstateid"
});
db.WuliaoTypeState.hasMany(db.WuliaoTypeStatelog, {
  foreignKey: "newstateid"
});
//记录表和操作类型表
db.operate.hasMany(db.WuliaoTypeStatelog, {
  foreignKey: "operateId",
});

//采购表和采购融资表
db.caigou.hasMany(db.Rongzi, {
  foreignKey: "caigouId",
});
//采购表和采购融资表
db.Fukuan.hasMany(db.Fukuanwuliao, {
  foreignKey: "fukuanId",
});
//zhizao表和add采购表
db.zhizao.hasMany(db.addwuliao, {
  foreignKey: "zhizaoId",
});
//jindu表和采购表
db.jindu.hasMany(db.addjinduwuliao, {
  foreignKey: "jinduId",
});
//jianzhu表和add采购表
db.jianzhu.hasMany(db.Addjianzhuwuliao, {
  foreignKey: "jianzhuId",
});

//fukuan表和FukuanState状态表
db.FukuanState.hasMany(db.Fukuan);
db.Fukuan.belongsTo(db.FukuanState);
//FukuanState状态表和部门表
db.FukuanState.belongsToMany(db.dept, {
  through: "FukuanState_dept",
  foreignKey: "FukuanStateId",
  otherKey: "deptId"
});
db.dept.belongsToMany(db.FukuanState, {
  through: "FukuanState_dept",
  foreignKey: "deptId",
  otherKey: "FukuanStateId"
});
//FukuanStatelog记录表和user表
db.user.hasMany(db.FukuanStatelog, {
  foreignKey: "userId",
});
db.FukuanStatelog.belongsTo(db.user);
//FukuanStatelog记录表和Fukuan表
db.Fukuan.hasMany(db.FukuanStatelog, {
  foreignKey: "fukuanId",
});
db.FukuanStatelog.belongsTo(db.Fukuan);
//记录表和FukuanState表
db.FukuanState.hasMany(db.FukuanStatelog, {
  foreignKey: "oldstateid"
});
db.FukuanState.hasMany(db.FukuanStatelog, {
  foreignKey: "newstateid"
});
//记录表和操作类型表
db.operate.hasMany(db.FukuanStatelog, {
  foreignKey: "operateId",
});
//图片表和采购表
db.caigou.hasMany(db.CaigouImage, {
  foreignKey: "caigouId",
});
db.CaigouImage.belongsTo(db.caigou);
//图片表和付款表
db.Fukuan.hasMany(db.FukuanImage, {
  foreignKey: "fukuanId",
});
db.FukuanImage.belongsTo(db.Fukuan);
//图片表和付款表
db.huankuan.hasMany(db.HuankuanImage, {
  foreignKey: "huankuanId",
});
db.HuankuanImage.belongsTo(db.huankuan);



//这是为了在中间件里面验证user的role是否存在，这样写是不对的，应该根据数据库里的内容验证，而不是根据这个提前定义好的静态数组
//db.ROLES = ["user", "admin", "moderator"];
module.exports = db;