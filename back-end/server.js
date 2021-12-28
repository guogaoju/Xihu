const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const multer = require("multer");
const moment = require('moment');
const fs=require('fs');
const path=require('path');

global.__basedir = __dirname;

app.use(express.urlencoded({ extended: true }));

app.use(express.static('./resources/static/assets/uploads'));
app.use(express.static('./resources/static/assets/img'));
app.use(express.static('./resources/static/assets/imgs'));
const db = require("./app/models");
const { response } = require("express");
db.sequelize.sync().then(() =>{
  initial();
});
const User = db.User;
const Role = db.role;
const Dept = db.dept;
const QiyeState = db.QiyeState;
const operate = db.operate;
const QiyepingjiState = db.QiyepingjiState;
const FinanceState = db.FinanceState;
const FangwenState = db.FangwenState;
const CailiaoState = db.CailiaoState;
const PingjiState = db.PingjiState;
const corefirmState = db.corefirmState;
const JianzhuState = db.JianzhuState;
const ZhizaoState = db.ZhizaoState;
const CaigouState = db.CaigouState;
const HuankuanState = db.HuankuanState;
const JinduState = db.JinduState;
const RukuState = db.RukuState;
const ChukuState = db.ChukuState;
const KucunState = db.KucunState;
const WuliaoState = db.WuliaoState;
const WuliaoTypeState = db.WuliaoTypeState;
const DanweiState = db.DanweiState  ;
const Daiban = db.Daiban  ;
const Code = db.Code  ;
const Fukuan = db.Fukuan  ;
const FukuanState = db.FukuanState  ;
function initial() {
  // User.create({
  //   id: 1,
  //   name: "超级管理员",
  //   username:"admin",
  //   email:"15036954258@qq.com",
  //   password:"123456",
  // })
  Role.create({
    id: 1,
    name: "user"
  });
 
  Role.create({
    id: 2,
    name: "datav_admin"
  });
 
  Role.create({
    id: 3,
    name: "admin"
  });

  Dept.create({
    id: 1,
    name: "风控部"
  });
  Dept.create({
    id: 2,
    name: "财务部"
  });
  Dept.create({
    id: 3,
    name: "集采部"
  });
  Dept.create({
    id: 5,
    name: "董事长办公室"
  });
  Dept.create({
    id: 6,
    name: "法务部"
  });
  Dept.create({
    id: 7,
    name: "研发部"
  });
  Dept.create({
    id: 8,
    name: "信融部"
  });
  operate.create({
    id:1,
    operate_name: "新增",
  });
  operate.create({
    id:2,
    operate_name: "修改",
  });
  operate.create({
    id:3,
    operate_name: "删除",
  });
  operate.create({
    id:4,
    operate_name: "审批流程",
  });
  operate.create({
    id:5,
    operate_name: "审批拒绝",
  });
  QiyeState.create({
    id:1,
    nodeName: "提交",
    nodebutton: "提交",
    // nextStateid: 2,
    lastone:0
  }).then(data=>{
    data.setDepts([1]).then(()=>{
    })
  });
  QiyepingjiState.create({
    id:1,
    nodeName: "提交",
    nodebutton: "审核",
    nextStateid: 2,
    lastone:0,
    display:1
  }).then(data=>{
    data.setDepts([1]).then(()=>{
    })
  });
  QiyepingjiState.create({
    id:2,
    nodeName: "风控审核",
    nodebutton: "完成",
    // nextStateid: 3,
    lastone:1,
    display:0
  }).then(data=>{
    data.setDepts([1]).then(()=>{
    })
  });
  QiyepingjiState.create({
    id:3,
    nodeName: "已拒绝",
    nodebutton: "驳回",
    // nextStateid: 3,
    display:1
  }).then(data=>{
    data.setDepts([1]).then(()=>{
    })
  });
  FinanceState.create({
    id:1,
    nodeName: "提交",
    nodebutton: "提交",
    // nextStateid: 2,
    lastone:0
  }).then(data=>{
    data.setDepts([1]).then(()=>{
    })
  });
  FangwenState.create({
    id:1,
    nodeName: "提交",
    nodebutton: "提交",
    // nextStateid: 2,
    lastone:0
  }).then(data=>{
    data.setDepts([1]).then(()=>{
    })
  });
  CailiaoState.create({
    id:1,
    nodeName: "集采发起",
    nodebutton: "审核",
    nextStateid: 2,
    lastone:0,
    display:0
  }).then(data=>{
    data.setDepts([3]).then(()=>{
    })
  });
  CailiaoState.create({
    id:2,
    nodeName: "风控审核",
    nodebutton: "已核对",
    nextStateid: 3,
    lastone:0,
    display:0
  }).then(data=>{
    data.setDepts([1]).then(()=>{
    })
  });
  CailiaoState.create({
    id:3,
    nodeName: "项目负责人核对",
    nodebutton: "完成",
    lastone:1,
    display:0
  }).then(data=>{
    data.setDepts([8]).then(()=>{
    })
  });;
  CailiaoState.create({
    id:4,
    nodeName: "已拒绝",
    nodebutton: "驳回",
    display:1
  }).then(data=>{
    data.setDepts([1]).then(()=>{
    })
  });;
  PingjiState.create({
    id:1,
    nodeName: "提交",
    nodebutton: "审核",
    nextStateid: 2,
    lastone:0,
    display:0
  }).then(data=>{
    data.setDepts([1]).then(()=>{
    })
  });
  PingjiState.create({
    id:2,
    nodeName: "风控审核",
    nodebutton: "完成",
    // nextStateid: 3,
    lastone:1,
    display:0
  }).then(data=>{
    data.setDepts([1]).then(()=>{
    })
  });
  PingjiState.create({
    id:3,
    nodeName: "已拒绝",
    nodebutton: "驳回",
    // nextStateid: 3,
    display:1
  }).then(data=>{
    data.setDepts([1]).then(()=>{
    })
  });
  corefirmState.create({
    id:1,
    nodeName: "信融发起",
    nodebutton: "完成",
    lastone:0
  }).then(data=>{
    data.setDepts([1]).then(()=>{
    })
  });
  JianzhuState.create({
    id:1,
    nodeName: "信融发起",
    nodebutton: "确认",
    nextStateid: 2,
    lastone:0
  }).then(data=>{
    data.setDepts([8]).then(()=>{
    })
  });
  // JianzhuState.create({
  //   id:2,
  //   nodeName: "集采确认",
  //   nodebutton: "审核",
  //   nextStateid: 3,
  //   lastone:1
  // }).then(data=>{
  //   data.setDepts().then(()=>{
  //   })
  // });
  // JianzhuState.create({
  //   id:3,
  //   nodeName: "风控审核",
  //   nodebutton: "通过",
  //   nextStateid: 3,
  //   lastone:1
  // }).then(data=>{
  //   data.setDepts().then(()=>{
  //   })
  // });
  // JianzhuState.create({
  //   id:4,
  //   nodeName: "项目负责人核对",
  //   nodebutton: "完成",
  //   lastone:1
  // }).then(data=>{
  //   data.setDepts().then(()=>{
  //   })
  // });
  ZhizaoState.create({
    id:1,
    nodeName: "信融发起",
    nodebutton: "提交",
    lastone:0
  }).then(data=>{
    data.setDepts([8]).then(()=>{
    })
  });
  // ZhizaoState.create({
  //   id:2,
  //   nodeName: "信融审核",
  //   nodebutton: "审核",
  //   // nextStateid: 3,
  //   lastone:1
  // }).then(data=>{
  //   data.setDepts([2]).then(()=>{
  //   })
  // });
  CaigouState.create({
    id:1,
    nodeName: "采购申请",
    nodebutton: "审核",
    nextStateid: 2,
    lastone:0,
    display:0
  }).then(data=>{
    data.setDepts([3]).then(()=>{
    })
  });
  CaigouState.create({
    id:2,
    nodeName: "风控审核",
    nodebutton: "通过",
    nextStateid: 3,
    lastone:0,
    display:0
  }).then(data=>{
    data.setDepts([1]).then(()=>{
    })
  });
  CaigouState.create({
    id:3,
    nodeName: "项目负责人确认",
    nodebutton: "确人",
    lastone:0,
    display:0
  }).then(data=>{
    data.setDepts([8]).then(()=>{
    })
  });;
  // CaigouState.create({
  //   id:4,
  //   nodeName: "付款申请",
  //   nodebutton: "审核",
  //   nextStateid: 5,
  //   lastone:0,
  //   display:0
  // }).then(data=>{
  //   data.setDepts([3]).then(()=>{
  //   })
  // });
  // CaigouState.create({
  //   id:5,
  //   nodeName: "风控付款审核",
  //   nodebutton: "同意",
  //   nextStateid: 6,
  //   lastone:0,
  //   display:0
  // }).then(data=>{
  //   data.setDepts([1]).then(()=>{
  //   })
  // });
  // CaigouState.create({
  //   id:6,
  //   nodeName: "项目负责人同意付款",
  //   nodebutton: "完成",
  //   lastone:1,
  //   display:0
  // }).then(data=>{
  //   data.setDepts([8]).then(()=>{
  //   })
  // });;
  CaigouState.create({
    id:7,
    nodeName: "已拒绝",
    nodebutton: "驳回",
    display:1
  }).then(data=>{
    data.setDepts([1]).then(()=>{
    })
  });;
  FukuanState.create({
    id:0,
    nodeName: "付款申请",
    nodebutton: "申请",
    nextStateid: 1,
    lastone:0,
    display:1
  }).then(data=>{
    data.setDepts([3]).then(()=>{
    })
  });
FukuanState.create({
    id:1,
    nodeName: "付款申请",
    nodebutton: "审核",
    nextStateid: 2,
    lastone:0,
    display:0
  }).then(data=>{
    data.setDepts([3]).then(()=>{
    })
  });
  FukuanState.create({
    id:2,
    nodeName: "风控付款审核",
    nodebutton: "同意",
    nextStateid: 3,
    lastone:0,
    display:0
  }).then(data=>{
    data.setDepts([1]).then(()=>{
    })
  });
  FukuanState.create({
    id:3,
    nodeName: "项目负责人同意付款",
    nodebutton: "完成",
    lastone:1,
    display:0
  }).then(data=>{
    data.setDepts([8]).then(()=>{
    })
    FukuanState.create({
      id:4,
      nodeName: "已拒绝",
      nodebutton: "驳回",
      display:1
    }).then(data=>{
      data.setDepts([1]).then(()=>{
      })
    });;
})
  HuankuanState.create({
    id:1,
    nodeName: "信融发起",
    nodebutton: "已知晓",
    nextStateid: 2,
    lastone:0,
  }).then(data=>{
    data.setDepts([8]).then(()=>{
    })
  });
  HuankuanState.create({
    id:2,
    nodeName: "风控知晓",
    nodebutton: "已知晓",
    nextStateid: 3,
    lastone:0,
  }).then(data=>{
    data.setDepts([1]).then(()=>{
    })
  });
  HuankuanState.create({
    id:3,
    nodeName: "项目负责人知晓",
    nodebutton: "确认",
    nextStateid: 4,
    lastone:0,
  }).then(data=>{
    data.setDepts([8]).then(()=>{
    })
  });
  HuankuanState.create({
    id:4,
    nodeName: "财务收款",
    nodebutton: "完成",
    lastone:1,
  }).then(data=>{
    data.setDepts([2]).then(()=>{
    })
  });;
  JinduState.create({
    id:1,
    nodeName: "提交",
    nodebutton: "提交",
    // nextStateid: 2,
    lastone:0
  }).then(data=>{
    data.setDepts([1]).then(()=>{
    })
  });
  ChukuState.create({
    id:1,
    nodeName: "提交",
    nodebutton: "提交",
    // nextStateid: 2,
    lastone:0
  }).then(data=>{
    data.setDepts([1]).then(()=>{
    })
  });
  RukuState.create({
    id:1,
    nodeName: "提交",
    nodebutton: "提交",
    // nextStateid: 2,
    lastone:0
  }).then(data=>{
    data.setDepts([1]).then(()=>{
    })
  });
  KucunState.create({
    id:1,
    nodeName: "提交",
    nodebutton: "提交",
    // nextStateid: 2,
    lastone:0
  }).then(data=>{
    data.setDepts([1]).then(()=>{
    })
  });
  WuliaoState.create({
    id:1,
    nodeName: "提交",
    nodebutton: "提交",
    // nextStateid: 2,
    lastone:0
  }).then(data=>{
    data.setDepts([1]).then(()=>{
    })
  });
  DanweiState.create({
    id:1,
    nodeName: "提交",
    nodebutton: "提交",
    // nextStateid: 2,
    lastone:0
  }).then(data=>{
    data.setDepts([1]).then(()=>{
    })
  });
  WuliaoTypeState.create({
    id:1,
    nodeName: "提交",
    nodebutton: "提交",
    // nextStateid: 2,
    lastone:0
  }).then(data=>{
    data.setDepts([1]).then(()=>{
    })
  });
  Daiban.create({
    id:1,
    deptId: 1,
    name: "还款管理",
    link: "/HuanKuan",
    sum:0
  });
  Daiban.create({
    id:2,
    deptId: 3,
    name: "还款管理",
    link: "/HuanKuan",
    sum:0
  });
  Daiban.create({
    id:3,
    deptId: 8,
    name: "还款管理",
    link: "/HuanKuan",
    sum:0
  });
  Daiban.create({
    id:4,
    deptId: 2,
    name: "还款管理",
    link: "/HuanKuan",
    sum:0
  });
  Daiban.create({
    id:5,
    deptId: 1,
    name: "采购管理",
    link: "/CaiGou",
    sum:0
  });
  Daiban.create({
    id:6,
    deptId: 3,
    name: "采购管理",
    link: "/CaiGou",
    sum:0
  });
  Daiban.create({
    id:7,
    deptId: 8,
    name: "采购管理",
    link: "/CaiGou",
    sum:0
  });
  Daiban.create({
    id:8,
    deptId: 1,
    name: "企业评级",
    link: "/QiyePingji",
    sum:0
  });
  Daiban.create({
    id:9,
    deptId: 1,
    name: "供应商评级",
    link: "/Pingji",
    sum:0
  });
  Daiban.create({
    id:10,
    deptId: 1,
    name: "付款管理",
    link: "/FuKuan",
    sum:0
  });
  Daiban.create({
    id:11,
    deptId: 3,
    name: "付款管理",
    link: "/FuKuan",
    sum:0
  });
  Daiban.create({
    id:12,
    deptId: 8,
    name: "付款管理",
    link: "/FuKuan",
    sum:0
  });
  Code.create({
    name: "采购管理",
    code_name: "CGGL",
    sum:0
  });
  Code.create({
    name: "企业信息",
    code_name: "QYXX",
    sum:0
  });
  Code.create({
    name: "企业评级",
    code_name: "QYPJ",
    sum:0
  });
  Code.create({
    name: "材料供应商",
    code_name: "CLGYS",
    sum:0
  });
  Code.create({
    name: "供应商评级",
    code_name: "GYSPJ",
    sum:0
  });
  Code.create({
    name: "核心企业",
    code_name: "HXQY",
    sum:0
  });
  Code.create({
    name: "建筑项目",
    code_name: "JZXM",
    sum:0
  });
  Code.create({
    name: "还款管理",
    code_name: "HKGL",
    sum:0
  });
  Code.create({
    name: "访问记录",
    code_name: "FWJL",
    sum:0
  });
  Code.create({
    name: "财务数据",
    code_name: "CWSJ",
    sum:0
  });
  Code.create({
    name: "制造项目",
    code_name: "ZZXM",
    sum:0
  });
  Code.create({
    name: "进度更新",
    code_name: "JDGX",
    sum:0
  });
  Code.create({
    name: "出库记录",
    code_name: "CKJL",
    sum:0
  });
  Code.create({
    name: "入库记录",
    code_name: "RKJL",
    sum:0
  });
  Code.create({
    name: "库存信息",
    code_name: "KCXX",
    sum:0
  });
  Code.create({
    name: "物料资料",
    code_name: "WLZL",
    sum:0
  });
  Code.create({
    name: "计量单位",
    code_name: "JLDW",
    sum:0
  });
  Code.create({
    name: "物料类型",
    code_name: "WLLX",
    sum:0
  });
  Code.create({
    name: "付款管理",
    code_name: "FKGL",
    sum:0
  });
}
//清空数据库 
// db.sequelize.sync({ force: true }).then(() => {
//       console.log("Drop and re-sync db.");
//     });

var corsOptions = {
  //local
  origin: "http://localhost:8082"
  //server
  //origin: "http://106.15.5.29:8081"
};
app.use('/uploads', express(__dirname + '/uploads'))
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
// app.get("/", (req, res) => {
//   res.json({ message: "Welcome to bezkoder application." });
// });
require("./app/routes/core.routes")(app);
require("./app/routes/Pingji.routes")(app);
require("./app/routes/Cailiaogys.routes")(app);
require("./app/routes/Qiye.routes")(app);
require("./app/routes/Fangwen.routes")(app);
require("./app/routes/Qiyepingji.routes")(app);
require("./app/routes/Finance.routes")(app);
require("./app/routes/Wuliao.routes")(app);
require("./app/routes/Danwei.routes")(app);
require("./app/routes/WuliaoType.routes")(app);
// require("./app/routes/web.js")(app);
require("./app/routes/Jianzhu.routes")(app);
require("./app/routes/Addwuliao.routes")(app);
require("./app/routes/Zhizao.routes")(app);
require("./app/routes/Caigou.routes")(app);
require("./app/routes/CaiGouwuliao.routes")(app);
require("./app/routes/HuanKuan.routes")(app);
require("./app/routes/Jindu.routes")(app);
require("./app/routes/Addjinduwuliao.routes")(app);
require("./app/routes/Ruku.routes")(app);
require("./app/routes/Chuku.routes")(app);
require("./app/routes/Kucun.routes")(app);
require("./app/routes/user.routes")(app);
require("./app/routes/auth.routes")(app);
require("./app/routes/general.routes")(app);
require("./app/routes/Bumen.routes")(app);
require("./app/routes/Dept.routes")(app);
require("./app/routes/Role.routes")(app);
require("./app/routes/QiyeState.routes")(app);
require("./app/routes/Statelog.routes")(app);
require("./app/routes/operateType.routes")(app);
require("./app/routes/QiyepingjiState.routes")(app);
require("./app/routes/QiyepingjiStatelog.routes")(app);
require("./app/routes/FinanceStatelog.routes")(app);
require("./app/routes/FinanceState.routes")(app);
require("./app/routes/FangwenState.routes")(app);
require("./app/routes/FangwenStatelog.routes")(app);
require("./app/routes/CailiaoState.routes")(app);
require("./app/routes/CailiaoStatelog.routes")(app);
require("./app/routes/PingjiStatelog.routes")(app);
require("./app/routes/PingjiState.routes")(app);
require("./app/routes/corefirmState.routes")(app);
require("./app/routes/corefirmStatelog.routes")(app);
require("./app/routes/JianzhuStatelog.routes")(app);
require("./app/routes/JianzhuState.routes")(app);
require("./app/routes/ZhizaoState.routes")(app);
require("./app/routes/ZhizaoStatelog.routes")(app);
require("./app/routes/CaigouStatelog.routes")(app);
require("./app/routes/CaigouState.routes")(app);
require("./app/routes/HuankuanState.routes")(app);
require("./app/routes/HuankuanStatelog.routes")(app);
require("./app/routes/JinduStatelog.routes")(app);
require("./app/routes/JinduState.routes")(app);
require("./app/routes/RukuState.routes")(app);
require("./app/routes/RukuStatelog.routes")(app);
require("./app/routes/ChukuState.routes")(app);
require("./app/routes/ChukuStatelog.routes")(app);
require("./app/routes/KucunStatelog.routes")(app);
require("./app/routes/KucunState.routes")(app);
require("./app/routes/WuliaoState.routes")(app);
require("./app/routes/WuliaoStatelog.routes")(app);
require("./app/routes/DanweiStatelog.routes")(app);
require("./app/routes/DanweiState.routes")(app);
require("./app/routes/WuliaoTypeStatelog.routes")(app);
require("./app/routes/WuliaoTypeState.routes")(app);
require("./app/routes/Rongzi.routes")(app);
require("./app/routes/Addjianzhuwuliao.routes")(app);
require("./app/routes/Daiban.routes")(app);
require("./app/routes/Code.routes")(app);
require("./app/routes/Image.routes")(app);
require("./app/routes/FukuanState.routes")(app);
require("./app/routes/FukuanStatelog.routes")(app);
require("./app/routes/Fukuan.routes")(app);
require("./app/routes/Fukuanwuliao.routes")(app);
require("./app/routes/CaigouImage.routes")(app);
require("./app/routes/FukuanImage.routes")(app);
require("./app/routes/HuankuanImage.routes")(app);
require("./app/routes/Daikuan.routes")(app);
require("./app/routes/Dange.routes")(app);
require("./app/routes/RongziB.routes")(app);
require("./app/routes/XinyongA.routes")(app);
require("./app/routes/Alpha.routes")(app);
require("./app/routes/Beta.routes")(app);
// set port, listen for requests
//local
const PORT = process.env.PORT || 8080;
//server
//const PORT = process.env.PORT || 8082;
const schedule = require('node-schedule');

// 定义规则
let rule = new schedule.RecurrenceRule();
rule.hour =0;
rule.minute =0;
rule.second =0; //每天0点更新

// 启动任务
let job = schedule.scheduleJob(rule, () => {
  console.log(new Date());
  Code.update({
    sum: 0
  }, {
    where: { id: 1 }
  })
  Code.update({
    sum: 0
  }, {
    where: { id: 2 }
  })
  Code.update({
    sum: 0
  }, {
    where: { id: 3 }
  })
  Code.update({
    sum: 0
  }, {
    where: { id: 4 }
  })
  Code.update({
    sum: 0
  }, {
    where: { id: 5 }
  })
  Code.update({
    sum: 0
  }, {
    where: { id: 6 }
  })
  Code.update({
    sum: 0
  }, {
    where: { id: 7 }
  })
  Code.update({
    sum: 0
  }, {
    where: { id: 8 }
  })
  Code.update({
    sum: 0
  }, {
    where: { id: 9 }
  })
  Code.update({
    sum: 0
  }, {
    where: { id: 10 }
  })
  Code.update({
    sum: 0
  }, {
    where: { id: 11 }
  })
  Code.update({
    sum: 0
  }, {
    where: { id: 12 }
  })
  Code.update({
    sum: 0
  }, {
    where: { id: 13 }
  })
  Code.update({
    sum: 0
  }, {
    where: { id: 14 }
  })
  Code.update({
    sum: 0
  }, {
    where: { id: 15 }
  })
  Code.update({
    sum: 0
  }, {
    where: { id: 16 }
  })
  Code.update({
    sum: 0
  }, {
    where: { id: 17 }
  })
  Code.update({
    sum: 0
  }, {
    where: { id: 18 }
  })
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});