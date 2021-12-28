<template>
<div>
  <!-- 客户管理/材料供应商信息管理/供应商评级管理 -->
  <el-breadcrumb style="padding-top: 10px;" separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/Dao' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>客户管理</el-breadcrumb-item>
      <el-breadcrumb-item>材料供应商信息管理</el-breadcrumb-item>
      <el-breadcrumb-item>供应商评级管理</el-breadcrumb-item>
    </el-breadcrumb>
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
                &(!filterSupplier_name || data.supplier_name.toLowerCase().includes(filterSupplier_name.toString().toLowerCase()))
                &(!filterYear || data.year.toLowerCase().includes(filterYear.toString().toLowerCase()))
                &(!filterQuarter || data.quarter.toLowerCase().includes(filterQuarter.toString().toLowerCase()))
                &(!filterTotal_points || data.total_points.toLowerCase().includes(filterTotal_points.toString().toLowerCase()))
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
                              <el-input v-model="filterSupplier_name"> </el-input>
                              <div slot="reference"> <label> 供应商名称 </label> <i class='el-icon-arrow-down'> </i> </div>
                          </el-popover>
                      </template>
                      <template slot-scope="scope">
                          <div>
                              {{scope.row.supplier_name}}
                          </div>
                      </template>
              </el-table-column>
              <el-table-column min-width='120' align="center">
                      <!-- eslint-disable-next-line -->
                      <template slot="header" slot-scope="scope">
                          <el-popover placement="bottom" trigger="click">
                              <el-input v-model="filterYear"> </el-input>
                              <div slot="reference"> <label> 年度 </label> <i class='el-icon-arrow-down'> </i> </div>
                          </el-popover>
                      </template>
                      <template slot-scope="scope">
                          <div>
                              {{scope.row.year}}
                          </div>
                      </template>
              </el-table-column>
              <el-table-column min-width='120' align="center">
                      <!-- eslint-disable-next-line -->
                      <template slot="header" slot-scope="scope">
                          <el-popover placement="bottom" trigger="click">
                              <el-input v-model="filterQuarter"> </el-input>
                              <div slot="reference"> <label> 季度 </label> <i class='el-icon-arrow-down'> </i> </div>
                          </el-popover>
                      </template>
                      <template slot-scope="scope">
                          <div>
                              {{scope.row.quarter}}
                          </div>
                      </template>
              </el-table-column>
              <el-table-column
                prop="quantify_points"
                label="定量得分"
                width="150"
                align="center">
              </el-table-column>
              <el-table-column
                prop="qualitative_points"
                label="定性得分"
                width="150"
                align="center">
              </el-table-column>
              <el-table-column min-width='130' align="center">
                      <!-- eslint-disable-next-line -->
                      <template slot="header" slot-scope="scope">
                          <el-popover placement="bottom" trigger="click">
                              <el-input v-model="filterTotal_points"> </el-input>
                              <div slot="reference"> <label> 最终评级总分 </label> <i class='el-icon-arrow-down'> </i> </div>
                          </el-popover>
                      </template>
                      <template slot-scope="scope">
                          <div>
                              {{scope.row.total_points}}
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
                &(!filterSupplier_name || data.supplier_name.toLowerCase().includes(filterSupplier_name.toString().toLowerCase()))
                &(!filterYear || data.year.toLowerCase().includes(filterYear.toString().toLowerCase()))
                &(!filterQuarter || data.quarter.toLowerCase().includes(filterQuarter.toString().toLowerCase()))
                &(!filterTotal_points || data.total_points.toLowerCase().includes(filterTotal_points.toString().toLowerCase()))
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
                              <el-input v-model="filterSupplier_name"> </el-input>
                              <div slot="reference"> <label> 供应商名称 </label> <i class='el-icon-arrow-down'> </i> </div>
                          </el-popover>
                      </template>
                      <template slot-scope="scope">
                          <div>
                              {{scope.row.supplier_name}}
                          </div>
                      </template>
              </el-table-column>
              <el-table-column min-width='120' align="center">
                      <!-- eslint-disable-next-line -->
                      <template slot="header" slot-scope="scope">
                          <el-popover placement="bottom" trigger="click">
                              <el-input v-model="filterYear"> </el-input>
                              <div slot="reference"> <label> 年度 </label> <i class='el-icon-arrow-down'> </i> </div>
                          </el-popover>
                      </template>
                      <template slot-scope="scope">
                          <div>
                              {{scope.row.year}}
                          </div>
                      </template>
              </el-table-column>
              <el-table-column min-width='120' align="center">
                      <!-- eslint-disable-next-line -->
                      <template slot="header" slot-scope="scope">
                          <el-popover placement="bottom" trigger="click">
                              <el-input v-model="filterQuarter"> </el-input>
                              <div slot="reference"> <label> 季度 </label> <i class='el-icon-arrow-down'> </i> </div>
                          </el-popover>
                      </template>
                      <template slot-scope="scope">
                          <div>
                              {{scope.row.quarter}}
                          </div>
                      </template>
              </el-table-column>
              <el-table-column
                prop="quantify_points"
                label="定量得分"
                width="150"
                align="center">
              </el-table-column>
              <el-table-column
                prop="qualitative_points"
                label="定性得分"
                width="150"
                align="center">
              </el-table-column>
              <el-table-column min-width='130' align="center">
                      <!-- eslint-disable-next-line -->
                      <template slot="header" slot-scope="scope">
                          <el-popover placement="bottom" trigger="click">
                              <el-input v-model="filterTotal_points"> </el-input>
                              <div slot="reference"> <label> 最终评级总分 </label> <i class='el-icon-arrow-down'> </i> </div>
                          </el-popover>
                      </template>
                      <template slot-scope="scope">
                          <div>
                              {{scope.row.total_points}}
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
  <el-dialog :title="titleMap[dialogTitle]" width="65%" :visible.sync="dialogFormVisible" @close='closeDialog'>
      <el-form
        :model="Pingji"
        status-icon :rules="rules"
        ref="Pingji"
        label-width="100px"
        class="demo-ruleForm"
      >
      <el-row>
         <el-col :span="18">
           <el-row>
         <el-col :span="12">
          <el-form-item label="供应商名称" prop="supplier_name" :label-width="formLabelWidth">
            <el-select :disabled="validated" filterable v-model="Pingji.supplier_name" placeholder="请选择">
              <el-option v-for="item in result" :key="item.id" :label="item.supplier_name" :value="item.supplier_name"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="定量评分：满分50分" prop="quantify_points" :label-width="formLabelWidth">
            <el-input :disabled="validated" v-on:change="updateScore" v-model.number="Pingji.quantify_points"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="季度" prop="quarter" :label-width="formLabelWidth">
            <el-select :disabled="validated" v-model="Pingji.quarter" clearable placeholder="请选择" >
              <el-option label="第一季度" value="第一季度"></el-option>
              <el-option label="第二季度" value="第二季度"></el-option>
              <el-option label="第三季度" value="第三季度"></el-option>
              <el-option label="第四季度" value="第四季度"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="年度" prop="year" :label-width="formLabelWidth">
            <el-select :disabled="validated" v-model="Pingji.year" clearable placeholder="请选择" >
              <el-option label="2021" value="2021"></el-option>
              <el-option label="2020" value="2020"></el-option>
              <el-option label="2019" value="2019"></el-option>
              <el-option label="2018" value="2018"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
         <el-col :span="12">
          <el-form-item label="是否与城投公司或南昌县国有平台有过合作:满分10分" prop="score1" :label-width="formLabelWidth">
            <el-input :disabled="validated" v-on:change="updateScore" v-model.number="Pingji.score1"></el-input>
          </el-form-item>
        </el-col>
         <el-col :span="12">
          <el-form-item label="在江西省内履约、产品质量、口碑情况:满分10分" prop="score2" :label-width="formLabelWidth">
            <el-input :disabled="validated" v-on:change="updateScore" v-model.number="Pingji.score2"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
         <el-col :span="12">
          <el-form-item label="总体征信情况:满分10分" prop="score3" :label-width="formLabelWidth">
           <el-input :disabled="validated" v-on:change="updateScore" v-model.number="Pingji.score3"></el-input>
          </el-form-item>
        </el-col>
         <el-col :span="12">
          <el-form-item label="经营管理情况:生产管理、财务管理、销售管理:满分10分" prop="score4" :label-width="formLabelWidth">
           <el-input :disabled="validated" v-on:change="updateScore" v-model.number="Pingji.score4"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
         <el-col :span="12">
          <el-form-item label="行业地位:满分10分" prop="score5" :label-width="formLabelWidth">
           <el-input :disabled="validated" v-on:change="updateScore" v-model.number="Pingji.score5"></el-input>
          </el-form-item>
        </el-col>
         <el-col :span="12">
           <el-form-item label="定性总评分" prop="qualitative_points" :label-width="formLabelWidth">
            <el-input :disabled="validated" v-model.number="Pingji.qualitative_points"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="评级总分" prop="total_points" :label-width="formLabelWidth">
            <el-input :disabled="validated" v-model.number="Pingji.total_points"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="当前流程" prop="nodeName" :label-width="formLabelWidth">
            <el-input :disabled="liucheng" v-model="Pingji.nodeName"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="11"><el-form-item></el-form-item></el-col>   
        <el-col :span="5">
        <el-form-item>
          <el-button type="primary" :disabled="annui" v-show="isshow" ref="buttonname" id="submitButton" @click="submit('Pingji')">{{buttonText}}</el-button>
        </el-form-item>
         </el-col> 
         <el-col :span="8">
        <el-form-item>
          <el-button type="danger" v-show="isshow2" @click="no()">驳回</el-button>
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
import DaibanService from "../services/DaibanService"
import authservice from "../services/auth.service"
import PingjiService from "../services/PingjiService"
import CailiaogysService from "../services/CailiaogysService"
import PingjiState from "../services/PingjiState"
import PingjiStatelog from "../services/PingjiStatelog"
import CodeService from "../services/CodeService";
  export default {
    created () {
      this.selectdept1();
          this.tableonload();
      },
      mounted: function () {
      this.updateType()
  },
      computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
    methods: {
      updateType () {
      let type = this.$route.query.type
      // 判断type的值，更改activeName的值
      if (type === 'second') {
        this.activeName = 'second'
      } else if (type === 'b') {
        this.activeName = 'b'
      // eslint-disable-next-line keyword-spacing
      }else if (type === 'c') {
        this.activeName = 'c'
      }
    },
      //关闭弹框的事件
    closeDialog(){
      this.buttonText="确定"
      this.isshow2=false;
      this.isshow=false;
    },
    selectCode(){
        let date = new Date();
        let year = date.getFullYear(); // 年
        let month = (date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1) // 月
        let day = date.getDate(); // 日
        let time=`${year}${month}${day}`;
        CodeService.findByLog("供应商评级").then(response=>{
            this.code=response.data.code_name+"-"+time+"-"+response.data.sum.toString().padStart(5,'0')
        })
    },
    no(){
      this.dialogFormVisible=false;
      var data = {
           PingjiStateId:3
          }
          PingjiService.update(this.pa,data)
        .then(response => {
          var data = {
              userId:this.currentUser.id,
              pingjiId: this.pa,
              oldstateid: this.oldStateid,
              newstateid:this.nextState,
              operateId:5,
              }
              PingjiStatelog.create(data).then(response => {
              }).catch(e => {
                console.log(e);
              });
          this.tableonload();
        })
        .catch(e => {
          console.log(e);
        });
    },
      selectState(){
         PingjiState.getAll()
        .then(response => {
          for(var i=0;i<response.data.length;i++){
               if(response.data[i].display===0){
                 this.activities.push(response.data[i])
               }
          }
        })
        .catch(e => {
          console.log(e);
        });
      },
      selectdept1(){
        this.tableData1=[]
        authservice.get(this.currentUser.id).then(resUser =>{
          PingjiService.getAll().then(async resAllPingji =>  {          
            for(var i=0;i<resAllPingji.data.length;i++){
              await PingjiState.get(resAllPingji.data[i].PingjiStateId).then(respingjiState =>{
                var ifKeep=false;
                for (let k = 0; k < resUser.data.depts.length; k++){
                  for (var l = 0; l < respingjiState.data.depts.length; l++){
                    if (resUser.data.depts[k].id === respingjiState.data.depts[l].id){
                      ifKeep=true;
                    }
                  }
                }
                if(ifKeep){
                  this.tableData1.push(resAllPingji.data[i])
                }
              }).catch(e => {
                console.log(e);
              }); 
            }
          }).catch(e => {
            console.log(e);
          });
        }).catch(e => {
          console.log(e);
        });
      },
      selectdept(){
           authservice.get(this.currentUser.id).then(response =>{
             this.deptId = [];
          for (var i = 0; i < response.data.depts.length; i++) {
            this.deptId.push(response.data.depts[i].id);
            if(response.data.depts[i].name==="风控部"){
              this.isshow2=true
            }
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
        this.activities=[] 
        this.dialogFormVisible=true
        this.annui=false
        this.liucheng=true,
        this.dialogTitle = "examine";
          this.pa=row.id;
          this.selectdept();
           PingjiService.get(this.pa)
         .then(response => {
           this.lastone=response.data.PingjiState.lastone;
          PingjiState.get(response.data.PingjiState.id).then(response =>{
                   this.statedeptId = [];
                for (var i = 0; i < response.data.depts.length; i++) {
                      this.statedeptId.push(response.data.depts[i].id); 
                    }
          for (let j = 0; j < this.deptId.length; j++) {
                    let old = this.deptId[j];
                        for (var i = 0; i < this.statedeptId.length; i++) {
                            let pre = this.statedeptId[i];
                                if (pre === old) {
                                    this.isshow=true;
                                    console.log("显示")
                                }
                            }
                       }
                       if(this.isshow===true){
                       }else{
                         this.isshow=false;
                       }
                       if(this.lastone===1){
                         this.isshow=false;
                       }
               })
          this.qiyeid=this.pa
          this.nextState=response.data.PingjiState.nextStateid
          this.oldStateid=response.data.PingjiState.id
                this.Pingji=response.data;
                this.Pingji.nodeName = response.data.PingjiState.nodeName;
                this.validated=true;
                this.buttonText = response.data.PingjiState.nodebutton;
               
              })
              .catch(e => {
                console.log(e);
              });
              this.selectStateAndLogs();
       },
       updateDaiban(){
          PingjiState.get(this.nextState).then(response1=>{
            this.currentStateDept=response1.data.depts
            PingjiState.get(response1.data.nextStateid).then(response=>{
              this.nextStateDept=response.data.depts;
              //当前状态的部门减一
              for (let i = 0; i < this.currentStateDept.length; i++) 
                DaibanService.getJian(this.currentStateDept[i].id,"供应商评级")
              //如果下一个状态如果不是最后一个,则所有部门加一
              if (response1.data.lastone!=1){
                     console.log(response.data.lastone)
                for (let i = 0; i < this.nextStateDept.length; i++){
                    DaibanService.getJia(this.nextStateDept[i].id,"供应商评级").then(response =>{

                    })
                }
              }else{
                  console.log("99999")
              }  
            })
          })
       },
       addDaiban(){
          //新增,所以查状态表第一条就行
          PingjiState.get(1).then(response=>{
            //如果状态表不是只有一个添加,则所有部门加一
            if (!response.data.lastone){
              PingjiState.get(response.data.nextStateid).then(response=>{
                this.nextStateDept=response.data.depts;
                // console.log(this.nextStateDept);
                 for (let i = 0; i < this.nextStateDept.length; i++){
                    DaibanService.getJia(this.nextStateDept[i].id,"供应商评级").then(response =>{

                  })
              } 
            })
            }
              
                  
          })
       },
       addStatelog(){
         var data = {
              userId:this.currentUser.id,
              pingjiId: this.qiyeid,
              oldstateid: this.oldStateid,
              newstateid:this.nextState,
              operateId:4
              }
              PingjiStatelog.create(data).then(response => {
        })
        .catch(e => {
          console.log(e);
        });
      },
      selectStateAndLogs(){
        PingjiState.getAll()
        .then(response => {
         for(var i=0;i<response.data.length;i++){
               if(response.data[i].display===0){
                 this.activities.push(response.data[i]) 
               }
          }
          this.selectlogs();
        })
        .catch(e => {
        });
      },
      getfor(row,column){
            return row.PingjiState.nodeName;
          },
          updateScore: function() { 
            this.Pingji.qualitative_points=parseInt(this.Pingji.score1)+parseInt(this.Pingji.score2)+parseInt(this.Pingji.score3)+parseInt(this.Pingji.score4)+parseInt(this.Pingji.score5);
            this.Pingji.total_points=parseInt(this.Pingji.qualitative_points)+parseInt(this.Pingji.quantify_points);
            this.$forceUpdate();
      },
      async tableonload(){
         PingjiService.getAll()
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
         this.activities=[]
         this.isshow=true;
         this.isshow2=false;
          this.Pingji={
            supplier_name:'',
            year:'',
            quarter:'',
             score1: 0,
            score2: 0,
            score3: 0,
            score4: 0,
            score5: 0,
            quantify_points:0,
            qualitative_points:0,
            total_points: 0
          },
          this.dialogFormVisible=true
          this.selectState();
          this.validated=false;
          this.liucheng=true,
          this.annui=false;
          this.dialogTitle = "addData";
           CailiaogysService.getAll()
        .then(response => {
          this.result = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
       },
       addservice(){
              this.dialogFormVisible=false;
          var data = {
            code:this.code,
        supplier_name: this.Pingji.supplier_name,
        year: this.Pingji.year,
        quarter: this.Pingji.quarter,
        score1:this.Pingji.score1,
        score2:this.Pingji.score2,
        score3:this.Pingji.score3,
        score4:this.Pingji.score4,
        score5:this.Pingji.score5,
        quantify_points:this.Pingji.quantify_points,
        qualitative_points:this.Pingji.qualitative_points,
        total_points:this.Pingji.total_points,
        nodeName:this.Pingji.nodeName
        }
        PingjiService.create(data)
        .then(response => {
          this.tableonload();
          var data = {
              userId:this.currentUser.id,
              pingjiId: response.data.id,
              oldstateid: 1,
              newstateid:response.data.PingjiStateId,
              operateId:4,
              }
              PingjiStatelog.create(data).then(response => {
              }).catch(e => {
                console.log(e);
              });
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
       },
       submit(Pingji){
          this.$refs[Pingji].validate((valid) => {
          if (this.dialogTitle ==  "addData"&&valid ) {
        this.addservice();
        this.addDaiban()
      } else if(this.dialogTitle ==  "updataData") {
        this.updateservice();
      }else if(this.dialogTitle ==  "kanData"){
        this.kanClick();
      }else if(this.dialogTitle ==  "examine"&&valid){
        this.dialogFormVisible=false;
        this.updateState();
        this.addStatelog();
        this.updateDaiban()
      }else{
        return false
      }
        });
        },
         selectlogs(){
        let pingjiId=this.pa
          PingjiStatelog.findByLog(pingjiId).then(response => {
            console.log(response.data)
              for (let j = 0; j < this.activities.length; j++) {
                    let old = this.activities[j].id;
                        for (var i = 0; i < response.data.length; i++) {
                            let pre = response.data[i].newstateid;
                                if (pre === old) {
                                    if(response.data[i].operateId===5){
                                     this.activities[j].color='#ff0000'
                                     this.activities[j].createdAt=response.data[j].createdAt
                                     this.activities[j].nodeName=this.activities[j].nodeName+" - 已拒绝"  
                                  }else if(response.data[i].operateId===4){
                                      this.activities[j].color='#0bbd87'
                                      this.activities[j].createdAt=response.data[j].createdAt  
                                  }else{
                                  }
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
         this.activities=[]
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
                                    this.isshow2=false
                                    this.liucheng=true,
                                    this.validated=true;
                                    this.pa=this.tableData[index].id;
                                    this.selectStateAndLogs();
                                    PingjiService.get(this.pa)
                                  .then(response => {
                                          this.Pingji=response.data;
                                          this.Pingji.nodeName = response.data.PingjiState.nodeName;
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
          this.activities=[]
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
                                    this.dialogFormVisible=true
                                    this.dialogTitle = "updataData";
                                    this.annui=false;
                                    this.isshow2=false
                                    this.isshow=true
                                    this.validated=false;
                                    this.liucheng=true, 
                                    this.pa=this.tableData[index].id;
                                    this.selectStateAndLogs();
                                    HuanKuanService.get(this.pa)
                                    .then(response => {
                                        this.huankuan=response.data;
                                        this.huankuan.nodeName = response.data.FangwenState.nodeName; 
                                        this.imageUrl=response.data.huan_stream;
                                            //旧图片url另存一份,将来imageUrl会被覆盖
                                            this.oldUrl = this.imageUrl;
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
            id:this.Pingji.id,
            supplier_name: this.Pingji.supplier_name,
            year: this.Pingji.year,
            quarter: this.Pingji.quarter,
            score1:this.Pingji.score1,
            score2:this.Pingji.score2,
            score3:this.Pingji.score3,
            score4:this.Pingji.score4,
            score5:this.Pingji.score5,
            quantify_points:this.Pingji.quantify_points,
            qualitative_points:this.Pingji.qualitative_points,
            total_points:this.Pingji.total_points,
            nodeName:this.Pingji.nodeName
        }
          PingjiService.update(data.id,data)
        .then(response => {
          this.tableonload();
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
       },
        updateState(index,row){
        var data = {
           PingjiStateId:this.nextState
          }
          PingjiService.update(this.pa,data)
        .then(response => {
          this.tableonload();
        })
        .catch(e => {
          console.log(e);
        });
       },
       delClickconfirm(index,row){
              let pa=this.tableData[index].id;
              PingjiService.delete(pa)
              .then(response => {
                var data = {
              userId:this.currentUser.id,
              pingjiId: pa,
              oldstateid: 1,
              newstateid:1,
              operateId:3,
              }
              PingjiStatelog.create(data).then(response => {
              }).catch(e => {
                console.log(e);
              });
                this.tableonload();
                // console.log(response.pa);
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
      handleClick(tab, event) {
        // // 触发‘待办事项’事件
        // if(tab.name == 'second'){
        // 	this.selectdept1();
        // }else{
        // 	// 触发‘其他’事件
        // }
      },
      filterCurrent(value, row){
            return row.current_process === value;
        }
    },

    data() {
      return {
        code:"",
        nextStateDept:[],
        currentStateDept:[],
        tableData1: [],
        activeName: 'first',
        deletedept:[1,3,8],
        updatedept:[1,3,8],
        kandept:[1,3,8],
        isshow1:false,
        isshow2:false,
        adddept:[1,3,8],
        lastone:"",
        deptId:[],
        statedeptId:[],
        pa:'',
        paa:'',
        buttonText: '确定',
        qiyeid:'',
        oldstateid:'',
        oldStateid:'',
        nextState:'',
        annui:'',
        isshow:false,
        validated:false,
        liucheng:false,
        activities: [],
        titleMap: {
        addData: "添加数据",
        updataData: "修改数据",
        kanData: "查看数据",
        examine: "评级信息",
      },
      Pingji: {
            score1: 0,
            score2: 0,
            score3: 0,
            score4: 0,
            score5: 0,
            quantify_points:0,
            qualitative_points:0,
            total_points: 0
        },
        dialogTitle:"",
        TravelType:1,
        formLabelWidth: "360px",
        rules:{
          supplier_name: [
            { required: true, message: '请输入企业名称', trigger: 'blur' },
          ],
          year: [
            { required: true, message: '请选择年份', trigger: 'change' }
          ],
          quarter: [
            { required: true, message: '请选择季度', trigger: 'change' }
          ],
          current_process: [
            { required: true, message: '请输入', trigger: 'change' }
          ],
        },
        tableData:[],
        result:[],
        // Pingji:{},
        filterCode:'',
        filterSupplier_name:'',
        filterYear:'',
        filterQuarter:'',
        filterTotal_points:'',
        dialogFormVisible: false,
      }
    }
  }
</script>