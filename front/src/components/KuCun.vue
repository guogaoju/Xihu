<template>
<div>
  <!-- 仓库管理/库存信息 -->
  <el-breadcrumb style="padding-top: 10px;" separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/Dao' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>仓库管理</el-breadcrumb-item>
      <el-breadcrumb-item>库存信息</el-breadcrumb-item>
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
                &(!filterItem_name || data.item_name.toLowerCase().includes(filterItem_name.toString().toLowerCase()))
                &(!filterGoods_type || data.goods_type.toLowerCase().includes(filterGoods_type.toString().toLowerCase()))
                &(!filterGoods_danwei || data.goods_danwei.toLowerCase().includes(filterGoods_danwei.toString().toLowerCase()))
                &(!filterBefore_stock || data.before_stock.toLowerCase().includes(filterBefore_stock.toString().toLowerCase()))
                &(!filterAfter_stock || data.after_stock.toLowerCase().includes(filterAfter_stock.toString().toLowerCase()))
                )" border style="width: 100%">
              <el-table-column min-width='100' align="center">
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
              <el-table-column min-width='50' align="center">
                      <!-- eslint-disable-next-line -->
                      <template slot="header" slot-scope="scope">
                          <el-popover placement="bottom" trigger="click">
                              <el-input v-model="filterItem_name"> </el-input>
                              <div slot="reference"> <label> 项目名称 </label> <i class='el-icon-arrow-down'> </i> </div>
                          </el-popover>
                      </template>
                      <template slot-scope="scope">
                          <div>
                              {{scope.row.item_name}}
                          </div>
                      </template>
              </el-table-column>
              <el-table-column min-width='50' align="center">
                      <!-- eslint-disable-next-line -->
                      <template slot="header" slot-scope="scope">
                          <el-popover placement="bottom" trigger="click">
                              <el-input v-model="filterGoods_type"> </el-input>
                              <div slot="reference"> <label> 材料种类 </label> <i class='el-icon-arrow-down'> </i> </div>
                          </el-popover>
                      </template>
                      <template slot-scope="scope">
                          <div>
                              {{scope.row.goods_type}}
                          </div>
                      </template>
              </el-table-column>
              <el-table-column min-width='50' align="center">
                      <!-- eslint-disable-next-line -->
                      <template slot="header" slot-scope="scope">
                          <el-popover placement="bottom" trigger="click">
                              <el-input v-model="filterGoods_danwei"> </el-input>
                              <div slot="reference"> <label> 计量单位 </label> <i class='el-icon-arrow-down'> </i> </div>
                          </el-popover>
                      </template>
                      <template slot-scope="scope">
                          <div>
                              {{scope.row.goods_danwei}}
                          </div>
                      </template>
              </el-table-column>
              <el-table-column min-width='50' align="center">
                      <!-- eslint-disable-next-line -->
                      <template slot="header" slot-scope="scope">
                          <el-popover placement="bottom" trigger="click">
                              <el-input v-model="filterBefore_stock"> </el-input>
                              <div slot="reference"> <label> 当前库存 </label> <i class='el-icon-arrow-down'> </i> </div>
                          </el-popover>
                      </template>
                      <template slot-scope="scope">
                          <div>
                              {{scope.row.before_stock}}
                          </div>
                      </template>
              </el-table-column>
              <el-table-column min-width='50' align="center">
                      <!-- eslint-disable-next-line -->
                      <template slot="header" slot-scope="scope">
                          <el-popover placement="bottom" trigger="click">
                              <el-input v-model="filterAfter_stock"> </el-input>
                              <div slot="reference"> <label> 已供应总量 </label> <i class='el-icon-arrow-down'> </i> </div>
                          </el-popover>
                      </template>
                      <template slot-scope="scope">
                          <div>
                              {{scope.row.after_stock}}
                          </div>
                      </template>
              </el-table-column>
              <el-table-column prop="nodeName" label="当前流程" width="120" align="center" :formatter="getfor">
              </el-table-column>
              <el-table-column
                fixed="right"
                label="操作"
                width="350"
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
                &(!filterItem_name || data.item_name.toLowerCase().includes(filterItem_name.toString().toLowerCase()))
                &(!filterGoods_type || data.goods_type.toLowerCase().includes(filterGoods_type.toString().toLowerCase()))
                &(!filterGoods_danwei || data.goods_danwei.toLowerCase().includes(filterGoods_danwei.toString().toLowerCase()))
                &(!filterBefore_stock || data.before_stock.toLowerCase().includes(filterBefore_stock.toString().toLowerCase()))
                &(!filterAfter_stock || data.after_stock.toLowerCase().includes(filterAfter_stock.toString().toLowerCase()))
                )" border style="width: 100%">
              <el-table-column min-width='100' align="center">
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
              <el-table-column min-width='50' align="center">
                      <!-- eslint-disable-next-line -->
                      <template slot="header" slot-scope="scope">
                          <el-popover placement="bottom" trigger="click">
                              <el-input v-model="filterItem_name"> </el-input>
                              <div slot="reference"> <label> 项目名称 </label> <i class='el-icon-arrow-down'> </i> </div>
                          </el-popover>
                      </template>
                      <template slot-scope="scope">
                          <div>
                              {{scope.row.item_name}}
                          </div>
                      </template>
              </el-table-column>
              <el-table-column min-width='50' align="center">
                      <!-- eslint-disable-next-line -->
                      <template slot="header" slot-scope="scope">
                          <el-popover placement="bottom" trigger="click">
                              <el-input v-model="filterGoods_type"> </el-input>
                              <div slot="reference"> <label> 材料种类 </label> <i class='el-icon-arrow-down'> </i> </div>
                          </el-popover>
                      </template>
                      <template slot-scope="scope">
                          <div>
                              {{scope.row.goods_type}}
                          </div>
                      </template>
              </el-table-column>
              <el-table-column min-width='50' align="center">
                      <!-- eslint-disable-next-line -->
                      <template slot="header" slot-scope="scope">
                          <el-popover placement="bottom" trigger="click">
                              <el-input v-model="filterGoods_danwei"> </el-input>
                              <div slot="reference"> <label> 计量单位 </label> <i class='el-icon-arrow-down'> </i> </div>
                          </el-popover>
                      </template>
                      <template slot-scope="scope">
                          <div>
                              {{scope.row.goods_danwei}}
                          </div>
                      </template>
              </el-table-column>
              <el-table-column min-width='50' align="center">
                      <!-- eslint-disable-next-line -->
                      <template slot="header" slot-scope="scope">
                          <el-popover placement="bottom" trigger="click">
                              <el-input v-model="filterBefore_stock"> </el-input>
                              <div slot="reference"> <label> 当前库存 </label> <i class='el-icon-arrow-down'> </i> </div>
                          </el-popover>
                      </template>
                      <template slot-scope="scope">
                          <div>
                              {{scope.row.before_stock}}
                          </div>
                      </template>
              </el-table-column>
              <el-table-column min-width='50' align="center">
                      <!-- eslint-disable-next-line -->
                      <template slot="header" slot-scope="scope">
                          <el-popover placement="bottom" trigger="click">
                              <el-input v-model="filterAfter_stock"> </el-input>
                              <div slot="reference"> <label> 已供应总量 </label> <i class='el-icon-arrow-down'> </i> </div>
                          </el-popover>
                      </template>
                      <template slot-scope="scope">
                          <div>
                              {{scope.row.after_stock}}
                          </div>
                      </template>
              </el-table-column>
              <el-table-column prop="nodeName" label="当前流程" width="120" align="center" :formatter="getfor">
              </el-table-column>
              <el-table-column
                fixed="right"
                label="操作"
                width="350"
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

  <!-- 弹出层 -->
  <el-dialog :title="titleMap[dialogTitle]" width="45%" :visible.sync="dialogFormVisible" @close='closeDialog'>
      <el-form
        :model="kucun"
        status-icon :rules="rules"
        ref="kucun"
        label-width="100px"
        class="demo-ruleForm"
      >
      <el-row>
        <el-col :span="18"><el-row>
         <el-col :span="12">
          <el-form-item label="项目名称" prop="item_name" :label-width="formLabelWidth">
            <el-select :disabled="validated" filterable v-model="kucun.item_name" placeholder="请选择项目">
                <el-option v-for="item in jianzhu" :key="item.id" :label="item.item_name" :value="item.item_name"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
         <el-col :span="12">
          <el-form-item label="材料种类" prop="goods_type" :label-width="formLabelWidth">
           <el-select :disabled="validated" filterable v-model="kucun.goods_type" placeholder="请选择材料种类">
                <el-option v-for="item in type" :key="item.id" :label="item.name" :value="item.name"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="单位" prop="goods_danwei" :label-width="formLabelWidth">
            <el-select :disabled="validated" filterable v-model="kucun.goods_danwei" placeholder="请选择单位">
                <el-option v-for="item in danwei" :key="item.id" :label="item.name" :value="item.name"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
            <el-form-item label="当前库存" prop="before_stock" :label-width="formLabelWidth">
                <el-input :disabled="validated" v-model="kucun.before_stock"></el-input>
             </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="已供应总量" prop="after_stock" :label-width="formLabelWidth">
            <el-input :disabled="validated" v-model="kucun.after_stock"></el-input>
          </el-form-item>
        </el-col>
         <el-col :span="12">
          <el-form-item label="当前流程" prop="nodeName" :label-width="formLabelWidth">
            <el-input :disabled="liucheng" v-model="kucun.nodeName"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12"><el-form-item></el-form-item></el-col>   
        <el-col :span="12">
        <el-form-item>
          <el-button type="primary" :disabled="annui" v-show="isshow" ref="buttonname" id="submitButton" @click="submit('kucun')">{{buttonText}}</el-button>
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
          </el-timeline>
         </el-col>
      </el-row>
    </el-form>
  </el-dialog>
</div>
</template>

<script>
import authservice from "../services/auth.service"
import KucunService from "../services/KucunService"
import KucunState from "../services/KucunState"
import KucunStatelog from "../services/KucunStatelog"
import CodeService from "../services/CodeService";
import JianzhuService from "../services/JianzhuService";
import WuliaoTypeService from "../services/WuliaoTypeService";
import DanweiService from "../services/DanweiService";
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
        CodeService.findByLog("库存信息").then(response=>{
            this.code=response.data.code_name+"-"+time+"-"+response.data.sum.toString().padStart(5,'0')
        })
    },
    selectJianzhu(){
      JianzhuService.getAll().then(response=>{
        this.jianzhu=response.data
      })
    },
    selectDanwei(){
      DanweiService.getAll().then(response=>{
        this.danwei=response.data
      })
    },
    selectwuliaotype(){
      WuliaoTypeService.getAll().then(response=>{
        this.type=response.data
      })
    },
      selectState(){
         KucunState.getAll()
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
        this.liucheng=true,
        this.dialogTitle = "examine";
          this.pa=row.id;
           KucunService.get(this.pa)
         .then(response => {
                this.isshow=false;
                this.qiyeid=this.pa
                this.nextState=response.data.KucunState.nextStateid
                this.oldStateid=response.data.KucunState.id
                this.kucun=response.data;
                this.kucun.nodeName = response.data.KucunState.nodeName;
                this.validated=true;
                this.buttonText = response.data.KucunState.nodebutton;
               
              })
              .catch(e => {
                console.log(e);
              });
              this.selectStateAndLogs();
       },
       addStatelog(){
         var data = {
              userId:this.currentUser.id,
              kucunId: this.qiyeid,
              oldstateid: this.oldStateid,
              newstateid:this.nextState,
              operateId:4
              }
              KucunStatelog.create(data).then(response => {
        })
        .catch(e => {
          console.log(e);
        });
      },
      updateState(index,row){
        var data = {
           KucunStateId:this.nextState
          }
          KucunService.update(this.pa,data)
        .then(response => {
          this.tableonload();
        })
        .catch(e => {
          console.log(e);
        });
       },
       selectStateAndLogs(){
        KucunState.getAll()
        .then(response => {
          this.activities=response.data
          this.selectlogs();
        })
        .catch(e => {
          console.log(e);
        });
      },
      getfor(row,column){
            return row.KucunState.nodeName;
          },
      async tableonload(){
         KucunService.getAll()
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
         this.selectJianzhu();
         this.selectDanwei();
         this.selectwuliaotype()
          this.kucun={},
          this.dialogFormVisible=true
          this.selectState();
          this.validated=false;
          this.liucheng=true,
          this.annui=false;
          this.dialogTitle = "addData";
       },
       addservice(){
              this.dialogFormVisible=false;
          var data = {
             code:this.code,
        item_name: this.kucun.item_name,
        goods_type: this.kucun.goods_type,
        goods_danwei:this.kucun.goods_danwei,
        before_stock:this.kucun.before_stock,
        after_stock:this.kucun.after_stock,
        nodeName:this.kucun.nodeName
        }
        KucunService.create(data)
        .then(response => {
          this.tableonload();
          var data = {
              userId:this.currentUser.id,
              kucunId: response.data.id,
              oldstateid: 1,
              newstateid:response.data.KucunStateId,
              operateId:1,
              }
              KucunStatelog.create(data).then(response => {
              }).catch(e => {
                console.log(e);
              });
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
       },
       submit(kucun){
          this.$refs[kucun].validate((valid) => {
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
        let kucunId=this.pa
          KucunStatelog.findByLog(kucunId).then(response => {
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
                                    KucunService.get(this.pa)
                                  .then(response => {
                                          this.kucun=response.data;
                                          this.kucun.nodeName = response.data.KucunState.nodeName;
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
          this.selectJianzhu();
         this.selectDanwei();
         this.selectwuliaotype()
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
                                    this.validated=false;
                                    this.liucheng=true, 
                                    this.pa=this.tableData[index].id;
                                    this.selectStateAndLogs();
                                    KucunService.get(this.pa)
                                  .then(response => {
                                          this.kucun=response.data;
                                          this.kucun.nodeName = response.data.KucunState.nodeName;
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
            id:this.kucun.id,
            item_name: this.kucun.item_name,
            goods_type: this.kucun.goods_type,
            goods_danwei:this.kucun.goods_danwei,
            before_stock:this.kucun.before_stock,
            after_stock:this.kucun.after_stock,
            nodeName:this.kucun.nodeName
        }
          KucunService.update(data.id,data)
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
              KucunService.delete(pa)
              .then(response => {
                var data = {
              userId:this.currentUser.id,
              kucunId: pa,
              oldstateid: 1,
              newstateid:1,
              operateId:3,
              }
              KucunStatelog.create(data).then(response => {
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
      handleClick(row) {
        // console.log(row);
      },
       filterCurrent(value, row){
            return row.current_process === value;
        }
    },

    data() {
      return {
        code:"",
        danwei:[],
        type:[],
        jianzhu:[],
        tableData1: [],
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
        validated:false,
        liucheng:false,
        activities: [],
        titleMap: {
        addData: "添加数据",
        updataData: "修改数据",
        kanData: "查看数据",
        examine: "库存信息",
      },
        dialogTitle:"",
        TravelType:1,
        formLabelWidth: "100px",
         rules:{
          item_name: [
            { required: true, message: '请输入项目名称', trigger: 'blur' },
          ],
          goods_type: [
            { required: true, message: '请输入材料种类', trigger: 'change' }
          ],
          before_stock: [
            { required: true, message: '请输入当前库存', trigger: 'change' }
          ],
          after_stock: [
            { required: true, message: '请输入以供应数量', trigger: 'change' }
          ],
        },
        tableData:[],
        result:[],
        kucun:{},
        filterCode:'',
        filterItem_name:'',
        filterGoods_type:'',
        filterGoods_danwei:'',
        filterBefore_stock:'',
        filterAfter_stock:'',
        dialogFormVisible: false,
      }
    }
  }
</script>