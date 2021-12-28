<template>
<div>
  <!-- 业务管理/还款管理 -->
  <el-breadcrumb style="padding-top: 10px;" separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/Dao' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>业务管理</el-breadcrumb-item>
      <el-breadcrumb-item>还款管理</el-breadcrumb-item>
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
            &(!filterTotal_quota || data.total_quota.toLowerCase().includes(filterTotal_quota.toString().toLowerCase()))
            &(!filterMoney || data.money.toLowerCase().includes(filterMoney.toString().toLowerCase()))
            &(!filterHuan_money || data.huan_money.toLowerCase().includes(filterHuan_money.toString().toLowerCase()))
            &(!filtertime || data.time.toLowerCase().includes(filtertime.toString().toLowerCase()))
            &(!filterHuan_money1 || data.huan_money1.toLowerCase().includes(filterHuan_money1.toString().toLowerCase()))
            &(!filterMoney || data.money.toLowerCase().includes(filterMoney.toString().toLowerCase()))
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
          <el-table-column min-width='130' align="center">
                  <!-- eslint-disable-next-line -->
                  <template slot="header" slot-scope="scope">
                      <el-popover placement="bottom" trigger="click">
                          <el-input v-model="filterItem_name"> </el-input>
                          <div slot="reference"> <label> 还款项目名称 </label> <i class='el-icon-arrow-down'> </i> </div>
                      </el-popover>
                  </template>
                  <template slot-scope="scope">
                      <div>
                          {{scope.row.item_name}}
                      </div>
                  </template>
          </el-table-column>
          <el-table-column min-width='130' align="center">
                  <!-- eslint-disable-next-line -->
                  <template slot="header" slot-scope="scope">
                      <el-popover placement="bottom" trigger="click">
                          <el-input v-model="filterTotal_quota"> </el-input>
                          <div slot="reference"> <label> 授信总额度 </label> <i class='el-icon-arrow-down'> </i> </div>
                      </el-popover>
                  </template>
                  <template slot-scope="scope">
                      <div>
                          {{scope.row.total_quota}}
                      </div>
                  </template>
          </el-table-column>
          <el-table-column min-width='130' align="center">
                  <!-- eslint-disable-next-line -->
                  <template slot="header" slot-scope="scope">
                      <el-popover placement="bottom" trigger="click">
                          <el-input v-model="filterMoney"> </el-input>
                          <div slot="reference"> <label> 已用授信额度 </label> <i class='el-icon-arrow-down'> </i> </div>
                      </el-popover>
                  </template>
                  <template slot-scope="scope">
                      <div>
                          {{scope.row.money}}
                      </div>
                  </template>
          </el-table-column>
          <el-table-column min-width='130' align="center">
                  <!-- eslint-disable-next-line -->
                  <template slot="header" slot-scope="scope">
                      <el-popover placement="bottom" trigger="click">
                          <el-input v-model="filterHuan_money"> </el-input>
                          <div slot="reference"> <label> 还款金额 </label> <i class='el-icon-arrow-down'> </i> </div>
                      </el-popover>
                  </template>
                  <template slot-scope="scope">
                      <div>
                          {{scope.row.huan_money}}
                      </div>
                  </template>
          </el-table-column>
          <el-table-column min-width='130' align="center">
                  <!-- eslint-disable-next-line -->
                  <template slot="header" slot-scope="scope">
                      <el-popover placement="bottom" trigger="click">
                          <el-input v-model="filtertime"> </el-input>
                          <div slot="reference"> <label> 还款时间 </label> <i class='el-icon-arrow-down'> </i> </div>
                      </el-popover>
                  </template>
                  <template slot-scope="scope">
                      <div>
                          {{scope.row.time}}
                      </div>
                  </template>
          </el-table-column>
          <el-table-column min-width='150' align="center">
                  <!-- eslint-disable-next-line -->
                  <template slot="header" slot-scope="scope">
                      <el-popover placement="bottom" trigger="click">
                          <el-input v-model="filterHuan_money1"> </el-input>
                          <div slot="reference"> <label> 还款后使用授信额度 </label> <i class='el-icon-arrow-down'> </i> </div>
                      </el-popover>
                  </template>
                  <template slot-scope="scope">
                      <div>
                          {{scope.row.huan_money1}}
                      </div>
                  </template>
          </el-table-column>
          <el-table-column min-width="100"  prop="huan_stream" label="还款流水" align="center">
                  <template slot-scope="scope">
                      <el-image style="width: 100px; height: 100px" :src="scope.row.huankuanimages[0].path" :preview-src-list="[scope.row.huankuanimages[0].path]">
                      </el-image>
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
            &(!filterTotal_quota || data.total_quota.toLowerCase().includes(filterTotal_quota.toString().toLowerCase()))
            &(!filterMoney || data.money.toLowerCase().includes(filterMoney.toString().toLowerCase()))
            &(!filterHuan_money || data.huan_money.toLowerCase().includes(filterHuan_money.toString().toLowerCase()))
            &(!filtertime || data.time.toLowerCase().includes(filtertime.toString().toLowerCase()))
            &(!filterHuan_money1 || data.huan_money1.toLowerCase().includes(filterHuan_money1.toString().toLowerCase()))
            &(!filterMoney || data.money.toLowerCase().includes(filterMoney.toString().toLowerCase()))
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
          <el-table-column min-width='130' align="center">
                  <!-- eslint-disable-next-line -->
                  <template slot="header" slot-scope="scope">
                      <el-popover placement="bottom" trigger="click">
                          <el-input v-model="filterItem_name"> </el-input>
                          <div slot="reference"> <label> 还款项目名称 </label> <i class='el-icon-arrow-down'> </i> </div>
                      </el-popover>
                  </template>
                  <template slot-scope="scope">
                      <div>
                          {{scope.row.item_name}}
                      </div>
                  </template>
          </el-table-column>
          <el-table-column min-width='130' align="center">
                  <!-- eslint-disable-next-line -->
                  <template slot="header" slot-scope="scope">
                      <el-popover placement="bottom" trigger="click">
                          <el-input v-model="filterTotal_quota"> </el-input>
                          <div slot="reference"> <label> 授信总额度 </label> <i class='el-icon-arrow-down'> </i> </div>
                      </el-popover>
                  </template>
                  <template slot-scope="scope">
                      <div>
                          {{scope.row.total_quota}}
                      </div>
                  </template>
          </el-table-column>
          <el-table-column min-width='130' align="center">
                  <!-- eslint-disable-next-line -->
                  <template slot="header" slot-scope="scope">
                      <el-popover placement="bottom" trigger="click">
                          <el-input v-model="filterMoney"> </el-input>
                          <div slot="reference"> <label> 已用授信额度 </label> <i class='el-icon-arrow-down'> </i> </div>
                      </el-popover>
                  </template>
                  <template slot-scope="scope">
                      <div>
                          {{scope.row.money}}
                      </div>
                  </template>
          </el-table-column>
          <el-table-column min-width='130' align="center">
                  <!-- eslint-disable-next-line -->
                  <template slot="header" slot-scope="scope">
                      <el-popover placement="bottom" trigger="click">
                          <el-input v-model="filterHuan_money"> </el-input>
                          <div slot="reference"> <label> 还款金额 </label> <i class='el-icon-arrow-down'> </i> </div>
                      </el-popover>
                  </template>
                  <template slot-scope="scope">
                      <div>
                          {{scope.row.huan_money}}
                      </div>
                  </template>
          </el-table-column>
          <el-table-column min-width='130' align="center">
                  <!-- eslint-disable-next-line -->
                  <template slot="header" slot-scope="scope">
                      <el-popover placement="bottom" trigger="click">
                          <el-input v-model="filtertime"> </el-input>
                          <div slot="reference"> <label> 还款金额 </label> <i class='el-icon-arrow-down'> </i> </div>
                      </el-popover>
                  </template>
                  <template slot-scope="scope">
                      <div>
                          {{scope.row.time}}
                      </div>
                  </template>
          </el-table-column>
          <el-table-column min-width='150' align="center">
                  <!-- eslint-disable-next-line -->
                  <template slot="header" slot-scope="scope">
                      <el-popover placement="bottom" trigger="click">
                          <el-input v-model="filterHuan_money1"> </el-input>
                          <div slot="reference"> <label> 还款后使用授信额度 </label> <i class='el-icon-arrow-down'> </i> </div>
                      </el-popover>
                  </template>
                  <template slot-scope="scope">
                      <div>
                          {{scope.row.huan_money1}}
                      </div>
                  </template>
          </el-table-column>
          <el-table-column min-width="100"  prop="huan_stream" label="还款流水" align="center">
                  <template slot-scope="scope">
                      <el-image style="width: 100px; height: 100px" :src="scope.row.huankuanimages[0].path" :preview-src-list="[scope.row.huankuanimages[0].path]">
                      </el-image>
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
  <el-dialog :title="titleMap[dialogTitle]" width="50%" :visible.sync="dialogFormVisible" @close='closeDialog'>
      <el-form
        :model="huankuan"
        status-icon :rules="rules"
        ref="huankuan"
        label-width="100px"
        class="demo-ruleForm"
      >
      <el-row>
        <el-col :span="18">
          <el-row>
         <el-col :span="12">
          <el-form-item label="还款项目名称" prop="item_name" :label-width="formLabelWidth">
            <el-select filterable v-model="huankuan.item_name" @change="selectOption" placeholder="请选择">
              <el-option v-for="item in jianzhu" :key="item.id" :label="item.item_name" :value="item.item_name"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="授信总额度" prop="total_quota" :label-width="formLabelWidth">
            <el-input :disabled="true" v-model="huankuan.total_quota" @blur="inputMoney($event,'total_quota')"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="已用授信额度" prop="money" :label-width="formLabelWidth">
           <el-input :disabled="validated" v-model="huankuan.money" @blur="inputMoney($event,'money')"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="还款后使用授信额度" prop="huan_money1" :label-width="formLabelWidth">
            <el-input :disabled="validated" v-model="huankuan.huan_money1" @blur="inputMoney($event,'huan_money1')"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
         <el-col :span="12">
          <el-form-item label="还款金额" prop="huan_money" :label-width="formLabelWidth">
            <el-input :disabled="validated" v-model="huankuan.huan_money" @blur="inputMoney($event,'huan_money')"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="还款时间" prop="time" :label-width="formLabelWidth">
             <el-date-picker :disabled="validated" v-model="huankuan.time" type="date" placeholder="选择日期"></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col>
                <el-form-item label="还款流水" ref="uploadElement" prop="huan_stream" :label-width="formLabelWidth">
                  <el-upload
                      ref="upload"
                      class="upload-demo"
                      action="http://106.15.5.29:8082/api/HuanKuan/upload" 
                      :on-preview="handlePreview"
                      :on-remove="handleRemove"
                      :auto-upload="false"
                      :on-change="(file,fileList) =>{return handleAvatarChange(file,fileList,0)}"
                      :on-success="(response,file,fileList) =>{return handleAvatarSuccess(response,file,fileList,0)}" 
                      :file-list="fileList"
                      list-type="picture">
                      <el-button size="small" type="primary">点击上传</el-button>
                      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                    </el-upload>
                    <!-- <el-upload :disabled="validated1" ref="upload" class="avatar-uploader" 
                    action="http://localhost:8080/api/HuanKuan/upload" 
                    :show-file-list="false" 
                    :auto-upload="false" 
                    :data="huankuan" 
                    :on-change="handleAvatarChange" 
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload"
                    :file-list="fileList">
                        <img v-if="imageUrl" :src="imageUrl" class="huan_stream">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload> -->
                </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="当前流程" prop="nodeName" :label-width="formLabelWidth">
            <el-input :disabled="liucheng" v-model="huankuan.nodeName"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="11"><el-form-item></el-form-item></el-col>   
        <el-col :span="13">
        <el-form-item>
           <el-button type="primary" :disabled="annui" v-show="isshow" ref="buttonname" id="submitButton" @click="submit('huankuan')">{{buttonText}}</el-button>
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
import JianzhuService from "../services/JianzhuService";
import DaibanService from "../services/DaibanService"
import authservice from "../services/auth.service"
import HuanKuanService from "../services/HuanKuanService"
import HuankuanState from "../services/HuankuanState"
import HuankuanStatelog from "../services/HuankuanStatelog"
import CodeService from "../services/CodeService";
import {getInputValue} from "../util";
import HuankuanImageService from "../services/HuankuanImage";
  export default {
    created () {
      this.selectdept1();
          this.tableonload();
      },
      computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
   mounted: function () {
      this.updateType()
  },
    methods: {
      //关闭弹框的事件
    closeDialog(){
      this.fileList=[]
      this.buttonText="确定"
      this.isshow=false;
    },
    inputMoney(el,name) {
         this.huankuan[name] = getInputValue(el);
     },
    selectCode(){
        let date = new Date();
        let year = date.getFullYear(); // 年
        let month = (date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1) // 月
        let day = date.getDate(); // 日
        let time=`${year}${month}${day}`;
        CodeService.findByLog("还款管理").then(response=>{
            this.code=response.data.code_name+"-"+time+"-"+response.data.sum.toString().padStart(5,'0')
        })
    },
    selectOption(){
      const item = this.jianzhu.find(item1=> item1.item_name === this.huankuan.item_name)
      this.huankuan.total_quota = item.total_quota
    },
    selectJianzhu(){
      JianzhuService.getAll().then(response=>{
        this.jianzhu=response.data
      })
    },
      selectState(){
         HuankuanState.getAll()
        .then(response => {
          this.activities=response.data
          // console.log(response.data);
        })
        .catch(e => {
          // console.log(e);
        });
      },
      selectdept1(){
        this.tableData1=[]
        authservice.get(this.currentUser.id).then(resUser =>{
          HuanKuanService.getAll().then(async resAllHuanKuan =>  {          
            for(var i=0;i<resAllHuanKuan.data.length;i++){
              await HuankuanState.get(resAllHuanKuan.data[i].HuankuanStateId).then(resHuanKuanState =>{
                var ifKeep=false;
                for (let k = 0; k < resUser.data.depts.length; k++){
                  for (var l = 0; l < resHuanKuanState.data.depts.length; l++){
                    if (resUser.data.depts[k].id === resHuanKuanState.data.depts[l].id){
                      ifKeep=true;
                    }
                  }
                }
                if(ifKeep){
                  this.tableData1.push(resAllHuanKuan.data[i])
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
          // this.selectdept();
           HuanKuanService.get(this.pa)
          .then(response => {
           this.lastone=response.data.HuankuanState.lastone;
          HuankuanState.get(response.data.HuankuanState.nextStateid).then(response =>{
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
                                    // console.log("显示")
                                }
                            }
                       }
                      if(this.isshow===true){
                        // console.log("显示")
                       }else{
                         this.isshow=false;
                        //  console.log("消失")
                       }
                       if(this.lastone===1){
                         this.isshow=false;
                       }
               })
               
                      //  console.log(this.isshow)
          this.qiyeid=this.pa
          this.nextState=response.data.HuankuanState.nextStateid
          this.oldStateid=response.data.HuankuanState.id
          // console.log(this.activities)
                this.huankuan=response.data;
                this.huankuan.nodeName = response.data.HuankuanState.nodeName;
                this.imageUrl=response.data.huan_stream
                this.validated=true;
                this.validated1=false;
                this.buttonText = response.data.HuankuanState.nodebutton;
                this.fileList=response.data.huankuanimages;
                                          for(var i=0;i<this.fileList.length;i++){
                                            this.fileList[i].url=response.data.huankuanimages[i].path;
                                          }
              })
              .catch(e => {
                console.log(e);
              });
              this.selectStateAndLogs();
              
       },
       updateDaiban(){
          HuankuanState.get(this.nextState).then(response1=>{
            this.currentStateDept=response1.data.depts
            HuankuanState.get(response1.data.nextStateid).then(response=>{
              this.nextStateDept=response.data.depts;
              //当前状态的部门减一
              for (let i = 0; i < this.currentStateDept.length; i++) 
                DaibanService.getJian(this.currentStateDept[i].id,"还款管理")
              //如果下一个状态如果不是最后一个,则所有部门加一
              if (response1.data.lastone!=1){
                     console.log(response.data.lastone)
                for (let i = 0; i < this.nextStateDept.length; i++){
                    DaibanService.getJia(this.nextStateDept[i].id,"还款管理").then(response =>{

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
          HuankuanState.get(1).then(response=>{
            //如果状态表不是只有一个添加,则所有部门加一
            if (!response.data.lastone){
              HuankuanState.get(response.data.nextStateid).then(response=>{
                this.nextStateDept=response.data.depts;
                // console.log(this.nextStateDept);
                 for (let i = 0; i < this.nextStateDept.length; i++){
                    DaibanService.getJia(this.nextStateDept[i].id,"还款管理").then(response =>{

                  })
              } 
            })
            }
              
                  
          })
       },
       addStatelog(){
         var data = {
              userId:this.currentUser.id,
              huankuanId: this.qiyeid,
              oldstateid: this.oldStateid,
              newstateid:this.nextState,
              operateId:4
              }
              HuankuanStatelog.create(data).then(response => {
        })
        .catch(e => {
          console.log(e);
        });
      },

      updateState(index,row){
        var data = {
           HuankuanStateId:this.nextState
          }
          HuanKuanService.update(this.pa,data)
        .then(response => {
          this.tableonload();
        })
        .catch(e => {
          console.log(e);
        });
       },
       selectStateAndLogs(){
        HuankuanState.getAll()
        .then(response => {
          this.activities=response.data
          this.selectlogs();
        })
        .catch(e => {
          // console.log(e);
        });
      },
      getfor(row,column){
            return row.HuankuanState.nodeName;
          },
      async tableonload(){
         HuanKuanService.getAll()
        .then(response => {
          this.tableData = response.data;
          this.selectdept();
          this.selectCode();
        })
        .catch(e => {
          console.log(e);
        });
      },
       openFrom(){
         this.selectJianzhu();
         //新建时候清空url
         this.isshow=true;
          this.imageUrl=""
          this.huankuan={},
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
            item_name: this.huankuan.item_name,
            total_quota: this.huankuan.total_quota,
            money: this.huankuan.money,
            huan_money:this.huankuan.huan_money,
            huan_money1:this.huankuan.huan_money1,
            time:this.huankuan.time,
            huan_stream:this.imageUrl,
            nodeName:this.huankuan.nodeName
          }
        HuanKuanService.create(data)
        .then(response => {
           var path=this.imageUrl1
           var imagename=this.imageName
          for(var i = 0; i < path.length; i++){
              var data1 = {
              name:imagename[i],
              huankuanId: response.data.id,
              path:path[i],
              }
              HuankuanImageService.create(data1).then(response => {
              }).catch(e => {
                console.log(e);
              });
          }
          this.tableonload();
          var data = {
              userId:this.currentUser.id,
              huankuanId: response.data.id,
              oldstateid: 1,
              newstateid:response.data.HuankuanStateId,
              operateId:1,
              }
              HuankuanStatelog.create(data).then(response => {
              }).catch(e => {
                console.log(e);
              });
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
       },
        submit(huankuan){
          this.$refs[huankuan].validate((valid) => {
          if (this.dialogTitle ==  "addData"&&valid ) {
        this.addservice();
        this.tableonload();
        this.$forceUpdate();
        this.addDaiban();
      } else if(this.dialogTitle ==  "updataData") {
        this.updateservice();
      }else if(this.dialogTitle ==  "kanData"){
        this.kanClick();
      }else if(this.dialogTitle ==  "examine"&&valid){
        this.dialogFormVisible=false;
        this.updateState();
        this.addStatelog();
        this.updateDaiban();
      }else{
        return false
      }
        });
        },
        selectlogs(){
        let huankuanId=this.pa
          HuankuanStatelog.findByLog(huankuanId).then(response => {
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
                                    HuanKuanService.get(this.pa)
                                    .then(response => {
                                          this.huankuan=response.data;
                                          this.huankuan.nodeName = response.data.HuankuanState.nodeName; 
                                          // this.imageUrl=response.data.huan_stream
                                          this.fileList=response.data.huankuanimages;
                                          for(var i=0;i<this.fileList.length;i++){
                                            this.fileList[i].url=response.data.huankuanimages[i].path;
                                          }
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
                    // console.log(old)
                        for (var i = 0; i < this.deptId.length; i++) {
                            let pre = this.deptId[i];
                            // console.log(pre)
                                if (pre === old) {
                                    xunhuan=true
                                }
                            }
                       }
                       if(xunhuan==true){
                                    this.dialogFormVisible=true
                                    this.dialogTitle = "updataData";
                                    this.annui=false;
                                    this.isshow=true
                                    this.validated=false;
                                    this.liucheng=true, 
                                    this.pa=this.tableData[index].id;
                                    this.selectStateAndLogs();
                                    HuanKuanService.get(this.pa)
                                    .then(response => {
                                        this.huankuan=response.data;
                                        this.huankuan.nodeName = response.data.HuankuanState.nodeName;
                                        this.fileList=response.data.huankuanimages;
                                          for(var i=0;i<this.fileList.length;i++){
                                            this.fileList[i].url=response.data.huankuanimages[i].path;
                                          } 
                                        // this.imageUrl=response.data.huan_stream;
                                        //     //旧图片url另存一份,将来imageUrl会被覆盖
                                        //     this.oldUrl = this.imageUrl;
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
            id:this.huankuan.id,
            item_name: this.huankuan.item_name,
            total_quota: this.huankuan.total_quota,
            money: this.huankuan.money,
            huan_money:this.huankuan.huan_money,
            huan_money1:this.huankuan.huan_money1,
            time:this.huankuan.time,
            huan_stream:this.imageUrl,
            nodeName:this.huankuan.nodeName
        }
          HuanKuanService.update(data.id,data)
        .then(response => {
            this.tableonload();
          //删除旧图片
            http.delete('/general/deletefile',{data:{filename:this.oldUrl}});
            this.oldUrl=""
            console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
       },
       delClickconfirm(index,row){
              let pa=this.tableData[index].id;
              HuanKuanService.delete(pa)
              .then(response => {
                var data = {
              userId:this.currentUser.id,
              huankuanId: pa,
              oldstateid: 1,
              newstateid:1,
              operateId:3,
              }
              HuankuanStatelog.create(data).then(response => {
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
          if(this.deptId.length===0){
            alert("当前用户没有权限进行该操作")
          }
          let xunhuan=false;
          
          for (let j = 0; j < this.deletedept.length; j++) {
                    let old = this.deletedept[j];
                    console.log
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
      handleClick(tab, event) {
        // // 触发‘用户管理’事件
        // if(tab.name == 'second'){
        // 	this.selectdept1();
        // }else{
        // 	// 触发‘用户管理’事件
        // // console.log("else")
        // }
      },
      filterCurrent(value, row){
            return row.current_process === value;
        },
        handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
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
            //如果上传过图片,先把旧的删除掉
            // if (this.tmpUrl){
            //     http.delete('/general/deletefile',{data:{filename:this.tmpUrl}});
            // }
            this.imageUrl1.push(res.url)
            this.imageName.push(file.name)
            this.tmpUrl = this.imageUrl;
            this.$forceUpdate();
            //上传成功后，会返回后端的图片地址，存到imageUrl里面，将来调用create的api
            // this.imageUrl = res.url;
            // this.tmpUrl = this.imageUrl;
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
      }
    },

    data() {
      return {
        imageName:[],
        code:"",
        jianzhu:[],
        nextStateDept:[],
        currentStateDept:[],
        tableData1: [],
        activeName: 'first',
        deletedept:[1,3,8],
        updatedept:[1,3,8],
        kandept:[1,3,8],
        isshow2:false,
        isshow1:false,
        adddept:[1,3,8],
        lastone:"",
        deptId:[],
        statedeptId:[],
        pa:'',
        buttonText: '确定',
        qiyeid:'',
        oldstateid:'',
        nextStateid:'',
        nextState:'',
        annui:'',
        isshow:false,
        validated1:false,
        validated:false,
        liucheng:false,
        activities: [],
        titleMap: {
        addData: "添加数据",
        updataData: "修改数据",
        kanData: "查看数据",
        examine: "还款信息",
      },
        dialogTitle:"",
        fileList:[],
        imageUrl1: [],
        imageUrl: '',
        oldUrl: '',
        tmpUrl: '',
        TravelType:1,
        formLabelWidth: "140px",
        rules:{
          item_name: [
            { required: true, message: '请输入还款项目名称', trigger: 'blur' },
          ],
          huan_money: [
            { required: true, message: '请输入还款金额', trigger: 'change' }
          ],
        },
        tableData:[],
        result:[],
        huankuan:{},
        filterCode:'',
        filterItem_name:'',
        filtertime:'',
        filterTotal_quota:'',
        filterMoney:'',
        filterHuan_money:'',
        filterHuan_money1:'',
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
  .huan_stream {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>