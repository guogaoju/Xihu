<template>
<div>
  <!-- 业务管理/建筑项目进度更新 -->
  <el-breadcrumb style="padding-top: 10px;" separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/Dao' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>项目管理</el-breadcrumb-item>
      <el-breadcrumb-item>建筑项目信息</el-breadcrumb-item>
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
                &(!filterBefore_jindu || data.before_jindu.toLowerCase().includes(filterBefore_jindu.toString().toLowerCase()))
                &(!filterAfter_jindu || data.after_jindu.toLowerCase().includes(filterAfter_jindu.toString().toLowerCase()))
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
              <el-table-column min-width='100' align="center">
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
              <el-table-column
              prop="address"
              label="项目地址"
              min-width="180"
              align="center">
              </el-table-column>
              <el-table-column
              prop="introduction"
              label="项目简介"
              min-width="180"
              align="center">
              </el-table-column>
              <el-table-column
              prop="scale"
              label="α比例(%)"
              min-width="100"
              align="center">
              </el-table-column>
              <el-table-column min-width='100' align="center">
                      <!-- eslint-disable-next-line -->
                      <template slot="header" slot-scope="scope">
                          <el-popover placement="bottom" trigger="click">
                              <el-input v-model="filterBefore_jindu"> </el-input>
                              <div slot="reference"> <label> 当前进度 </label> <i class='el-icon-arrow-down'> </i> </div>
                          </el-popover>
                      </template>
                      <template slot-scope="scope">
                          <div>
                              {{scope.row.before_jindu}}
                          </div>
                      </template>
              </el-table-column>
              <el-table-column min-width='120' align="center">
                      <!-- eslint-disable-next-line -->
                      <template slot="header" slot-scope="scope">
                          <el-popover placement="bottom" trigger="click">
                              <el-input v-model="filterAfter_jindu"> </el-input>
                              <div slot="reference"> <label> 更新后进度 </label> <i class='el-icon-arrow-down'> </i> </div>
                          </el-popover>
                      </template>
                      <template slot-scope="scope">
                          <div>
                              {{scope.row.after_jindu}}
                          </div>
                      </template>
              </el-table-column>
              <el-table-column
              prop="total_money"
              label="授信总额"
              min-width="120"
              align="center">
              </el-table-column>
              <el-table-column
              prop="surplus_money"
              label="贷款余额"
              min-width="120"
              align="center">
              </el-table-column>
              <el-table-column
              prop="use_money"
              label="已用额度"
              min-width="120"
              align="center">
              </el-table-column>
              <el-table-column min-width="120"  prop="photo" label="现场照片" align="center">
                      <template slot-scope="scope">
                          <el-image style="width: 100px; height: 100px" :src="scope.row.images[1].path" :preview-src-list="[scope.row.images[1].path]">
                          </el-image>
                      </template>
              </el-table-column>
              <el-table-column min-width="100"  prop="photo1" label="三维模型" align="center">
<el-link type="primary"  href="https://huidaomodels.cn">三维模型展示</el-link>
                </el-table-column>
              <!-- <el-table-column
              prop="name"
              label="风控报告"
              width="180">
              </el-table-column> -->
              <el-table-column prop="nodeName" label="当前流程" width="120" align="center" :formatter="getfor">
              </el-table-column>
              <el-table-column
                fixed="right"
                label="操作"
                width="240"
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
                &(!filterBefore_jindu || data.before_jindu.toLowerCase().includes(filterBefore_jindu.toString().toLowerCase()))
                &(!filterAfter_jindu || data.after_jindu.toLowerCase().includes(filterAfter_jindu.toString().toLowerCase()))
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
              <el-table-column min-width='100' align="center">
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
              <el-table-column
              prop="address"
              label="项目地址"
              min-width="180"
              align="center">
              </el-table-column>
              <el-table-column
              prop="introduction"
              label="项目简介"
              min-width="180"
              align="center">
              </el-table-column>
              <el-table-column
              prop="scale"
              label="α比例(%)"
              min-width="80"
              align="center">
              </el-table-column>
              <el-table-column min-width='100' align="center">
                      <!-- eslint-disable-next-line -->
                      <template slot="header" slot-scope="scope">
                          <el-popover placement="bottom" trigger="click">
                              <el-input v-model="filterBefore_jindu"> </el-input>
                              <div slot="reference"> <label> 当前进度 </label> <i class='el-icon-arrow-down'> </i> </div>
                          </el-popover>
                      </template>
                      <template slot-scope="scope">
                          <div>
                              {{scope.row.before_jindu}}
                          </div>
                      </template>
              </el-table-column>
              <el-table-column min-width='120' align="center">
                      <!-- eslint-disable-next-line -->
                      <template slot="header" slot-scope="scope">
                          <el-popover placement="bottom" trigger="click">
                              <el-input v-model="filterAfter_jindu"> </el-input>
                              <div slot="reference"> <label> 更新后进度 </label> <i class='el-icon-arrow-down'> </i> </div>
                          </el-popover>
                      </template>
                      <template slot-scope="scope">
                          <div>
                              {{scope.row.after_jindu}}
                          </div>
                      </template>
              </el-table-column>
              <el-table-column
              prop="total_money"
              label="授信总额"
              min-width="120"
              align="center">
              </el-table-column>
              <el-table-column
              prop="surplus_money"
              label="贷款余额"
              min-width="120"
              align="center">
              </el-table-column>
              <el-table-column
              prop="use_money"
              label="已用额度"
              min-width="120"
              align="center">
              </el-table-column>
              <el-table-column min-width="55"  prop="photo" label="现场照片" align="center">
                      <template slot-scope="scope">
                          <el-image style="width: 100px; height: 100px" :src="scope.row.images[0].path" :preview-src-list="[scope.row.images[0].path]">
                          </el-image>
                      </template>
              </el-table-column>
              <el-table-column prop="nodeName" label="当前流程" width="120" align="center" :formatter="getfor">
              </el-table-column>
              <el-table-column
                fixed="right"
                label="操作"
                width="240"
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
  <el-dialog :title="titleMap[dialogTitle]" width="45%" :visible.sync="dialogFormVisible" @close='closeDialog'>
      <el-form
        :model="jindu"
        status-icon :rules="rules"
        ref="jindu"
        label-width="100px"
        class="demo-ruleForm"
      >
      <el-row>
        <el-col :span="18">
          <el-row>
         <el-col :span="12">
          <el-form-item label="项目名称" prop="item_name" :label-width="formLabelWidth">
           <el-select :disabled="validated" filterable v-model="jindu.item_name" placeholder="请选择项目">
                <el-option v-for="item in jianzhu" :key="item.id" :label="item.item_name" :value="item.item_name"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="项目地址" prop="address" :label-width="formLabelWidth">
           <el-input :disabled="validated" v-model="jindu.address"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
             <el-form-item label="现场照片" ref="uploadElement" prop="photo" :label-width="formLabelWidth">
                    <!-- <el-upload :disabled="validated1" ref="upload" class="avatar-uploader" 
                    action="http://localhost:8080/api/Jindu/upload" 
                    :show-file-list="false" 
                    :auto-upload="false" 
                    :data="jindu" 
                    :on-change="handleAvatarChange" 
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload"
                    :file-list="fileList"
                    >
                        <img v-if="imageUrl" :src="imageUrl" class="photo">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload> -->
                    <!-- <el-upload
                    ref="upload"
                      class="upload-demo"
                      action="http://localhost:8080/api/Jindu/upload"
                     
                      multiple
                      :show-file-list="false" 
                    :auto-upload="false" 
                    :data="jindu" 
                    :on-change="handleAvatarChange" 
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload"
                      :limit="3"
                      :on-exceed="handleExceed"
                      :file-list="fileList">
                      <el-button size="small" type="primary">点击上传</el-button>
                      <div slot="tip" class="el-upload__tip"></div>
                    </el-upload> -->
                    <el-upload
                      ref="upload"
                      class="upload-demo"
                     action="http://106.15.5.29:8082/api/Jindu/upload"
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
                </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
             <el-form-item label="风控报告" ref="uploadElement" prop="photo" :label-width="formLabelWidth">
                    <el-upload
                    ref="upload1"
                      class="upload-demo"
                      action="http://106.15.5.29:8082/api/Jindu/upload"
                      multiple
                      :auto-upload="false" 
                      :on-preview="handlePreview1"
                      :on-remove="handleRemove1"
                      :before-remove="beforeRemove1" 
                      :on-change="(file1,fileList1) =>{return handleAvatarChange1(file1,fileList1,1)}"
                      :on-success="(response1,file1,fileList1) =>{return handleAvatarSuccess1(response1,file1,fileList1,1)}" 
                      :before-upload="beforeAvatarUpload"
                      :limit="3"
                      :on-exceed="handleExceed1"
                      :file-list="fileList1">
                      <el-button size="small" type="primary">点击上传</el-button>
                      <div slot="tip" class="el-upload__tip"></div>
                    </el-upload>
                </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="项目简介" prop="introduction" :label-width="formLabelWidth">
           <el-input :disabled="validated" v-model="jindu.introduction"></el-input>
          </el-form-item>
        </el-col>
         <el-col :span="12">
          <el-form-item label="α比例(%)" prop="scale" :label-width="formLabelWidth">
            <el-input :disabled="validated" v-model="jindu.scale"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="授信总额" prop="total_money" :label-width="formLabelWidth">
           <el-input :disabled="validated" v-model="jindu.total_money"></el-input>
          </el-form-item>
        </el-col>
         <el-col :span="12">
          <el-form-item label="贷款余额" prop="surplus_money" :label-width="formLabelWidth">
            <el-input :disabled="validated" v-model="jindu.surplus_money"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="已用额度" prop="use_money" :label-width="formLabelWidth">
           <el-input :disabled="validated" v-model="jindu.use_money"></el-input>
          </el-form-item>
        </el-col>
         <el-col :span="12">
          <el-form-item label="当前进度" prop="before_jindu" :label-width="formLabelWidth">
            <el-input :disabled="validated" v-model="jindu.before_jindu"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="更新后进度" prop="after_jindu" :label-width="formLabelWidth">
           <el-input :disabled="validated" v-model="jindu.after_jindu"></el-input>
          </el-form-item>
        </el-col>
         <el-col :span="12">
          <el-form-item label="当前流程" prop="nodeName" :label-width="formLabelWidth">
            <el-input :disabled="liucheng" v-model="jindu.nodeName"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
            <el-col :span="4">
            <el-form-item></el-form-item>
            </el-col>
             <el-col :span="4">
            <el-button type="warning" :disabled="annui1" v-show="isshow" @click="addform()">添加物料</el-button>
            </el-col>   
         </el-row>
      <el-row>
        <el-col :span="4">
            <el-form-item></el-form-item>
        </el-col>
        <el-col :span="20">
          <el-table
            :data="tableData2"
            border
            style="width: 100%">
            <el-table-column
              prop="name"
              label="项目名称"
              width="120">
            </el-table-column>
            <el-table-column
              prop="wname"
              label="物料名称"
              width="120">
            </el-table-column>
            <el-table-column
              prop="before_stock"
              label="当前库存"
              width="100">
            </el-table-column>
            <el-table-column
              prop="consume"
              label="消耗量"
              width="100">
            </el-table-column>
            <el-table-column
              prop="after_stock"
              label="更新后库存"
              width="100">
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="10"><el-form-item></el-form-item></el-col> 
        <el-col :span="14">
        <el-form-item>
          <el-button type="primary" :disabled="annui" v-show="isshow" ref="buttonname" id="submitButton" @click="submit('jindu')">{{buttonText}}</el-button>
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
  <el-drawer
  :visible.sync="dialog"
  direction="ltr"
  custom-class="demo-drawer"
  ref="drawer"
  >
    <el-form :model="form">
      <el-form-item label="项目名称" :label-width="formLabelWidth">
        <el-select :disabled="validated" filterable v-model="form.name" placeholder="请选择项目">
                <el-option v-for="item in jianzhu" :key="item.id" :label="item.item_name" :value="item.item_name"></el-option>
            </el-select>
      </el-form-item>
      <el-form-item label="物料名称" :label-width="formLabelWidth">
          <el-select filterable v-model="form.wname" placeholder="请选择">
              <el-option v-for="item in result" :key="item.id" :label="item.name" :value="item.name"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="当前库存" :label-width="formLabelWidth">
        <el-input v-model="form.before_stock" autocomplete="off"></el-input>
      </el-form-item>
       <el-form-item label="消耗量" :label-width="formLabelWidth">
        <el-input v-model="form.consume" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="更新后库存" :label-width="formLabelWidth">
        <el-input v-model="form.after_stock" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
          <el-button type="primary" @click="addsubmit1()">立即添加</el-button>
    </el-form-item>
    </el-form>
      
</el-drawer>
</div>

</template>

<script>
import JianzhuService from "../services/JianzhuService";
import authservice from "../services/auth.service"
import addjinduwuliao from "../services/addjinduwuliao";
import WuliaoService from "../services/WuliaoService";
import JinduService from "../services/JinduService"
import JinduState from "../services/JinduState"
import JinduStatelog from "../services/JinduStatelog"
import CodeService from "../services/CodeService";
import ImageService from "../services/ImageService"
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
      handleExceed1(files1, fileList1) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files1.length} 个文件，共选择了 ${files1.length + fileList1.length} 个文件`);
      },
      beforeRemove1(file1, fileList1) {
        return this.$confirm(`确定移除 ${ file1.name }？`);
      },
      handleRemove1(file1, fileList1) {
        console.log(file1, fileList1);
      },
      handlePreview1(file1) {
        console.log(file1);
      },
      //关闭弹框的事件
    closeDialog(){
      this.buttonText="确定"
      this.isshow=true;
      this.fileList=[]
    },
    selectCode(){
        let date = new Date();
        let year = date.getFullYear(); // 年
        let month = (date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1) // 月
        let day = date.getDate(); // 日
        let time=`${year}${month}${day}`;
        CodeService.findByLog("进度更新").then(response=>{
            this.code=response.data.code_name+"-"+time+"-"+response.data.sum.toString().padStart(5,'0')
        })
    },
    selectJianzhu(){
      JianzhuService.getAll().then(response=>{
        this.jianzhu=response.data
      })
    },
      selectState(){
         JinduState.getAll()
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
         this.annui1=true;
        this.liucheng=true,
        this.dialogTitle = "examine";
          this.pa=row.id;
          addjinduwuliao.findByLog(row.id).then(response =>{
            this.tableData2=response.data
            console.log(response.data )
          })
           JinduService.get(this.pa)
         .then(response => {
                this.isshow=false;
                this.qiyeid=this.pa
                this.nextState=response.data.JinduState.nextStateid
                this.oldStateid=response.data.JinduState.id
                this.jindu=response.data;
                this.jindu.nodeName = response.data.JinduState.nodeName;
                this.jindu.nodeName = response.data.JinduState.nodeName;
                this.validated=true;
                this.validated1=false;
                this.buttonText = response.data.JinduState.nodebutton;
                this.fileList=response.data.images;
                        this.selectImage();            
              })
              .catch(e => {
                console.log(e);
              });
              this.selectStateAndLogs();
       },
       selectImage(){
         ImageService.findByLog(this.pa)
         .then(response => {
          //  console.log(response.data)
           var path1=[]
           var paths=[]
           for(var i=0;i<response.data.length;i++){
             if(response.data[i].zujianid===1){
             
             paths.push(response.data[i])
              //  console.log(paths)
           }else{
              
             path1.push(response.data[i])
              //  console.log(path1)
           }
           }
              this.fileList=paths;
              this.fileList1=path1;
                for(var i=0;i<this.fileList.length;i++){
                     this.fileList[i].url=paths[i].path;
                      }
                for(var i=0;i<this.fileList1.length;i++){
                this.fileList1[i].url=path1[i].path;
                this.fileList1[i].name=path1[i].name;
                      }                          
         })
       },
       addStatelog(){
         var data = {
              userId:this.currentUser.id,
              jinduId: this.qiyeid,
              oldstateid: this.oldStateid,
              newstateid:this.nextState,
              operateId:4
              }
              JinduStatelog.create(data).then(response => {
        })
        .catch(e => {
          console.log(e);
        });
      },
      updateState(index,row){
        var data = {
           JinduStateId:this.nextState
          }
          JinduService.update(this.pa,data)
        .then(response => {
          this.tableonload();
        })
        .catch(e => {
          console.log(e);
        });
       },
        selectStateAndLogs(){
        JinduState.getAll()
        .then(response => {
          this.activities=response.data
          this.selectlogs();
        })
        .catch(e => {
          console.log(e);
        });
      },
      getfor(row,column){
            return row.JinduState.nodeName;
          },
      async tableonload(){
         JinduService.getAll()
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
         this.selectJianzhu(),
          this.jindu={},
          this.fileList=[],
          this.fileList1=[],
          this.dialogFormVisible=true
          this.selectState();
          this.validated=false;
          this.liucheng=true,
          this.annui=false;
          this.annui1=false;
          this.dialogTitle = "addData";
          //新建时候清空url
          this.imageUrl=""
       },
       addform(){
            this.form={},
            this.dialog=true;
            WuliaoService.getAll()
        .then(response => {
          this.result = response.data;
        })
        .catch(e => {
          console.log(e);
        });
        },
        addsubmit1(){
          this.dialog=false;
          var data = {
        name: this.form.name,
        wname:this.form.wname,
        before_stock : this.form.before_stock ,
        consume:this.form.consume,
        after_stock:this.form.after_stock,
        jinduId:0,
        //暂时写死的，
        }
        this.tableData2.push(data);
        },
        addservice(){
               this.dialogFormVisible=false;
                var path=this.imageUrl1
          var data = {
            code:this.code,
          item_name: this.jindu.item_name,
          address:this.jindu.address,
          introduction:this.jindu.introduction,
          scale:this.jindu.scale,
          before_jindu: this.jindu.before_jindu,
          after_jindu: this.jindu.after_jindu,
          total_money:this.jindu.total_money,
          surplus_money: this.jindu.surplus_money ,
          use_money:this.jindu.use_money,
          photo:this.imageUrl,
          nodeName:this.jindu.nodeName
        }
        JinduService.create(data)
        .then(response => {
        var paths=this.imageUrl1;
        var path1=this.imageUrl2;
        var imagename=this.imageName
        var imagename1=this.imageName1
       for(var i = 0; i < paths.length; i++){
                 console.log("6666666")
              var data1 = {
              name:imagename[i],
              jinduId: response.data.id,
              path:paths[i],
              zujianid:1,
              }
              ImageService.create(data1).then(response => {
              }).catch(e => {
                console.log(e);
              });}
              var path1=this.imageUrl2
              for(var i = 0; i < path1.length; i++){
                 console.log("888888")
              var data2 = {
              name:imagename1[i],
              jinduId: response.data.id,
              path:path1[i],
              zujianid:2,
              }
              ImageService.create(data2).then(response => {
              }).catch(e => {
                console.log(e);
              });}
          this.tableonload();
          var data = {
              userId:this.currentUser.id,
              jinduId: response.data.id,
              oldstateid: 1,
              newstateid:response.data.JinduStateId,
              operateId:1,
              }
              JinduStatelog.create(data).then(response => {
              }).catch(e => {
                console.log(e);
              });
              
            for(let i=0;i<this.tableData2.length;i++){
              console.log(this.tableData2[i]);
              this.tableData2[i].jinduId=response.data.id
              addjinduwuliao.create(this.tableData2[i])
            .then(response => {
              this.tableonload();
              console.log(response.data);
            })
            .catch(e => {
              console.log(e);
            });  
         } 
        })
        .catch(e => {
          console.log(e);
        });
        },
        submit(jindu){
          this.$refs[jindu].validate((valid) => {
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
        //上传完成后清空一下
                this.imageUrl=""
                this.tmpUrl=""
        
        },
        selectlogs(){
        let jinduId=this.pa
          JinduStatelog.findByLog(jinduId).then(response => {
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
                                    this.annui1=true;
                                    this.liucheng=true,
                                    this.validated=true;
                                    this.pa=this.tableData[index].id;
                                    this.selectStateAndLogs();
                                    addjinduwuliao.findByLog(this.pa).then(response =>{
                                      this.tableData2=response.data
                                    })
                                    JinduService.get(this.pa)
                                  .then(response => {
                                          this.jindu=response.data;
                                          this.jindu.nodeName = response.data.JinduState.nodeName;
                                          this.fileList=response.data.images;
                                          for(var i=0;i<this.fileList.length;i++){
                                            this.fileList[i].url=response.data.images[i].path;
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
          this.selectJianzhu(),
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
                                    this.annui1=false;
                                    this.validated=false;
                                    this.liucheng=true, 
                                    this.pa=this.tableData[index].id;
                                    this.selectStateAndLogs();
                                    addjinduwuliao.findByLog(this.pa).then(response =>{
                                    this.tableData2=response.data
                                    })
                                    JinduService.get(this.pa)
                                  .then(response => {
                                          this.jindu=response.data;
                                          this.jindu.nodeName = response.data.JinduState.nodeName;
                                          // this.imageUrl=response.data.photo;
                                          this.fileList=response.data.images;
                                          for(var i=0;i<this.fileList.length;i++){
                                            this.fileList[i].url=response.data.images[i].path;
                                          }
                                              //旧图片url另存一份,将来imageUrl会被覆盖
                                              // this.oldUrl = this.imageUrl;
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
       updateaddwuliao(){
          var data = {
        name: this.form.name,
        wname:this.form.wname,
        before_stock : this.form.before_stock ,
        consume:this.form.consume,
        after_stock:this.form.after_stock,
        jinduId:this.pa,
        }
        addjinduwuliao.create(data).then(response =>{
        })
       },
        updateservice(){
          this.updateaddwuliao();
             this.dialogFormVisible=false;
            var data = {
            id:this.jindu.id,
          item_name: this.jindu.item_name,
          address:this.jindu.address,
          introduction:this.jindu.introduction,
          scale:this.jindu.scale,
          before_jindu: this.jindu.before_jindu,
          after_jindu: this.jindu.after_jindu,
          total_money:this.jindu.total_money,
          surplus_money: this.jindu.surplus_money ,
          use_money:this.jindu.use_money,
          photo:this.imageUrl,
          nodeName:this.jindu.nodeName
        }
          JinduService.update(data.id,data)
        .then(response => {
          this.tableonload();
          //删除旧图片
              // http.delete('/general/deletefile',{data:{filename:this.oldUrl}});
              // this.oldUrl=""
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
        this.imageUrl=""
        this.tmpUrl=""
       },
       delClickconfirm(index,row){
              let pa=this.tableData[index].id;
              JinduService.delete(pa)
              .then(response => {
                var data = {
              userId:this.currentUser.id,
              jinduId: pa,
              oldstateid: 1,
              newstateid:1,
              operateId:3,
              }
              JinduStatelog.create(data).then(response => {
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
       handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
    
      handleClick(row) {
      },
      filterCurrent(value, row){
            return row.current_process === value;
        },
      cancelForm() {
      this.loading = false;
      this.dialog = false;
      clearTimeout(this.timer);
    },

       handleAvatarChange(file,filelist,index) {
            //选中文件,上传成功,上传失败都会调用这个函数
            //只有选择新文件的时候(file.status非ready),才执行后面的上传代码
            //否则直接返回
            if (file.status !== 'ready'){
                return;
            }
             if (index===0)
              this.$refs.upload.submit();
           if (index===1)
              this.$refs.upload1.submit();
        },
        handleAvatarSuccess(response, file,index) {
            //如果上传过图片,先把旧的删除掉
            // if (this.tmpUrl){
            //     http.delete('/general/deletefile',{data:{filename:this.tmpUrl}});
            // }
            //上传成功后，会返回后端的图片地址，存到imageUrl里面，将来调用create的api
            this.imageUrl1.push(response.url)
            this.imageName.push(file.name)
            // this.imageUrl2.push(response.url)
            // console.log(this.imageUrl1)
            // this.name="报告"
            // console.log(file.filename)
            // this.tmpUrl = this.imageUrl;
            this.$forceUpdate();
        },
         handleAvatarChange1(file1,fileList1,index) {
      //  if (file.name === ''){
      //         alert("图片不能为空")
      //       }
          if (file1.status !== 'ready'){
              return;
            }
           if (index===0)
              this.$refs.upload.submit();
           if (index===1)
              this.$refs.upload1.submit();
           if (index===2)
              this.$refs.upload2.submit();
        },
       handleAvatarSuccess1(response1,file1,fileList1,index) {
        //  if (this.tmpUrl){
        //         http.delete('/general/deletefile',{data:{filename:this.tmpUrl}});
        //     }
            //上传成功后，会返回后端的图片地址，存到imageUrl里面，将来调用create的api
            // this.imageUrlback[index] = response.url;
            // this.$forceUpdate();
            this.imageUrl2.push(response1.url)
            this.imageName1.push(file1.name)
            // console.log(this.imageUrl2)
            // console.log(file1.filename)
            // console.log(file1.name)
            this.$forceUpdate();
        },
      beforeAvatarUpload(file) {
        // const isJPG = file.type === 'image/jpeg';
        // const isLt2M = file.size / 1024 / 1024 < 2;
        // if (!isJPG) {
        //   this.$message.error('上传头像图片只能是 JPG 格式!');
        // }
        // if (!isLt2M) {
        //   this.$message.error('上传头像图片大小不能超过 2MB!');
        // }
        // return isJPG && isLt2M;
      }
    },

    data() {
      return {
        imageName1:[],
        imageName:[],
        code:"",
        jianzhu:[],
        tableData1: [],
        activeName: 'first',
        deletedept:[1],
        updatedept:[1],
        kandept:[1,3,8],
        isshow1:false,
        adddept:[1],
        deptId:[],
        pa:'',
        buttonText: '确定',
        qiyeid:'',
        oldstateid:'',
        oldStateid:'',
        nextState:'',
        annui:'',
        annui1:'',
        isshow:true,
        validated:false,
        validated1:false,
        liucheng:false,
        activities: [],
        titleMap: {
        addData: "添加数据",
        updataData: "修改数据",
        kanData: "查看数据",
        examine: "进度信息",
      },
        dialogTitle:"",
        dialog: false,
        loading: false,
form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
        fileList:[],
        fileList1:[],
        imageUrl1:[],
        imageUrl2:[],
        imageUrl: '',
        oldUrl: '',
        tmpUrl: '',
        TravelType:1,
        formLabelWidth: "100px",
        rules:{
          item_name: [
            { required: true, message: '请输入项目名称', trigger: 'blur' },
          ],
          before_jindu: [
            { required: true, message: '请输入当前进度', trigger: 'change' }
          ],
        },
        tableData2:[],
        tableData:[],
        result:[],
        jindu:{},
        filterCode:'',
        filterItem_name:'',
        filterBefore_jindu:'',
        filterAfter_jindu:'',
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
  .photo {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>