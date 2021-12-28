<template>
<div>
   <el-breadcrumb style="padding-top: 10px;" separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/Dao' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>客户管理</el-breadcrumb-item>
      <el-breadcrumb-item>企业信息管理</el-breadcrumb-item>
      <el-breadcrumb-item>企业访问记录</el-breadcrumb-item>
    </el-breadcrumb>
  <!-- 客户管理/企业信息管理/企业访问记录 -->
   <el-row style="margin : 8px;">
      <el-col :span="1.5">
        <el-button type="warning" v-show="isshow1" @click="openFrom()">添加</el-button>
      </el-col>
    </el-row>
    <el-row style="margin : 8px;">
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="全部数据" name="first">
            <el-table
            @row-click="handdle"
              :data="tableData.filter(data => (!filterCode || data.code.toString().toLowerCase().includes(filterCode.toString().toLowerCase()))
                &(!filterQiye_name || data.qiye_name.toLowerCase().includes(filterQiye_name.toString().toLowerCase()))
                &(!filterVisit_time || data.visit_time.toLowerCase().includes(filterVisit_time.toString().toLowerCase()))
                &(!filterRemarks || data.remarks.toLowerCase().includes(filterRemarks.toString().toLowerCase()))
                )" border style="width: 100%">
              <el-table-column min-width='170' align="center">
                      <!-- eslint-disable-next-line -->
                      <template slot="header" slot-scope="scope">
                          <el-popover placement="bottom" trigger="click">
                              <el-input v-model="filterCode"> </el-input>
                              <div slot="reference"> <label> 编号 </label> <i class='el-icon-arrow-down'> </i> </div>
                          </el-popover>
                      </template>
                      <template slot-scope="scope">
                          <div>
                              {{scope.row.code}}
                          </div>
                      </template>
              </el-table-column>
              <el-table-column min-width='70' align="center">
                      <!-- eslint-disable-next-line -->
                      <template slot="header" slot-scope="scope">
                          <el-popover placement="bottom" trigger="click">
                              <el-input v-model="filterQiye_name"> </el-input>
                              <div slot="reference"> <label> 企业名称 </label> <i class='el-icon-arrow-down'> </i> </div>
                          </el-popover>
                      </template>
                      <template slot-scope="scope">
                          <div>
                              {{scope.row.qiye_name}}
                          </div>
                      </template>
              </el-table-column>
              <el-table-column prop="visit_type" label="拜访方式" width="120" align="center" :filters="[{text:'上门', value:'上门'},{text:'电话', value:'电话'}]" :filter-method="filtervisit_type">
              </el-table-column>
              <el-table-column min-width='70' align="center">
                      <!-- eslint-disable-next-line -->
                      <template slot="header" slot-scope="scope">
                          <el-popover placement="bottom" trigger="click">
                              <el-input v-model="filterVisit_time"> </el-input>
                              <div slot="reference"> <label> 拜访时间 </label> <i class='el-icon-arrow-down'> </i> </div>
                          </el-popover>
                      </template>
                      <template slot-scope="scope">
                          <div>
                              {{scope.row.visit_time}}
                          </div>
                      </template>
              </el-table-column>
              <el-table-column prop="contract" label="是否预约" width="120" align="center" :filters="[{text:'是', value:'是'},{text:'否', value:'否'}]" :filter-method="filtercontract">
              </el-table-column>
              <el-table-column min-width='70' align="center">
                      <!-- eslint-disable-next-line -->
                      <template slot="header" slot-scope="scope">
                          <el-popover placement="bottom" trigger="click">
                              <el-input v-model="filterRemarks"> </el-input>
                              <div slot="reference"> <label> 备注 </label> <i class='el-icon-arrow-down'> </i> </div>
                          </el-popover>
                      </template>
                      <template slot-scope="scope">
                          <div>
                              {{scope.row.remarks}}
                          </div>
                      </template>
              </el-table-column>
              <el-table-column prop="nodeName" label="当前流程" width="120" align="center" :formatter="getfor">
              </el-table-column>
              <el-table-column
                fixed="right"
                label="操作"
                width="300"
                align="center">
                <template slot-scope="scope">
                  <el-button @click.stop="kanClick(scope.$index,tableData)" type="success" plain round size="small">查看</el-button>
                  <el-button type="success" @click.stop="updateClick(scope.$index,tableData)" plain round size="small">修改</el-button>
                  <el-button type="danger" @click.stop="delClick(scope.$index,tableData)" plain round size="small">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
        </el-tab-pane>
        <el-tab-pane label="待办事项" name="second">
          <el-table
            @row-click="handdle"
              :data="tableData1.filter(data => (!filterCode || data.code.toString().toLowerCase().includes(filterCode.toString().toLowerCase()))
                &(!filterQiye_name || data.qiye_name.toLowerCase().includes(filterQiye_name.toString().toLowerCase()))
                &(!filterVisit_time || data.visit_time.toLowerCase().includes(filterVisit_time.toString().toLowerCase()))
                &(!filterRemarks || data.remarks.toLowerCase().includes(filterRemarks.toString().toLowerCase()))
                )" border style="width: 100%">
              <el-table-column min-width='170' align="center">
                      <!-- eslint-disable-next-line -->
                      <template slot="header" slot-scope="scope">
                          <el-popover placement="bottom" trigger="click">
                              <el-input v-model="filterCode"> </el-input>
                              <div slot="reference"> <label> 编号 </label> <i class='el-icon-arrow-down'> </i> </div>
                          </el-popover>
                      </template>
                      <template slot-scope="scope">
                          <div>
                              {{scope.row.code}}
                          </div>
                      </template>
              </el-table-column>
              <el-table-column min-width='70' align="center">
                      <!-- eslint-disable-next-line -->
                      <template slot="header" slot-scope="scope">
                          <el-popover placement="bottom" trigger="click">
                              <el-input v-model="filterQiye_name"> </el-input>
                              <div slot="reference"> <label> 企业名称 </label> <i class='el-icon-arrow-down'> </i> </div>
                          </el-popover>
                      </template>
                      <template slot-scope="scope">
                          <div>
                              {{scope.row.qiye_name}}
                          </div>
                      </template>
              </el-table-column>
              <el-table-column prop="visit_type" label="拜访方式" width="120" align="center" :filters="[{text:'上门', value:'上门'},{text:'电话', value:'电话'}]" :filter-method="filtervisit_type">
              </el-table-column>
              <el-table-column min-width='70' align="center">
                      <!-- eslint-disable-next-line -->
                      <template slot="header" slot-scope="scope">
                          <el-popover placement="bottom" trigger="click">
                              <el-input v-model="filterVisit_time"> </el-input>
                              <div slot="reference"> <label> 拜访时间 </label> <i class='el-icon-arrow-down'> </i> </div>
                          </el-popover>
                      </template>
                      <template slot-scope="scope">
                          <div>
                              {{scope.row.visit_time}}
                          </div>
                      </template>
              </el-table-column>
              <el-table-column prop="contract" label="是否预约" width="120" align="center" :filters="[{text:'是', value:'是'},{text:'否', value:'否'}]" :filter-method="filtercontract">
              </el-table-column>
              <el-table-column min-width='70' align="center">
                      <!-- eslint-disable-next-line -->
                      <template slot="header" slot-scope="scope">
                          <el-popover placement="bottom" trigger="click">
                              <el-input v-model="filterRemarks"> </el-input>
                              <div slot="reference"> <label> 备注 </label> <i class='el-icon-arrow-down'> </i> </div>
                          </el-popover>
                      </template>
                      <template slot-scope="scope">
                          <div>
                              {{scope.row.remarks}}
                          </div>
                      </template>
              </el-table-column>
              <el-table-column prop="nodeName" label="当前流程" width="120" align="center" :formatter="getfor">
              </el-table-column>
              <el-table-column
                fixed="right"
                label="操作"
                width="300"
                align="center">
                <template slot-scope="scope">
                  <el-button @click.stop="kanClick(scope.$index,tableData)" type="success" plain round size="small">查看</el-button>
                  <el-button type="success" @click.stop="updateClick(scope.$index,tableData)" plain round size="small">修改</el-button>
                  <el-button type="danger" @click.stop="delClick(scope.$index,tableData)" plain round size="small">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
        </el-tab-pane>
      </el-tabs>
    </el-row>

  <!-- 添加弹出层 -->
  <el-dialog :title="titleMap[dialogTitle]" :visible.sync="dialogFormVisible" @close='closeDialog'>
      <el-form
        :model="addfangwen"
        status-icon :rules="rules"
        ref="addfangwen"
        label-width="100px"
        class="demo-ruleForm"
      >
      <el-row>
        <el-col :span="18">
          <el-row>
        <el-col :span="12">
          <el-form-item label="企业名称" prop="qiye_name" :label-width="formLabelWidth">
            <el-select :disabled="validated" filterable v-model="addfangwen.qiye_name" placeholder="请选择">
              <el-option v-for="item in result" :key="item.id" :label="item.register_name" :value="item.register_name"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
         <el-col :span="12">
          <el-form-item label="拜访方式" prop="visit_type" :label-width="formLabelWidth">
            <el-select :disabled="validated" v-model="addfangwen.visit_type" clearable placeholder="请选择" >
              <el-option label="电话" value="电话"></el-option>
              <el-option label="上门" value="上门"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
        <el-row>
        <el-col :span="12">
          <el-form-item label="拜访时间" prop="visit_time" :label-width="formLabelWidth">
           <el-date-picker :disabled="validated" v-model="addfangwen.visit_time" type="date" placeholder="选择日期"></el-date-picker>
          </el-form-item>
        </el-col>
         <el-col :span="12">
           <el-form-item label="是否预约" prop="contract" :label-width="formLabelWidth">
             <el-select :disabled="validated" v-model="addfangwen.contract" clearable placeholder="请选择" >
              <el-option label="是" value="是"></el-option>
              <el-option label="否" value="否"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
          <el-col :span="12">
          <el-form-item label="备注" prop="remarks" :label-width="formLabelWidth">
            <el-input :disabled="validated" v-model="addfangwen.remarks"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="当前流程" prop="nodeName" :label-width="formLabelWidth">
            <el-input :disabled="liucheng" v-model="addfangwen.nodeName"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12"><el-form-item></el-form-item></el-col> 
        <el-col :span="12">
        <el-form-item>
          <el-button type="primary" :disabled="annui" v-show="isshow" ref="buttonname" id="submitButton" @click="submit('addfangwen')">{{buttonText}}</el-button>
        </el-form-item>
         </el-col>  
      </el-row>
        </el-col>
        <el-col :span="6">
           <el-timeline>
          <el-timeline-item
            v-for="(activity, index) in activities"
            :key="index"
            :size="activity.size"
            :timestamp="activity.createdAt"
            :color="activity.color"
            >
            {{activity.nodeName}}
          </el-timeline-item>
          </el-timeline></el-col>   
      </el-row>
    </el-form>
  </el-dialog>
</div>

</template>

<script>
import authservice from "../services/auth.service"
import FangwenService from "../services/FangwenService";
import QiyeService from "../services/QiyeService";
import FangwenState from "../services/FangwenState"
import FangwenStatelog from "../services/FangwenStatelog"
import CodeService from "../services/CodeService";
  export default {
    created () {
          this.tableonload();
      },
      computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
    methods: {
      //关闭弹框的事件
    closeDialog(){
      this.buttonText="确定"
      this.isshow=true;
    },
    selectCode(){
        let date = new Date();
        let year = date.getFullYear(); // 年
        let month = (date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1) // 月
        let day = date.getDate(); // 日
        let time=`${year}${month}${day}`;
        CodeService.findByLog("访问记录").then(response=>{
            this.code=response.data.code_name+"-"+time+"-"+response.data.sum.toString().padStart(5,'0')
        })
    },
      selectState(){
         FangwenState.getAll()
        .then(response => {
          this.activities=response.data
        })
        .catch(e => {
          console.log(e);
        });
      },
      selectdept(){
           authservice.get(this.currentUser.id).then(response =>{
             this.deptId = [];
          for (var i = 0; i < response.data.depts.length; i++) {
            this.deptId.push(response.data.depts[i].id);
          }
          for (let j = 0; j < this.deptId.length; j++) {
                    let old = this.deptId[j];
                        for (var i = 0; i < this.adddept.length; i++) {
                            let pre = this.adddept[i];
                                if (pre === old) {
                                    this.isshow1=true;
                                }
                            }
                       }  
        })
      },
      handdle(row, event, column) { 
        this.dialogFormVisible=true
        this.annui=false
        this.isshow=false;
        this.liucheng=true,
        this.dialogTitle = "examine";
          this.pa=row.id;
           FangwenService.get(this.pa)
         .then(response => {
          this.qiyeid=this.pa
          this.nextState=response.data.FangwenState.nextStateid
          this.oldStateid=response.data.FangwenState.id
                this.addfangwen=response.data;
                this.addfangwen.nodeName = response.data.FangwenState.nodeName;
                this.validated=true;
                this.buttonText = response.data.FangwenState.nodebutton;
               
              })
              .catch(e => {
                console.log(e);
              });
              this.selectStateAndLogs();
       },
       addStatelog(){
         var data = {
              userId:this.currentUser.id,
              fangwenId: this.qiyeid,
              oldstateid: this.oldStateid,
              newstateid:this.nextState,
              operateId:4
              }
              FangwenStatelog.create(data).then(response => {
        })
        .catch(e => {
          console.log(e);
        });
      },
      updateState(index,row){
        var data = {
           FangwenStateId:this.nextState
          }
          FangwenService.update(this.pa,data)
        .then(response => {
          this.tableonload();
        })
        .catch(e => {
          console.log(e);
        });
       },
       selectStateAndLogs(){
        FangwenState.getAll()
        .then(response => {
          this.activities=response.data
          this.selectlogs();
        })
        .catch(e => {
        });
      },
      getfor(row,column){
            return row.FangwenState.nodeName;
          },
      async tableonload(){
        FangwenService.getAll()
        .then(response => {
          this.tableData = response.data;
          this.selectdept();
          this.selectCode();
          // console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
      },
       openFrom(){
        this.addfangwen={},
        this.dialogFormVisible=true
        this.selectState();
          this.validated=false;
          this.liucheng=true,
          this.annui=false;
        this.dialogTitle = "addData";
        QiyeService.getAll()
        .then(response => {
          this.result = response.data;
        })
        .catch(e => {
          console.log(e);
        });
       },
        addservice(){
          this.dialogFormVisible=false; 
          var data = {
            code:this.code,
            qiye_name:this.addfangwen.qiye_name,
            visit_type:this.addfangwen.visit_type,
            visit_time:this.addfangwen.visit_time,
            contract:this.addfangwen.contract,
            remarks:this.addfangwen.remarks,
            nodeName:this.addfangwen.nodeName
        }    
        FangwenService.create(data)
        .then(response => {
          this.tableonload();
          var data = {
              userId:this.currentUser.id,
              fangwenId: response.data.id,
              oldstateid: 1,
              newstateid:response.data.FangwenStateId,
              operateId:1,
              }
              FangwenStatelog.create(data).then(response => {
              }).catch(e => {
                console.log(e);
              });
        })
        .catch(e => {
          console.log(e);
        });
       },
        submit(addfangwen){
          this.$refs[addfangwen].validate((valid) => {
          if (this.dialogTitle ==  "addData"&&valid ) {
        this.addservice();
      } else if(this.dialogTitle ==  "updataData") {
        this.updateservice();
      }else if(this.dialogTitle ==  "kanData"){
        this.kanClick();
      }else if(this.dialogTitle ==  "examine"&&valid){
        this.dialogFormVisible=false;
        this.updateState();
        this.addStatelog();
      }else{
        return false
      }
        });
        },
        selectlogs(){
        let fangwenId=this.pa
          FangwenStatelog.findByLog(fangwenId).then(response => {
            console.log(response.data)
              for (let j = 0; j < this.activities.length; j++) {
                    let old = this.activities[j].id;
                        for (var i = 0; i < response.data.length; i++) {
                            let pre = response.data[i].newstateid;
                                if (pre === old) {
                                    this.activities[j].color='#0bbd87'
                                     this.activities[j].createdAt=response.data[j].createdAt  
                                }
                            }
                       }
                       this.$forceUpdate();
        })
        .catch(e => {
          console.log(e);
        });   
      },
       kanClick(index,row){
         authservice.get(this.currentUser.id).then(response =>{
             this.deptId = [];
          for (var i = 0; i < response.data.depts.length; i++) {
            this.deptId.push(response.data.depts[i].id);
          }
          let xunhuan=false;
          for (let j = 0; j < this.kandept.length; j++) {
                    let old = this.kandept[j];
                        for (var i = 0; i < this.deptId.length; i++) {
                            let pre = this.deptId[i];
                                if (pre === old) {
                                    xunhuan=true
                                }
                            }
                       }
                       if(xunhuan==true){
                                    this.dialogFormVisible=true
                                    this.dialogTitle = "kanData";
                                    this.annui=true;
                                    this.liucheng=true,
                                    this.validated=true;
                                    this.pa=this.tableData[index].id;
                                    this.selectStateAndLogs();
                                    FangwenService.get(this.pa)
                                    .then(response => {
                                          this.addfangwen=response.data;
                                          this.addfangwen.nodeName = response.data.FangwenState.nodeName; 
                                        })
                                        .catch(e => {
                                          console.log(e);
                                        });
                       }
                       else{
                              alert("你所在的部门没有权限进行该操作")
                                    }                 
        })
       },
        updateClick(index,row){
          authservice.get(this.currentUser.id).then(response =>{
             this.deptId = [];
          for (var i = 0; i < response.data.depts.length; i++) {
            this.deptId.push(response.data.depts[i].id);
          }
          let xunhuan=false;
          for (let j = 0; j < this.updatedept.length; j++) {
                    let old = this.updatedept[j];
                        for (var i = 0; i < this.deptId.length; i++) {
                            let pre = this.deptId[i];
                                if (pre === old) {
                                    xunhuan=true
                                }
                            }
                       }
                       if(xunhuan==true){
                                    this.dialogFormVisible=true;
                                    this.dialogTitle = "updataData"; 
                                    this.annui=false;
                                    this.validated=false;
                                    this.liucheng=true, 
                                    this.pa=this.tableData[index].id;
                                    this.selectStateAndLogs();
                                    FangwenService.get(this.pa)
                                    .then(response => {
                                          this.addfangwen=response.data;
                                          this.addfangwen.nodeName = response.data.FangwenState.nodeName;
                                        })
                                        .catch(e => {
                                          console.log(e);
                                        });
                       }
                       else{
                              alert("你所在的部门没有权限进行该操作")
                                    }               
        })
       },
       updateservice(){
              this.dialogFormVisible=false;
          var data = {
            id:this.addfangwen.id,
            qiye_name:this.addfangwen.qiye_name,
            visit_type:this.addfangwen.visit_type,
            visit_time:this.addfangwen.visit_time,
            contract:this.addfangwen.contract,
            remarks:this.addfangwen.remarks,
            nodeName:this.addfangwen.nodeName
        }
          FangwenService.update(data.id,data)
        .then(response => {
          this.tableonload();
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
       },
       delClickconfirm(index,row){
         let pa=this.tableData[index].id;
              FangwenService.delete(pa)
              .then(response => {
               var data = {
              userId:this.currentUser.id,
              fangwenId: pa,
              oldstateid: 1,
              newstateid:1,
              operateId:3,
              }
              FangwenStatelog.create(data).then(response => {
              }).catch(e => {
                console.log(e);
              });
              this.tableonload();
              })
              .catch(e => {
                console.log(e);
              });
       },
       delClick(index,row){   
          authservice.get(this.currentUser.id).then(response =>{
             this.deptId = [];
          for (var i = 0; i < response.data.depts.length; i++) {
            this.deptId.push(response.data.depts[i].id);
          }
          let xunhuan=false;
          for (let j = 0; j < this.deletedept.length; j++) {
                    let old = this.deletedept[j];
                        for (var i = 0; i < this.deptId.length; i++) {
                            let pre = this.deptId[i];
                                if (pre === old) {
                                    xunhuan=true
                                }
                            }
                       }
                       if(xunhuan==true){
                                    this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                                    confirmButtonText: '确定',
                                    cancelButtonText: '取消',
                                    type: 'warning'
                                    }).then(() => {
                                    this.delClickconfirm(index);
                                    this.$message({
                                      type: 'success',
                                      message: '删除成功!'
                                    });
                                    }).catch(() => {
                                    this.$message({
                                      type: 'info',
                                      message: '已取消删除'
                                    });          
                                  });
                       }
                       else{
                              alert("你所在的部门没有权限进行该操作")
                                    }                    
        })
       },
      handleClick(row) {
      },
      filterCurrent(value, row){
            return row.current_process === value;
        },
      filtervisit_type(value, row){
            return row.visit_type === value;
        },
      filtercontract(value, row){
            return row.contract === value;
        },
    },

    data() {
      return {
        code:"",
        tableData1:[],
        activeName: 'first',
        deletedept:[1,3,8],
        updatedept:[1,3,8],
        kandept:[1,3,8],
        isshow1:false,
        adddept:[1,3,8],
        deptId:[],
        pa:'',
        buttonText: '确定',
        qiyeid:'',
        oldstateid:'',
        oldStateid:'',
        nextState:'',
        annui:'',
        isshow:true,
        liucheng:false,
        validated:false,
        activities: [],
         titleMap: {
        addData: "添加数据",
        updataData: "修改数据",
        kanData: "查看数据",
        examine: "访问信息",
      },
      dialogTitle:"",
        TravelType:1,
        formLabelWidth: "100px",
        rules:{
          qiye_name: [
            { required: true, message: '请输入企业名称', trigger: 'blur' },
          ],
          visit_type: [
            { required: true, message: '请选择', trigger: 'change' }
          ],
          visit_time: [
            { required: true, message: '请选择时间', trigger: 'change' }
          ],
        },
        tableData:[],
        result:[],
        addfangwen:{},
        filterCode:'',
        filterQiye_name:'',
        filterVisit_time:'',
        filterRemarks:'',
        dialogFormVisible: false,
      }
    }
  }
</script>