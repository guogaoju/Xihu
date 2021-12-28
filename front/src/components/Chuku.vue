<template>
<div>
  <!-- 仓库管理/出库管理 -->
  <el-breadcrumb style="padding-top: 10px;" separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/Dao' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>仓库管理</el-breadcrumb-item>
      <el-breadcrumb-item>出库管理</el-breadcrumb-item>
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
            &(!filterGoods_name || data.goods_name.toLowerCase().includes(filterGoods_name.toString().toLowerCase()))
            &(!filterGoods_danwei || data.goods_danwei.toLowerCase().includes(filterGoods_danwei.toString().toLowerCase()))
            &(!filterChuku_number || data.chuku_number.toLowerCase().includes(filterChuku_number.toString().toLowerCase()))
            &(!filterBefore_stock || data.before_stock.toLowerCase().includes(filterBefore_stock.toString().toLowerCase()))
            &(!filterAfter_stock || data.after_stock.toLowerCase().includes(filterAfter_stock.toString().toLowerCase()))
            )" border style="width: 100%">
          <el-table-column min-width='90' align="center">
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
                          <el-input v-model="filterGoods_name"> </el-input>
                          <div slot="reference"> <label> 商品名 </label> <i class='el-icon-arrow-down'> </i> </div>
                      </el-popover>
                  </template>
                  <template slot-scope="scope">
                      <div>
                          {{scope.row.goods_name}}
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
                          <el-input v-model="filterChuku_number"> </el-input>
                          <div slot="reference"> <label> 出库数量 </label> <i class='el-icon-arrow-down'> </i> </div>
                      </el-popover>
                  </template>
                  <template slot-scope="scope">
                      <div>
                          {{scope.row.chuku_number}}
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
                          <div slot="reference"> <label> 更新后库存 </label> <i class='el-icon-arrow-down'> </i> </div>
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
            &(!filterItem_name || data.item_name.toLowerCase().includes(filterItem_name.toString().toLowerCase()))
            &(!filterGoods_name || data.goods_name.toLowerCase().includes(filterGoods_name.toString().toLowerCase()))
            &(!filterGoods_danwei || data.goods_danwei.toLowerCase().includes(filterGoods_danwei.toString().toLowerCase()))
            &(!filterChuku_number || data.chuku_number.toLowerCase().includes(filterChuku_number.toString().toLowerCase()))
            &(!filterBefore_stock || data.before_stock.toLowerCase().includes(filterBefore_stock.toString().toLowerCase()))
            &(!filterAfter_stock || data.after_stock.toLowerCase().includes(filterAfter_stock.toString().toLowerCase()))
            )" border style="width: 100%">
          <el-table-column min-width='90' align="center">
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
                          <el-input v-model="filterGoods_name"> </el-input>
                          <div slot="reference"> <label> 商品名 </label> <i class='el-icon-arrow-down'> </i> </div>
                      </el-popover>
                  </template>
                  <template slot-scope="scope">
                      <div>
                          {{scope.row.goods_name}}
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
                          <el-input v-model="filterChuku_number"> </el-input>
                          <div slot="reference"> <label> 出库数量 </label> <i class='el-icon-arrow-down'> </i> </div>
                      </el-popover>
                  </template>
                  <template slot-scope="scope">
                      <div>
                          {{scope.row.chuku_number}}
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
                          <div slot="reference"> <label> 更新后库存 </label> <i class='el-icon-arrow-down'> </i> </div>
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

  <!-- 弹出层 -->
  <el-dialog :title="titleMap[dialogTitle]" width="45%" :visible.sync="dialogFormVisible" @close='closeDialog'>
      <el-form
        :model="chuku"
        status-icon :rules="rules"
        ref="chuku"
        label-width="100px"
        class="demo-ruleForm"
      >
      <el-row>
        <el-col :span="18">
          <el-row>
         <el-col :span="12">
          <el-form-item label="项目名称" prop="item_name" :label-width="formLabelWidth">
            <el-select :disabled="validated" filterable v-model="chuku.item_name" placeholder="请选择项目">
                <el-option v-for="item in jianzhu" :key="item.id" :label="item.item_name" :value="item.item_name"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
         <el-col :span="12">
          <el-form-item label="商品名" prop="goods_name" :label-width="formLabelWidth">
            <el-select :disabled="validated" filterable v-model="chuku.goods_name" placeholder="请选择商品">
              <el-option v-for="item in wuliao" :key="item.id" :label="item.name" :value="item.name"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="商品单位" prop="goods_danwei" :label-width="formLabelWidth">
            <el-select :disabled="validated" filterable v-model="chuku.goods_danwei" placeholder="请选择单位">
              <el-option v-for="item in result" :key="item.id" :label="item.name" :value="item.name"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="出库数量" prop="chuku_number" :label-width="formLabelWidth">
            <el-input :disabled="validated" v-model="chuku.chuku_number"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
            <el-form-item label="当前库存" prop="before_stock" :label-width="formLabelWidth">
                <el-input :disabled="validated" v-model="chuku.before_stock"></el-input>
             </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="更新后库存" prop="after_stock" :label-width="formLabelWidth">
            <el-input :disabled="validated" v-model="chuku.after_stock"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="当前流程" prop="nodeName" :label-width="formLabelWidth">
            <el-input :disabled="liucheng" v-model="chuku.nodeName"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12"><el-form-item></el-form-item></el-col> 
        <el-col :span="12">
        <el-form-item>
           <el-button type="primary" :disabled="annui" v-show="isshow" ref="buttonname" id="submitButton" @click="submit('chuku')">{{buttonText}}</el-button>
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
  <!-- <div>
            <el-pagination
  background
  layout="prev, pager, next"
  :total="page_total"
  :page-size=1>
</el-pagination>
          </div> -->
</div>

</template>

<script>
import authservice from "../services/auth.service"
import DanweiService from "../services/DanweiService";
import WuliaoService from "../services/WuliaoService";
import ChukuService from "../services/ChukuService"
import ChukuState from "../services/ChukuState"
import ChukuStatelog from "../services/ChukuStatelog"
import CodeService from "../services/CodeService";
import JianzhuService from "../services/JianzhuService";
  export default {
    created () {
          this.tableonload();
          this.selectDanwei(),
          this.selectwuliao();
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
        CodeService.findByLog("出库记录").then(response=>{
            this.code=response.data.code_name+"-"+time+"-"+response.data.sum.toString().padStart(5,'0')
        })
    },
    selectJianzhu(){
      JianzhuService.getAll().then(response=>{
        this.jianzhu=response.data
      })
    },
      selectState(){
         ChukuState.getAll()
        .then(response => {
          this.activities=response.data
          // console.log(response.data);
        })
        .catch(e => {
          // console.log(e);
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
                    // console.log(old)
                        for (var i = 0; i < this.adddept.length; i++) {
                            let pre = this.adddept[i];
                            // console.log(pre)
                                if (pre === old) {
                                    this.isshow1=true;
                                    // console.log("显示")
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
           ChukuService.get(this.pa)
         .then(response => {
            // if(response.data.ChukuState.lastone===1){
                  this.isshow=false;
                // }
          this.qiyeid=this.pa
          this.nextState=response.data.ChukuState.nextStateid
          this.oldStateid=response.data.ChukuState.id
          // console.log(this.activities)
                this.chuku=response.data;
                this.chuku.nodeName = response.data.ChukuState.nodeName;
                this.validated=true;
                this.buttonText = response.data.ChukuState.nodebutton;
               
              })
              .catch(e => {
                console.log(e);
              });
              this.selectStateAndLogs();
       },
       addStatelog(){
         var data = {
              userId:this.currentUser.id,
              chukuId: this.qiyeid,
              oldstateid: this.oldStateid,
              newstateid:this.nextState,
              operateId:4
              }
              ChukuStatelog.create(data).then(response => {
          // console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
      },
      updateState(index,row){
        var data = {
           ChukuStateId:this.nextState
          }
          ChukuService.update(this.pa,data)
        .then(response => {
          this.tableonload();
          // console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
       },
       selectStateAndLogs(){
        ChukuState.getAll()
        .then(response => {
          this.activities=response.data
          this.selectlogs();
          // console.log(response.data);
        })
        .catch(e => {
          // console.log(e);
        });
      },
      getfor(row,column){
            return row.ChukuState.nodeName;
          },
      selectwuliao(){
              WuliaoService.getAll().then(response =>{
                this.wuliao=response.data;
              })
          },
      selectDanwei(){
             DanweiService.getAll()
                .then(response => {
                    this.result = response.data;
                }).catch(e => {
                    console.log(e);
                });
          },
      async tableonload(){
         ChukuService.getAll()
        .then(response => {
          this.tableData = response.data;
          this.page_total=response.data.length
          this.selectdept();
          this.selectCode();
          console.log(this.page_total);
        })
        .catch(e => {
          console.log(e);
        });
      },
       openFrom(){
         this.selectJianzhu()
          this.chuku={},
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
        item_name: this.chuku.item_name,
        goods_name: this.chuku.goods_name,
        goods_danwei:this.chuku.goods_danwei,
        chuku_number:this.chuku.chuku_number,
        before_stock:this.chuku.before_stock,
        after_stock:this.chuku.after_stock,
        nodeName:this.chuku.nodeName
        }
        ChukuService.create(data)
        .then(response => {
          this.tableonload();
          var data = {
              userId:this.currentUser.id,
              chukuId: response.data.id,
              oldstateid: 1,
              newstateid:response.data.ChukuStateId,
              operateId:1,
              }
              ChukuStatelog.create(data).then(response => {
              }).catch(e => {
                console.log(e);
              });
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
       },
       submit(chuku){
          this.$refs[chuku].validate((valid) => {
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
        let chukuId=this.pa
          ChukuStatelog.findByLog(chukuId).then(response => {
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
          // if(this.deptId.length===0){
          //   alert("当前用户没有权限进行该操作")
          // }
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
                                    ChukuService.get(this.pa)
                                  .then(response => {
                                          this.chuku=response.data;
                                          this.chuku.nodeName = response.data.ChukuState.nodeName;
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
          this.selectJianzhu()
          authservice.get(this.currentUser.id).then(response =>{
             this.deptId = [];
          for (var i = 0; i < response.data.depts.length; i++) {
            this.deptId.push(response.data.depts[i].id);
          }
          // if(this.deptId.length===0){
          //   alert("当前用户没有权限进行该操作")
          // }
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
                                    ChukuService.get(this.pa)
                                    .then(response => {
                                          this.chuku=response.data;
                                          this.chuku.nodeName = response.data.ChukuState.nodeName;
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
            id:this.chuku.id,
            item_name: this.chuku.item_name,
            goods_name: this.chuku.goods_name,
            goods_danwei:this.chuku.goods_danwei,
            chuku_number:this.chuku.chuku_number,
            before_stock:this.chuku.before_stock,
            after_stock:this.chuku.after_stock,
            nodeName:this.chuku.nodeName
        }
          ChukuService.update(data.id,data)
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
              ChukuService.delete(pa)
              .then(response => {
                 var data = {
              userId:this.currentUser.id,
              chukuId: pa,
              oldstateid: 1,
              newstateid:1,
              operateId:3,
              }
              ChukuStatelog.create(data).then(response => {
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
          // if(this.deptId.length===0){
          //   alert("当前用户没有权限进行该操作")
          // }
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
        // console.log(tab, event);
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
        // page:2,
        page_total:0,
        code:"",
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
         examine: "出库信息",
      },
        dialogTitle:"",
        TravelType:1,
        formLabelWidth: "100px",
        rules:{
          item_name: [
            { required: true, message: '请输入项目名称', trigger: 'blur' },
          ],
          goods_name: [
            { required: true, message: '请输入商品名', trigger: 'change' }
          ],
          chuku_number: [
            { required: true, message: '请输入出库数量', trigger: 'change' }
          ],
        },
        tableData:[],
        wuliao:[],
        result:[],
        chuku:{},
        filterCode:'',
        filterItem_name:'',
        filterGoods_name:'',
        filterGoods_danwei:'',
        filterChuku_number:'',
        filterBefore_stock:'',
        filterAfter_stock:'',
        dialogFormVisible: false,
      }
    }
  }
</script>