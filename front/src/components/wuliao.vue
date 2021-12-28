<template>
<div>
    <!-- 基本资料管理/物料参数/物料资料 -->
    <el-breadcrumb style="padding-top: 10px;" separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/Dao' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>基本资料管理</el-breadcrumb-item>
        <el-breadcrumb-item>物料参数</el-breadcrumb-item>
        <el-breadcrumb-item>物料资料</el-breadcrumb-item>
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
            :data="tableData.filter(data => (!filteredName || data.name.toLowerCase().includes(filteredName.toString().toLowerCase()))
                &(!filterDanwei || data.danwei.toLowerCase().includes(filterDanwei.toString().toLowerCase()))
                &(!filterCode || data.code.toString().toLowerCase().includes(filterCode.toString().toLowerCase()))
                &(!filterSpecification || data.Specification.toLowerCase().includes(filterSpecification.toString().toLowerCase()))
                &(!filterWuliaotype || data.wuliaotype.toLowerCase().includes(filterWuliaotype.toString().toLowerCase()))
                &(!filterRemarks || data.remarks.toLowerCase().includes(filterRemarks.toString().toLowerCase()))
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
                            <el-input v-model="filteredName"> </el-input>
                            <div slot="reference"> <label> 名称 </label> <i class='el-icon-arrow-down'> </i> </div>
                        </el-popover>
                    </template>
                    <template slot-scope="scope">
                        <div>
                            {{scope.row.name}}
                        </div>
                    </template>
                </el-table-column>
                <el-table-column min-width='50' align="center">
                    <!-- eslint-disable-next-line -->
                    <template slot="header" slot-scope="scope">
                        <el-popover placement="bottom" trigger="click">
                            <el-input v-model="filterSpecification"> </el-input>
                            <div slot="reference"> <label> 规格型号 </label> <i class='el-icon-arrow-down'> </i> </div>
                        </el-popover>
                    </template>
                    <template slot-scope="scope">
                        <div>
                            {{scope.row.Specification}}
                        </div>
                    </template>
                </el-table-column>
                <el-table-column min-width='50' align="center">
                    <!-- eslint-disable-next-line -->
                    <template slot="header" slot-scope="scope">
                        <el-popover placement="bottom" trigger="click">
                            <el-input v-model="filterWuliaotype"> </el-input>
                            <div slot="reference"> <label> 物料类型 </label> <i class='el-icon-arrow-down'> </i> </div>
                        </el-popover>
                    </template>
                    <template slot-scope="scope">
                        <div>
                            {{scope.row.wuliaotype}}
                        </div>
                    </template>
                </el-table-column>
                <el-table-column min-width='50' align="center">
                    <!-- eslint-disable-next-line -->
                    <template slot="header" slot-scope="scope">
                        <el-popover placement="bottom" trigger="click">
                            <el-input v-model="filterDanwei"> </el-input>
                            <div slot="reference"> <label> 计量单位 </label> <i class='el-icon-arrow-down'> </i> </div>
                        </el-popover>
                    </template>
                    <template slot-scope="scope">
                        <div>
                            {{scope.row.danwei}}
                        </div>
                    </template>
                </el-table-column>
                <el-table-column min-width="55"  prop="avatar" label="物料图片" align="center">
                    <template slot-scope="scope">
                        <el-image style="width: 100px; height: 100px" :src="scope.row.avatar" :preview-src-list="[scope.row.avatar]">
                        </el-image>
                    </template>
                </el-table-column>
                <el-table-column min-width='50' align="center">
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
                <el-table-column fixed="right" label="操作" width="300" align="center">
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
                :data="tableData1.filter(data => (!filteredName || data.name.toLowerCase().includes(filteredName.toString().toLowerCase()))
                    &(!filterDanwei || data.danwei.toLowerCase().includes(filterDanwei.toString().toLowerCase()))
                    &(!filterCode || data.code.toString().toLowerCase().includes(filterCode.toString().toLowerCase()))
                    &(!filterSpecification || data.Specification.toLowerCase().includes(filterSpecification.toString().toLowerCase()))
                    &(!filterWuliaotype || data.wuliaotype.toLowerCase().includes(filterWuliaotype.toString().toLowerCase()))
                    &(!filterRemarks || data.remarks.toLowerCase().includes(filterRemarks.toString().toLowerCase()))
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
                                <el-input v-model="filteredName"> </el-input>
                                <div slot="reference"> <label> 名称 </label> <i class='el-icon-arrow-down'> </i> </div>
                            </el-popover>
                        </template>
                        <template slot-scope="scope">
                            <div>
                                {{scope.row.name}}
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column min-width='50' align="center">
                        <!-- eslint-disable-next-line -->
                        <template slot="header" slot-scope="scope">
                            <el-popover placement="bottom" trigger="click">
                                <el-input v-model="filterSpecification"> </el-input>
                                <div slot="reference"> <label> 规格型号 </label> <i class='el-icon-arrow-down'> </i> </div>
                            </el-popover>
                        </template>
                        <template slot-scope="scope">
                            <div>
                                {{scope.row.Specification}}
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column min-width='50' align="center">
                        <!-- eslint-disable-next-line -->
                        <template slot="header" slot-scope="scope">
                            <el-popover placement="bottom" trigger="click">
                                <el-input v-model="filterWuliaotype"> </el-input>
                                <div slot="reference"> <label> 物料类型 </label> <i class='el-icon-arrow-down'> </i> </div>
                            </el-popover>
                        </template>
                        <template slot-scope="scope">
                            <div>
                                {{scope.row.wuliaotype}}
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column min-width='50' align="center">
                        <!-- eslint-disable-next-line -->
                        <template slot="header" slot-scope="scope">
                            <el-popover placement="bottom" trigger="click">
                                <el-input v-model="filterDanwei"> </el-input>
                                <div slot="reference"> <label> 计量单位 </label> <i class='el-icon-arrow-down'> </i> </div>
                            </el-popover>
                        </template>
                        <template slot-scope="scope">
                            <div>
                                {{scope.row.danwei}}
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column min-width="55"  prop="avatar" label="物料图片" align="center">
                        <template slot-scope="scope">
                            <el-image style="width: 100px; height: 100px" :src="scope.row.avatar" :preview-src-list="[scope.row.avatar]">
                            </el-image>
                        </template>
                    </el-table-column>
                    <el-table-column min-width='50' align="center">
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
                    <el-table-column fixed="right" label="操作" width="300" align="center">
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
        <el-form :model="wuliao" status-icon :rules="rules" ref="wuliao" label-width="100px" class="demo-ruleForm">
            <el-row>
                <el-col :span="18">
                    <el-row>
                <el-col :span="12">
                    <el-form-item label="名称" prop="name" :label-width="formLabelWidth">
                        <el-input :disabled="validated" v-model="wuliao.name"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="规格型号" prop="Specification" :label-width="formLabelWidth">
                        <el-input :disabled="validated" v-model="wuliao.Specification"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="12">
                    <el-form-item label="物料类型" prop="wuliaotype" :label-width="formLabelWidth">
                        <el-select :disabled="validated" filterable v-model="wuliao.wuliaotype" placeholder="请选择">
                            <el-option v-for="item in result1" :key="item.id" :label="item.name" :value="item.name"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="计量单位" prop="danwei" :label-width="formLabelWidth">
                        <el-select :disabled="validated" filterable v-model="wuliao.danwei" placeholder="请选择单位">
                            <el-option v-for="item in result" :key="item.id" :label="item.name" :value="item.name"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-form-item label="物料图片" ref="uploadElement" prop="avatar" :label-width="formLabelWidth">
                    <!-- <el-input v-model="addwuliao.avatar" v-if="false"></el-input> -->
                    <el-upload :disabled="validated" ref="upload" class="avatar-uploader" 
                    action="http://106.15.5.29:8082/api/Wuliao/upload"
                    :show-file-list="false" 
                    :auto-upload="false" 
                    :data="wuliao" 
                    :on-change="handleAvatarChange" 
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload"
                    :file-list="fileList">
                        <img v-if="imageUrl" :src="imageUrl" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                </el-form-item>
            </el-row>
            <el-row>
                <el-col :span="12">
                    <el-form-item label="备注" prop="remarks" :label-width="formLabelWidth">
                        <el-input :disabled="validated" v-model="wuliao.remarks"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="当前流程" prop="nodeName" :label-width="formLabelWidth">
                        <el-input :disabled="liucheng" v-model="wuliao.nodeName"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="12"><el-form-item></el-form-item></el-col> 
                <el-col :span="12">
                    <el-form-item>
                        <el-button type="primary" :disabled="annui" v-show="isshow" ref="buttonname" id="submitButton" @click="submit('wuliao')">{{buttonText}}</el-button>
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
import DanweiService from "../services/DanweiService";
import WuliaoService from "../services/WuliaoService";
import WuliaoState from "../services/WuliaoState";
import WuliaoStatelog from "../services/WuliaoStatelog";
import WuliaoTypeService from "../services/WuliaoTypeService";
import CodeService from "../services/CodeService";
import http from "../http-common";
export default {
    created() {
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
        CodeService.findByLog("物料资料").then(response=>{
            this.code=response.data.code_name+"-"+time+"-"+response.data.sum.toString().padStart(5,'0')
        })
    },
      selectState(){
         WuliaoState.getAll()
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
           WuliaoService.get(this.pa)
         .then(response => {
                this.isshow=false;
                this.qiyeid=this.pa
                this.nextState=response.data.WuliaoState.nextStateid
                this.oldStateid=response.data.WuliaoState.id
                this.wuliao=response.data;
                this.wuliao.nodeName = response.data.WuliaoState.nodeName;
                this.imageUrl=response.data.avatar
                this.validated=true;
                this.buttonText = response.data.WuliaoState.nodebutton;
               
              })
              .catch(e => {
                console.log(e);
              });
              this.selectStateAndLogs();
       },
       addStatelog(){
         var data = {
              userId:this.currentUser.id,
              wuliaoId: this.qiyeid,
              oldstateid: this.oldStateid,
              newstateid:this.nextState,
              operateId:4
              }
              WuliaoStatelog.create(data).then(response => {
        })
        .catch(e => {
          console.log(e);
        });
      },
      updateState(index,row){
        var data = {
           WuliaoStateId:this.nextState
          }
          WuliaoService.update(this.pa,data)
        .then(response => {
          this.tableonload();
        })
        .catch(e => {
          console.log(e);
        });
       },
       selectStateAndLogs(){
        WuliaoState.getAll()
        .then(response => {
          this.activities=response.data
          this.selectlogs();
        })
        .catch(e => {
          console.log(e);
        });
      },
      getfor(row,column){
            return row.WuliaoState.nodeName;
          },
        async tableonload() {
            WuliaoService.getAll()
                .then(response => {
                    this.tableData = response.data;
                    this.selectdept();
                    this.selectCode();
                })
                .catch(e => {
                    console.log(e);
                });
        },
        selectwuliaotype(){
            WuliaoTypeService.getAll()
                .then(response => {
                    this.result1 = response.data;
                }).catch(e => {
                    console.log(e);
                });
        },
        selectDanwei(){
            DanweiService.getAll()
                .then(response => {
                    this.result = response.data;
                }).catch(e => {
                    console.log(e);
                });
        },
        openFrom() {
            this.selectwuliaotype();
            this.selectDanwei()
            this.wuliao={},
            this.selectState();
            this.validated=false;
            this.liucheng=true,
            this.annui=false;
            this.dialogTitle = "addData";
            //新建时候清空url
            this.imageUrl=""
            this.dialogFormVisible = true
        },
        addservice(){
         this.dialogFormVisible = false;
                    var data = {
                        code:this.code,
                        name: this.wuliao.name,
                        Specification: this.wuliao.Specification,
                        wuliaotype: this.wuliao.wuliaotype,
                        danwei: this.wuliao.danwei,
                        //读到的url在这用
                        avatar: this.imageUrl,
                        remarks: this.wuliao.remarks,
                        nodeName: this.wuliao.nodeName
                    }
                    WuliaoService.create(data)
                        .then(response => {
                            this.tableonload();
                            var data = {
              userId:this.currentUser.id,
              wuliaoId: response.data.id,
              oldstateid: 1,
              newstateid:response.data.WuliaoStateId,
              operateId:1,
              }
              WuliaoStatelog.create(data).then(response => {
              }).catch(e => {
                console.log(e);
              });
                            console.log(response.data);
                        })
                        .catch(e => {
                            console.log(e);
                        });
                        //上传完成后清空一下
                this.imageUrl=""
                this.tmpUrl=""
       },
        submit(wuliao){
          this.$refs[wuliao].validate((valid) => {
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
        let wuliaoId=this.pa
          WuliaoStatelog.findByLog(wuliaoId).then(response => {
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
        kanClick(index,row) {
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
                                    this.dialogFormVisible = true
                                    this.dialogTitle = "kanData";
                                    this.annui=true;
                                    this.liucheng=true,
                                    this.validated=true;
                                    this.pa=this.tableData[index].id;
                                    this.selectStateAndLogs();
                                    WuliaoService.get(this.pa)
                                        .then(response => {
                                            this.wuliao = response.data;
                                        this.wuliao.nodeName = response.data.WuliaoState.nodeName;
                                            this.imageUrl=response.data.avatar
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
        updateClick(index, row) {
            this.selectwuliaotype();
            this.selectDanwei()
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
                                    this.dialogFormVisible = true;
                                    this.dialogTitle = "updataData";
                                    this.annui=false;
                                    this.validated=false;
                                    this.liucheng=true, 
                                    this.pa=this.tableData[index].id;
                                    this.selectStateAndLogs();
                                    WuliaoService.get(this.pa)
                                        .then(response => {
                                            this.wuliao = response.data;
                                            this.wuliao.nodeName = response.data.WuliaoState.nodeName;
                                            this.imageUrl=response.data.avatar;
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
        updateservice() {
            
                    this.dialogFormVisible = false;
                     var data = {
                id: this.wuliao.id,
                name: this.wuliao.name,
                Specification: this.wuliao.Specification,
                wuliaotype: this.wuliao.wuliaotype,
                danwei: this.wuliao.danwei,
                avatar: this.imageUrl,
                remarks: this.wuliao.remarks,
                nodeName: this.wuliao.nodeName
                            }
                    WuliaoService.update(data.id, data)
                        .then(response => {
                            this.tableonload();
                            //删除旧图片
                            http.delete('/general/deletefile',{data:{filename:this.oldUrl}});
                            this.oldUrl=""
                        })
                        .catch(e => {
                            console.log(e);
                        });

            this.imageUrl=""
            this.tmpUrl=""

        },
         delClickconfirm(index,row){
              let pa = this.tableData[index].id;
            WuliaoService.delete(pa)
                .then(response => {
                    var data = {
              userId:this.currentUser.id,
              wuliaoId: pa,
              oldstateid: 1,
              newstateid:1,
              operateId:3,
              }
              WuliaoStatelog.create(data).then(response => {
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
        delClick(index, row) {
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
        handleAvatarChange(file,filelist) {
            //选中文件,上传成功,上传失败都会调用这个函数
            //只有选择新文件的时候(file.status非ready),才执行后面的上传代码
            //否则直接返回
            if (file.status !== 'ready'){
                return;
            }

            this.$refs.upload.submit();
        },
        handleAvatarSuccess(res, file) {
            //this.imageUrl1 = URL.createObjectURL(file.raw);
            //this.imageUrl = URL.createObjectURL(file.raw);
            //如果上传过图片,先把旧的删除掉
            if (this.tmpUrl){
                http.delete('/general/deletefile',{data:{filename:this.tmpUrl}});
            }
            //上传成功后，会返回后端的图片地址，存到imageUrl里面，将来调用create的api
            this.imageUrl = res.url;
            this.tmpUrl = this.imageUrl;
        },
        beforeAvatarUpload(file) {
            const isJPG = file.type === 'image/jpeg';
            const isLt2M = file.size / 1024 / 1024 < 2;

            if (!isJPG) {
                this.$message.error('上传头像图片只能是 JPG 格式!');
            }
            if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return isJPG && isLt2M;
        },
        filterCurrent(value, row){
            return row.current_process === value;
        }
    },

    data() {
        return {
            code:"",
        tableData1: [],
        activeName: 'first',
        deletedept:[1,3,8],
        updatedept:[1,3,8],
        kandept:[1,3,8],
        isshow1:false,
        adddept:[1,3,8],
        deptId:[],
        pa:'',
        paa:'',
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
        examine: "物料信息",
      },
        dialogTitle:"",
            fileList:[{imageUrl:""}],
            imageUrl: '',
            oldUrl: '',
            tmpUrl: '',
            TravelType: 1,
            formLabelWidth: "100px",
            rules: {},
            tableData: [],
            result: [],
            result1: [],
            wuliao: {},
            // current_process:'',
            filteredName: '',
            filterDanwei: '',
            avatar:'',
            filterCode:'',
            filterWuliaotype:'',
            filterRemarks:'',
            filterSpecification:'',
            dialogFormVisible: false,
        }
    }
}
</script>
 
<style>
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}

.avatar-uploader .el-upload:hover {
    border-color: #409EFF;
}

.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
}

.avatar {
    width: 178px;
    height: 178px;
    display: block;
}
</style>
