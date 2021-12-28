<template>
<div>
  <!-- 业务管理/采购管理 -->
  <el-breadcrumb style="padding-top: 10px;" separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/Dao' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>业务管理</el-breadcrumb-item>
      <el-breadcrumb-item>付款管理</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- <el-row style="margin : 8px;">
      <el-col :span="1.5">
        <el-button type="warning" v-show="isshow1" @click="openFrom()">添加</el-button>
      </el-col>
    </el-row> -->
    <el-row style="margin : 8px;">
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="全部数据" name="first">
          <el-table
            @row-click="handdle"
              :data="tableData.filter(data => (!filterCode || data.code.toString().toLowerCase().includes(filterCode.toString().toLowerCase()))
                &(!filterQiye_name || data.qiye_name.toLowerCase().includes(filterQiye_name.toString().toLowerCase()))
                &(!filterItem_name || data.item_name.toLowerCase().includes(filterItem_name.toString().toLowerCase()))
                &(!filterMoney || data.money.toLowerCase().includes(filterMoney.toString().toLowerCase()))
                &(!filterTotalmoney || data.totalmoney.toLowerCase().includes(filterTotalmoney.toString().toLowerCase()))
                &(!filterMoney1 || data.money1.toLowerCase().includes(filterMoney1.toString().toLowerCase()))
                &(!filterMoney2 || data.money2.toLowerCase().includes(filterMoney2.toString().toLowerCase()))
                &(!filterMoney3 || data.money3.toLowerCase().includes(filterMoney3.toString().toLowerCase()))
                &(!filterMoney4 || data.money4.toLowerCase().includes(filterMoney4.toString().toLowerCase()))
                )" border style="width: 100%">
              <el-table-column min-width='165' align="center">
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
              <el-table-column min-width='150' align="center">
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
              <el-table-column min-width='150' align="center">
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
              <el-table-column min-width='150' align="center">
                      <!-- eslint-disable-next-line -->
                      <template slot="header" slot-scope="scope">
                          <el-popover placement="bottom" trigger="click">
                              <el-input v-model="filterMoney"> </el-input>
                              <div slot="reference"> <label> 已使用授信额度 </label> <i class='el-icon-arrow-down'> </i> </div>
                          </el-popover>
                      </template>
                      <template slot-scope="scope">
                          <div>
                              {{scope.row.money}}
                          </div>
                      </template>
              </el-table-column>
              <el-table-column min-width='120' align="center">
                      <!-- eslint-disable-next-line -->
                      <template slot="header" slot-scope="scope">
                          <el-popover placement="bottom" trigger="click">
                              <el-input v-model="filterTotalmoney"> </el-input>
                              <div slot="reference"> <label> 总授信额度 </label> <i class='el-icon-arrow-down'> </i> </div>
                          </el-popover>
                      </template>
                      <template slot-scope="scope">
                          <div>
                              {{scope.row.totalmoney}}
                          </div>
                      </template>
              </el-table-column>
              <el-table-column min-width="120"  prop="statement" label="结算单" align="center">
                      <template slot-scope="scope">
                          <el-image style="width: 100px; height: 100px" :src="scope.row.fukuanimages[1].path" :preview-src-list="[scope.row.fukuanimages[1].path]">
                          </el-image>
                      </template>
              </el-table-column>
              <!-- <el-table-column min-width="120"  prop="delivery_note" label="送货单" align="center">
                      <template slot-scope="scope">
                          <el-image style="width: 100px; height: 100px" :src="scope.row.delivery_note" :preview-src-list="[scope.row.delivery_note]">
                          </el-image>
                      </template>
              </el-table-column> -->
              <el-table-column min-width="120"  prop="bill" label="发票" align="center">
                      <template slot-scope="scope">
                          <el-image style="width: 100px; height: 100px" :src="scope.row.fukuanimages[0].path" :preview-src-list="[scope.row.fukuanimages[0].path]">
                          </el-image>
                      </template>
              </el-table-column>
              <el-table-column min-width='130' align="center">
                      <!-- eslint-disable-next-line -->
                      <template slot="header" slot-scope="scope">
                          <el-popover placement="bottom" trigger="click">
                              <el-input v-model="filterMoney1"> </el-input>
                              <div slot="reference"> <label> 采购预算金额 </label> <i class='el-icon-arrow-down'> </i> </div>
                          </el-popover>
                      </template>
                      <template slot-scope="scope">
                          <div>
                              {{scope.row.money1}}
                          </div>
                      </template>
              </el-table-column>
              <el-table-column min-width='130' align="center">
                      <!-- eslint-disable-next-line -->
                      <template slot="header" slot-scope="scope">
                          <el-popover placement="bottom" trigger="click">
                              <el-input v-model="filterMoney2"> </el-input>
                              <div slot="reference"> <label> 出售金额 </label> <i class='el-icon-arrow-down'> </i> </div>
                          </el-popover>
                      </template>
                      <template slot-scope="scope">
                          <div>
                              {{scope.row.money2}}
                          </div>
                      </template>
              </el-table-column>
              <el-table-column min-width='170' align="center">
                      <!-- eslint-disable-next-line -->
                      <template slot="header" slot-scope="scope">
                          <el-popover placement="bottom" trigger="click">
                              <el-input v-model="filterMoney3"> </el-input>
                              <div slot="reference"> <label> 项目已使用融资额度 </label> <i class='el-icon-arrow-down'> </i> </div>
                          </el-popover>
                      </template>
                      <template slot-scope="scope">
                          <div>
                              {{scope.row.money3}}
                          </div>
                      </template>
              </el-table-column>
              <el-table-column min-width='180' align="center">
                      <!-- eslint-disable-next-line -->
                      <template slot="header" slot-scope="scope">
                          <el-popover placement="bottom" trigger="click">
                              <el-input v-model="filterMoney4"> </el-input>
                              <div slot="reference"> <label> 更新后已使用融资额度 </label> <i class='el-icon-arrow-down'> </i> </div>
                          </el-popover>
                      </template>
                      <template slot-scope="scope">
                          <div>
                              {{scope.row.money4}}
                          </div>
                      </template>
              </el-table-column>
              <el-table-column prop="nodeName" label="当前流程" width="120" align="center" :formatter="getfor">
              </el-table-column>
              <el-table-column
                fixed="right"
                label="操作"
                width="250"
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
                &(!filterItem_name || data.item_name.toLowerCase().includes(filterItem_name.toString().toLowerCase()))
                &(!filterMoney || data.money.toLowerCase().includes(filterMoney.toString().toLowerCase()))
                &(!filterTotalmoney || data.totalmoney.toLowerCase().includes(filterTotalmoney.toString().toLowerCase()))
                &(!filterMoney1 || data.money1.toLowerCase().includes(filterMoney1.toString().toLowerCase()))
                &(!filterMoney2 || data.money2.toLowerCase().includes(filterMoney2.toString().toLowerCase()))
                &(!filterMoney3 || data.money3.toLowerCase().includes(filterMoney3.toString().toLowerCase()))
                &(!filterMoney4 || data.money4.toLowerCase().includes(filterMoney4.toString().toLowerCase()))
                )" border style="width: 100%">
              <el-table-column min-width='165' align="center">
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
              <el-table-column min-width='150' align="center">
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
              <el-table-column min-width='150' align="center">
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
              <el-table-column min-width='150' align="center">
                      <!-- eslint-disable-next-line -->
                      <template slot="header" slot-scope="scope">
                          <el-popover placement="bottom" trigger="click">
                              <el-input v-model="filterMoney"> </el-input>
                              <div slot="reference"> <label> 已使用授信额度 </label> <i class='el-icon-arrow-down'> </i> </div>
                          </el-popover>
                      </template>
                      <template slot-scope="scope">
                          <div>
                              {{scope.row.money}}
                          </div>
                      </template>
              </el-table-column>
              <el-table-column min-width='120' align="center">
                      <!-- eslint-disable-next-line -->
                      <template slot="header" slot-scope="scope">
                          <el-popover placement="bottom" trigger="click">
                              <el-input v-model="filterTotalmoney"> </el-input>
                              <div slot="reference"> <label> 总授信额度 </label> <i class='el-icon-arrow-down'> </i> </div>
                          </el-popover>
                      </template>
                      <template slot-scope="scope">
                          <div>
                              {{scope.row.totalmoney}}
                          </div>
                      </template>
              </el-table-column>
              <el-table-column min-width="120"  prop="statement" label="结算单" align="center">
                      <template slot-scope="scope">
                          <el-image style="width: 100px; height: 100px" :src="scope.row.fukuanimages[0].path" :preview-src-list="[scope.row.fukuanimages[0].path]">
                          </el-image>
                      </template>
              </el-table-column>
              <!-- <el-table-column min-width="120"  prop="delivery_note" label="送货单" align="center">
                      <template slot-scope="scope">
                          <el-image style="width: 100px; height: 100px" :src="scope.row.delivery_note" :preview-src-list="[scope.row.delivery_note]">
                          </el-image>
                      </template>
              </el-table-column> -->
              <el-table-column min-width="120"  prop="bill" label="发票" align="center">
                      <template slot-scope="scope">
                          <el-image style="width: 100px; height: 100px" :src="scope.row.fukuanimages[0].path" :preview-src-list="[scope.row.fukuanimages[0].path]">
                          </el-image>
                      </template>
              </el-table-column>
              <el-table-column min-width='130' align="center">
                      <!-- eslint-disable-next-line -->
                      <template slot="header" slot-scope="scope">
                          <el-popover placement="bottom" trigger="click">
                              <el-input v-model="filterMoney1"> </el-input>
                              <div slot="reference"> <label> 采购预算金额 </label> <i class='el-icon-arrow-down'> </i> </div>
                          </el-popover>
                      </template>
                      <template slot-scope="scope">
                          <div>
                              {{scope.row.money1}}
                          </div>
                      </template>
              </el-table-column>
              <el-table-column min-width='130' align="center">
                      <!-- eslint-disable-next-line -->
                      <template slot="header" slot-scope="scope">
                          <el-popover placement="bottom" trigger="click">
                              <el-input v-model="filterMoney2"> </el-input>
                              <div slot="reference"> <label> 出售金额 </label> <i class='el-icon-arrow-down'> </i> </div>
                          </el-popover>
                      </template>
                      <template slot-scope="scope">
                          <div>
                              {{scope.row.money2}}
                          </div>
                      </template>
              </el-table-column>
              <el-table-column min-width='170' align="center">
                      <!-- eslint-disable-next-line -->
                      <template slot="header" slot-scope="scope">
                          <el-popover placement="bottom" trigger="click">
                              <el-input v-model="filterMoney3"> </el-input>
                              <div slot="reference"> <label> 项目已使用融资额度 </label> <i class='el-icon-arrow-down'> </i> </div>
                          </el-popover>
                      </template>
                      <template slot-scope="scope">
                          <div>
                              {{scope.row.money3}}
                          </div>
                      </template>
              </el-table-column>
              <el-table-column min-width='180' align="center">
                      <!-- eslint-disable-next-line -->
                      <template slot="header" slot-scope="scope">
                          <el-popover placement="bottom" trigger="click">
                              <el-input v-model="filterMoney4"> </el-input>
                              <div slot="reference"> <label> 更新后已使用融资额度 </label> <i class='el-icon-arrow-down'> </i> </div>
                          </el-popover>
                      </template>
                      <template slot-scope="scope">
                          <div>
                              {{scope.row.money4}}
                          </div>
                      </template>
              </el-table-column>
              <el-table-column prop="nodeName" label="当前流程" width="120" align="center" :formatter="getfor">
              </el-table-column>
              <el-table-column
                fixed="right"
                label="操作"
                width="250"
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
  <el-dialog :title="titleMap[dialogTitle]" width="60%" :visible.sync="dialogFormVisible" @close='closeDialog'>
      <el-form
        :model="fukuan"
        status-icon :rules="rules"
        ref="fukuan"
        label-width="100px"
        class="demo-ruleForm"
      >
      <el-row>
        <el-col :span="20">
        <el-row>
        <el-col :span="12">
          <el-form-item label="企业信息" prop="qiye_name" :label-width="formLabelWidth">
            <el-select :disabled="validated" filterable v-model="fukuan.qiye_name" placeholder="请选择企业">
                <el-option v-for="item in qiye" :key="item.id" :label="item.register_name" :value="item.register_name"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="项目名称" prop="item_name" :label-width="formLabelWidth">
            <el-select :disabled="validated" filterable v-model="fukuan.item_name" @change="selectOption" placeholder="请选择项目">
                <el-option v-for="item in jianzhu" :key="item.id" :label="item.item_name" :value="item.item_name"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
        <el-row>
        <el-col :span="12">
           <el-form-item label="已使用额度" prop="money" :label-width="formLabelWidth">
            <el-input :disabled="validated" v-model="fukuan.money" @blur="inputMoney($event,'money')"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="总授信额度" prop="totalmoney" :label-width="formLabelWidth">
            <el-input :disabled="true" v-model="fukuan.totalmoney"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
            <el-form-item label="结算单" ref="uploadElement" prop="statement" :label-width="formLabelWidth">
              <el-upload
                      ref="upload"
                      class="upload-demo"
                      action="http://106.15.5.29:8082/api/Caigou/upload"
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
                    action="http://localhost:8080/api/Caigou/upload" 
                    :show-file-list="false" 
                    :auto-upload="false" 
                    :data="fukuan" 
                    :on-change="(file,fileList) =>{return handleAvatarChange(file,fileList,0)}"
                    :on-success="(response,file,fileList) =>{return handleAvatarSuccess(response,file,fileList,0)}" 
                    :before-upload="beforeAvatarUpload"
                    :file-list="fileList">
                        <img v-if="imageUrlback[0]" :src="imageUrlback[0]" class="statement">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload> -->
            </el-form-item>
        </el-col>
        <el-col :span="12">
            <el-form-item label="发票" ref="uploadElement" prop="bill" :label-width="formLabelWidth">
              <el-upload
                      ref="upload1"
                      class="upload-demo"
                      action="http://106.15.5.29:8082/api/Caigou/upload"
                      :on-preview="handlePreview1"
                      :on-remove="handleRemove1"
                      :auto-upload="false"
                      :on-change="(file1,fileList1) =>{return handleAvatarChange1(file1,fileList1,1)}"
                      :on-success="(response1,file1,fileList1) =>{return handleAvatarSuccess1(response1,file1,fileList1,1)}" 
                      :file-list="fileList1"
                      list-type="picture">
                      <el-button size="small" type="primary">点击上传</el-button>
                      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                    </el-upload>
                    <!-- <el-upload :disabled="validated1" ref="upload2" class="avatar-uploader" 
                    action="http://localhost:8080/api/Caigou/upload" 
                    :show-file-list="false" 
                    :auto-upload="false" 
                    :data="fukuan" 
                    :on-change="(file,fileList) =>{return handleAvatarChange(file,fileList,2)}"
                    :on-success="(response,file,fileList) =>{return handleAvatarSuccess(response,file,fileList,2)}" 
                    :before-upload="beforeAvatarUpload"
                    :file-list="fileList">
                        <img v-if="imageUrlback[2]" :src="imageUrlback[2]" class="bill">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload> -->
            </el-form-item>
          </el-col> 
        </el-row>
         <el-row>
            <el-col :span="4">
            <el-form-item></el-form-item>
            </el-col>
           <el-col :span="4">
             <el-button type="warning" v-show="isshow" @click="addform()">添加物料</el-button> 
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
              prop="wuliaotype"
              label="物料类型"
              width="120"
              align="center">
            </el-table-column>
            <el-table-column
              prop="danwei"
              label="单位"
              width="100"
              align="center">
            </el-table-column>
            <el-table-column
              prop="shenqing"
              label="申请数量"
              width="100"
              align="center">
            </el-table-column>
            <el-table-column
              prop="price"
              label="单价"
              width="100"
              align="center">
            </el-table-column>
            <el-table-column
              prop="yugutatol"
              label="预估融资"
              width="120"
              align="center">
            </el-table-column>
            <el-table-column
              prop="shijitatol"
              label="实际融资"
              width="100"
              align="center">
            </el-table-column>
            <el-table-column
              prop="rate"
              label="税率%"
              width="80"
              align="center">
            </el-table-column>
            <el-table-column
              prop="supplier_name"
              label="供应商"
              width="150"
              align="center">
            </el-table-column>
            <el-table-column
                fixed="right"
                label="操作"
                width="150"
                align="center">
                <template slot-scope="scope">
                  <el-button type="danger" @click.stop="delClick1(scope.$index,tableData2)" plain round size="small">删除</el-button>
                </template>
              </el-table-column>
          </el-table>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="采购预算金额" prop="money1" :label-width="formLabelWidth">
            <el-input :disabled="validated" v-model="fukuan.money1" @blur="inputMoney($event,'money1')"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="出售金额" prop="money2" :label-width="formLabelWidth">
            <el-input :disabled="validated" v-model="fukuan.money2" @blur="inputMoney($event,'money2')"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="项目已使用融资额度" prop="money3" :label-width="formLabelWidth">
            <el-input :disabled="validated" v-model="fukuan.money3" @blur="inputMoney($event,'money3')"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="更新后已使用融资额度" prop="money4" :label-width="formLabelWidth">
            <el-input :disabled="validated" v-model="fukuan.money4" @blur="inputMoney($event,'money4')"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="当前流程" prop="nodeName" :label-width="formLabelWidth">
            <el-input :disabled="liucheng" v-model="fukuan.nodeName"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="11"><el-form-item></el-form-item></el-col> 
        <el-col :span="5">
        <el-form-item>
          <el-button type="primary" :disabled="annui"  v-show="isshow" ref="buttonname" @click="submit('fukuan')">{{buttonText}}</el-button>
        </el-form-item>
         </el-col>
         <el-col :span="8">
        <el-form-item>
          <el-button type="danger" v-show="isshow2" @click="no()">驳回</el-button>
        </el-form-item>
         </el-col>    
      </el-row>
         </el-col>  
         <el-col :span="4">
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
  status-icon :rules="rules1"
  >
     <el-form
        :model="rongzi"
        status-icon :rules="rules"
        ref="rongzi"
        label-width="100px"
        class="demo-ruleForm"
      >
      <span>融资预算</span>
          <el-form-item label="物料种类" prop="wuliaotype" :label-width="formLabelWidth">
                        <el-select v-model="rongzi.wuliaotype" placeholder="请选择物料">
                            <el-option v-for="item in result" :key="item.id" :label="item.name" :value="item.name"></el-option>
                        </el-select>
            </el-form-item>
          <el-form-item label="计量单位" prop="danwei" :label-width="formLabelWidth">
                        <el-select v-model="rongzi.danwei" placeholder="请选择单位">
                            <el-option v-for="item in result1" :key="item.id" :label="item.name" :value="item.name"></el-option>
                        </el-select>
            </el-form-item>
          <el-form-item label="申请数量" prop="shenqing" :label-width="formLabelWidth">
            <el-input v-model="rongzi.shenqing"></el-input>
          </el-form-item>
          <el-form-item label="单价" prop="price" :label-width="formLabelWidth">
            <el-input  v-model="rongzi.price"></el-input>
          </el-form-item>
          <el-form-item label="预估总额" prop="yugutatol" :label-width="formLabelWidth">
            <el-input  v-model="rongzi.yugutatol" @blur="inputMoney1($event,'yugutatol')"></el-input>
          </el-form-item>
          <el-form-item label="实际总额" prop="shijitatol" :label-width="formLabelWidth">
            <el-input v-model="rongzi.shijitatol" @blur="inputMoney1($event,'shijitatol')"></el-input>
          </el-form-item>
          <el-form-item label="税率" prop="rate" :label-width="formLabelWidth">
            <el-input  v-model="rongzi.rate"></el-input>
          </el-form-item>
          <el-form-item label="供应商" prop="supplier_name" :label-width="formLabelWidth">
            <el-select :disabled="validated" filterable v-model="rongzi.supplier_name" placeholder="请选择供应商">
              <el-option v-for="item in gys" :key="item.id" :label="item.supplier_name" :value="item.supplier_name"></el-option>
            </el-select>
          </el-form-item>
       <el-button type="primary" @click="addsubmit1('rongzi')">立即添加</el-button>
      </el-form>   
</el-drawer>
</div>

</template>

<script>
import CailiaogysService from "../services/CailiaogysService";
import JianzhuService from "../services/JianzhuService";
import QiyeService from "../services/QiyeService";
import DaibanService from "../services/DaibanService"
import authservice from "../services/auth.service"
import DanweiService from "../services/DanweiService";
import CaiGouwuliaoService from "../services/CaiGouwuliaoService";
import FukuanService from "../services/FukuanService";
import FukuanState from "../services/FukuanState";
import FukuanStatelog from "../services/FukuanStatelog";
import WuliaoService from "../services/WuliaoService";
import RongziService from "../services/RongziService";
import CodeService from "../services/CodeService";
import {getInputValue} from "../util";
import FukuanwuliaoService from "../services/Fukuanwuliao";
import FukuanImageService from "../services/FukuanImage";
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
      this.fileList1=[]
      this.fileList=[]
      this.buttonText="确定"
      this.isshow=false;
      this.isshow2=false;
    },
    inputMoney(el,name) {
         this.fukuan[name] = getInputValue(el);
     },
     inputMoney1(el,name) {
         this.rongzi[name] = getInputValue(el);
     },
    selectCode(){
        let date = new Date();
        let year = date.getFullYear(); // 年
        let month = (date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1) // 月
        let day = date.getDate(); // 日
        let time=`${year}${month}${day}`;
        CodeService.findByLog("采购管理").then(response=>{
            this.code=response.data.code_name+"-"+time+"-"+response.data.sum.toString().padStart(5,'0')
        })
    },
    selectOption(){
      const item = this.jianzhu.find(item1=> item1.item_name === this.fukuan.item_name)
      this.fukuan.totalmoney = item.total_quota
    },
    no(){
      this.dialogFormVisible=false;
      var data = {
           FukuanStateId:7
          }
          FukuanService.update(this.pa,data)
        .then(response => {
          var data = {
              userId:this.currentUser.id,
              fukuanId: this.pa,
              oldstateid: this.oldStateid,
              newstateid:this.nextState,
              operateId:5,
              }
              FukuanStatelog.create(data).then(response => {
              }).catch(e => {
                console.log(e);
              });
          this.tableonload();
        })
        .catch(e => {
          console.log(e);
        });
    },
    selectgys(){
      CailiaogysService.getAll().then(response=>{
        this.gys=response.data
      })
    },
    selectQiye(){
      QiyeService.getAll().then(response=>{
        this.qiye=response.data
      })
    },
    selectJianzhu(){
      JianzhuService.getAll().then(response=>{
        this.jianzhu=response.data
      })
    },
    selectState(){
         FukuanState.getAll()
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
          FukuanService.getAll().then(async resAllFukuan =>  {          
            for(var i=0;i<resAllFukuan.data.length;i++){
              await FukuanState.get(resAllFukuan.data[i].FukuanStateId).then(resFukuanState =>{
                var ifKeep=false;
                for (let k = 0; k < resUser.data.depts.length; k++){
                  for (var l = 0; l < resFukuanState.data.depts.length; l++){
                    if (resUser.data.depts[k].id === resFukuanState.data.depts[l].id){
                      ifKeep=true;
                    }
                  }
                }
                if(ifKeep){
                  this.tableData1.push(resAllFukuan.data[i])
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
        this.annui1=true;
        this.liucheng=true,
        this.dialogTitle = "examine";
          this.pa=row.id;
          this.selectdept();
          FukuanwuliaoService.findByLog(this.pa).then(response =>{
            this.tableData2=response.data
          })
           FukuanService.get(this.pa)
         .then(response => {
           
            this.lastone=response.data.FukuanState.lastone;
            // console.log(response.data)
          FukuanState.get(response.data.FukuanState.nextStateid).then(response =>{
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
          // console.log(this.qiyeid)
          this.nextState=response.data.FukuanState.nextStateid
          this.oldStateid=response.data.FukuanState.id
                this.fukuan=response.data;
                this.fukuan.nodeName = response.data.FukuanState.nodeName;
                this.imageUrlback[0]=response.data.statement
                this.imageUrlback[1]=response.data.delivery_note
                this.imageUrlback[2]=response.data.bill
                this.validated=true;
                this.validated1=false;
                this.buttonText = response.data.FukuanState.nodebutton;
                this.selectImage()
              })
              .catch(e => {
                console.log(e);
              });
               this.selectStateAndLogs();
       },
       selectImage(){
         FukuanImageService.findByLog(this.pa)
         .then(response => {
          //  console.log(response.data)
           var path1=[]
           var paths=[]
           for(var i=0;i<response.data.length;i++){
             if(response.data[i].zujianid===1){
             
             paths.push(response.data[i])
           }else{
              
             path1.push(response.data[i])
           }
           }
              this.fileList=paths;
              this.fileList1=path1;
                for(var i=0;i<this.fileList.length;i++){
                     this.fileList[i].url=paths[i].path;
                      }
                for(var i=0;i<this.fileList1.length;i++){
                this.fileList1[i].url=path1[i].path;
                      }                          
         })
       },
       updateDaiban(){
          FukuanState.get(this.nextState).then(response1=>{
            this.currentStateDept=response1.data.depts
            FukuanState.get(response1.data.nextStateid).then(response=>{
              this.nextStateDept=response.data.depts;
              //当前状态的部门减一
              for (let i = 0; i < this.currentStateDept.length; i++){
                DaibanService.getJian(this.currentStateDept[i].id,"付款管理")
              //如果下一个状态如果不是最后一个,则所有部门加一
              }
              if (response1.data.lastone!=1){
                for (let i = 0; i < this.nextStateDept.length; i++){
                    DaibanService.getJia(this.nextStateDept[i].id,"付款管理").then(response =>{

                    })
                }
              }
            })
          })
       },
       updateDaiban1(){
          FukuanState.get(this.nextState-1).then(response1=>{
            this.currentStateDept=response1.data.depts
            FukuanState.get(response1.data.nextStateid).then(response=>{
              this.nextStateDept=response.data.depts;
              //当前状态的部门减一
              for (let i = 0; i < this.currentStateDept.length; i++){
                DaibanService.getJian(this.currentStateDept[i].id,"付款管理")
              //如果下一个状态如果不是最后一个,则所有部门加一
              }
              FukuanState.get(this.nextState).then(response2=>{
                this.currentStateDept1=response2.data.depts
                FukuanState.get(response2.data.nextStateid).then(response3=>{
                  this.nextStateDept1=response3.data.depts;
                   if (response2.data.lastone!=1){
                for (let i = 0; i < this.nextStateDept1.length; i++){
                    DaibanService.getJia(this.nextStateDept1[i].id,"付款管理").then(response =>{

                    })
                }
              }
                })
              })
            })
          })
       },
       addDaiban(){
          //新增,所以查状态表第一条就行
          FukuanState.get(0).then(response=>{
            //如果状态表不是只有一个添加,则所有部门加一
            if (!response.data.lastone){
              FukuanState.get(response.data.nextStateid).then(response=>{
                this.nextStateDept=response.data.depts;
                // console.log(this.nextStateDept);
                 for (let i = 0; i < this.nextStateDept.length; i++){
                    DaibanService.getJia(this.nextStateDept[i].id,"付款管理").then(response =>{
                  })
              } 
            })
            }      
          })
       },
       addStatelog(){
         var data = {
              userId:this.currentUser.id,
              fukuanId: this.qiyeid,
              oldstateid: this.oldStateid,
              newstateid:this.nextState,
              operateId:4
              }
              // console.log(this.qiyeid)
              FukuanStatelog.create(data).then(response => {
        })
        .catch(e => {
          console.log(e);
        });
      },
      updateState(index,row){
        var data = {
           FukuanStateId:this.nextState
          }
          FukuanService.update(this.pa,data)
        .then(response => {
          this.tableonload();
        })
        .catch(e => {
          console.log(e);
        });
       },
       selectStateAndLogs(){
        FukuanState.getAll()
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
            return row.FukuanState.nodeName;
          },
          deleteImage(){
            FukuanImageService.findByLog(this.pa).then(response=>{
              for(var i=0;i<response.data.length;i++){
                  if(response.data[i].path===""){
                    FukuanImageService.delete(response.data[i].id).then(response=>{

                    })
                  }
              }
            })
       },
      async tableonload(){
        FukuanService.getAll()
        .then(response => {
          this.tableData = response.data;
          this.selectdept();
          this.selectCode();
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
      },
       openFrom(){
         this.activities=[]
         this.selectJianzhu()
         this.selectQiye()
         this.isshow=true;
         this.isshow2=false;
          this.imageUrlback[0]=""
          this.imageUrlback[1]=""
          this.imageUrlback[2]=""
          this.fukuan={},
          this.tableData2=[],
          this.dialogFormVisible=true
          this.dialogTitle = "addData";
          this.selectState();
          this.validated=false;
          this.liucheng=true,
          this.annui=false;
          this.annui1=false;
       },
       addrongzi(){
          var data = {
              wuliaotype: this.rongzi.wuliaotype,
              danwei:this.rongzi.danwei,
              shenqing: this.rongzi.shenqing,
              price : this.rongzi.price ,
              yugutatol:this.rongzi.yugutatol,
              shijitatol:this.rongzi.shijitatol,
              rate:this.rongzi.rate,
              supplier_name:this.rongzi.supplier_name,
              fukuanId:0,
          }
          this.tableData2.push(data);
       },
       addsubmit1(rongzi){
          this.$refs[rongzi].validate((valid) => {
          this.addrongzi();
          this.dialog=false;
          })
          
       },
       addservice(){
              this.dialogFormVisible=false;
              var path=this.imageUrl1;
              var path1=this.imageUrl2
            var data = {
              code:this.code,
              qiye_name: this.fukuan.qiye_name,
              item_name:this.fukuan.item_name,
              money: this.fukuan.money,
              totalmoney : this.fukuan.totalmoney ,
              total_quota:this.fukuan.total_quota,
              statement:this.imageUrlback[0],
              // delivery_note:this.imageUrlback[1],
              bill:this.imageUrlback[2],
              money1:this.fukuan.money1,
              money2:this.fukuan.money2,
              money3:this.fukuan.money3,
              money4:this.fukuan.money4,
              nodeName:this.fukuan.nodeName,
          } 
          FukuanService.create(data).then(response => {
            console.log(response.data.id)
          this.tableonload();
          var data = {
              userId:this.currentUser.id,
              fukuanId: response.data.id,
              oldstateid: 1,
              newstateid:response.data.FukuanStateId,
              operateId:4,
              }
              FukuanStatelog.create(data).then(response => {
              }).catch(e => {
                console.log(e);
              });
              for(let i=0;i<this.tableData2.length;i++){
              this.tableData2[i].fukuanId=response.data.id
              FukuanwuliaoService.create(this.tableData2[i])
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
       submit(fukuan){
          this.$refs[fukuan].validate((valid) => {
      if (this.dialogTitle ==  "addData"&&valid ) {
        this.addservice();
        // this.addDaiban();
      } else if(this.dialogTitle ==  "updataData") {
        this.updateservice();
      }else if(this.dialogTitle ==  "kanData"){
        this.kanClick();
      }else if(this.dialogTitle ==  "examine"&&valid){
        if(this.oldStateid===0){
          this.addDaiban();
          var paths=this.imageUrl1;
        var path1=this.imageUrl2
        var imagename=this.imageName
        var imagename1=this.imageName1
       for(var i = 0; i < paths.length; i++){
                 console.log(imagename[i])
              var data1 = {
              name:imagename[i],
              fukuanId: this.pa,
              path:paths[i],
              zujianid:1,
              }            
              FukuanImageService.create(data1).then(response => {
              }).catch(e => {
                console.log(e);
              });}
              var path1=this.imageUrl2
              var imagename1=this.imageName1
              for(var i = 0; i < path1.length; i++){
                console.log(imagename1[i])
              var data2 = {
              name:imagename1[i],
              fukuanId: this.pa,
              path:path1[i],
              zujianid:2,
              }
              FukuanImageService.create(data2).then(response => {
              }).catch(e => {
                console.log(e);
              });}
              this.tableonload();
        }else if(this.oldStateid===1){
          this.updateDaiban1()
        }
        else{
            this.updateDaiban()
        }
        this.dialogFormVisible=false;
        this.deleteImage();
        this.updateState();
        this.addStatelog();
      }else{
        return false
      }
        });
        this.imageUrlback[0]=""
        this.imageUrlback[1]=""
        this.imageUrlback[2]=""
        this.tmpUrl=""
        },
      addform(){
        this.selectgys()
          this.rongzi={},
            this.dialog=true;
            DanweiService.getAll()
                .then(response => {
                    this.result1 = response.data;
                }).catch(e => {
                    console.log(e);
                });
            WuliaoService.getAll()
        .then(response => {
          this.result = response.data;
        })
        .catch(e => {
          console.log(e);
        });
        },
      selectlogs(){
        let fukuanId=this.pa
          FukuanStatelog.findByLog(fukuanId).then(response => {
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
            this.selectStateAndLogs();
                                    this.dialogFormVisible=true
                                    this.dialogTitle = "kanData";
                                    this.isshow2=false;
                                    this.annui1=true;
                                    this.liucheng=true,
                                    this.validated=true;
                                    this.pa=this.tableData[index].id;
                                    
                                    FukuanwuliaoService.findByLog(this.pa).then(response =>{
                                      this.tableData2=response.data
                                    })
                                    FukuanService.get(this.pa)
                                  .then(response => {
                                          this.fukuan=response.data;
                                          this.fukuan.nodeName = response.data.FukuanState.nodeName;
                                          this.selectImage()
                                          // this.imageUrlback[0]=response.data.statement
                                          // this.imageUrlback[1]=response.data.delivery_note
                                          // this.imageUrlback[2]=response.data.bill
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
          this.selectJianzhu()
          this.selectQiye()
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
                                    xunhuan=true;
                                }
                            }
                       }
          if(xunhuan==true){
                                    this.isshow=true;
                                    this.isshow2=false;
                                    this.dialogFormVisible=true;
                                    this.dialogTitle = "updataData";
                                    this.annui=false;
                                    this.annui1=false;
                                    this.validated=false;
                                    this.liucheng=true, 
                                    this.pa=this.tableData[index].id;
                                    this.selectStateAndLogs();
                                    FukuanwuliaoService.findByLog(this.pa).then(response =>{
                                    this.tableData2=response.data
                                    })
                                    FukuanService.get(this.pa)
                                  .then(response => {
                                          this.fukuan=response.data;
                                          this.fukuan.nodeName = response.data.FukuanState.nodeName;
                                          this.selectImage()
                                          // this.imageUrlback[0]=response.data.statement
                                          // this.imageUrlback[1]=response.data.delivery_note
                                          // this.imageUrlback[2]=response.data.bill
                                          // //旧图片url另存一份,将来imageUrl会被覆盖
                                          //     this.oldUrl = this.imageUrlback[index];
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
              wuliaotype: this.rongzi.wuliaotype,
              danwei:this.rongzi.danwei,
              shenqing: this.rongzi.shenqing,
              price : this.rongzi.price,
              yugutatol:this.rongzi.yugutatol,
              shijitatol:this.rongzi.shijitatol,
              rate:this.rongzi.rate,
              supplier_name:this.rongzi.supplier_name,
              fukuanId:this.pa,
        }
        FukuanwuliaoService.create(data).then(response =>{
        })
       },
       updateservice(){
            this.updateaddwuliao();
            this.dialogFormVisible=false;
          var data = {
            id:this.fukuan.id,
            qiye_name: this.fukuan.qiye_name,
            item_name:this.fukuan.item_name,
            money: this.fukuan.money,
            totalmoney : this.fukuan.totalmoney ,
            total_quota:this.fukuan.total_quota,
            statement:this.imageUrlback[0],
            // delivery_note:this.imageUrlback[1],
            bill:this.imageUrlback[2],
            money1:this.fukuan.money1,
            money2:this.fukuan.money2,
            money3:this.fukuan.money3,
            money4:this.fukuan.money4,
            nodeName:this.fukuan.nodeName
        }

          FukuanService.update(data.id,data)
        .then(response => {
          this.tableonload();
          
           //删除旧图片
                            http.delete('/general/deletefile',{data:{filename:this.oldUrl}});
                            this.oldUrl=""
        })
        .catch(e => {
          console.log(e);
        });
       },
       delClickconfirm(index,row){
              let pa=this.tableData[index].id;
              FukuanService.delete(pa)
              .then(response => {
                var data = {
              userId:this.currentUser.id,
              fukuanId: pa,
              oldstateid: 1,
              newstateid:1,
              operateId:3,
              }
              FukuanStatelog.create(data).then(response => {
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
       delClick1(index,row){
          //从数组中index的位置删除1个元素
          this.tableData2.splice(index,1);
          //this.tableData2=[]
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
                                    xunhuan=true;
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
        },
        handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
    handleAvatarChange(file,fileList,index) {
      //  if (file.name === ''){
      //         alert("图片不能为空")
      //       }
          if (file.status !== 'ready'){
              return;
            }
           if (index===0)
              this.$refs.upload.submit();
           if (index===1)
              this.$refs.upload1.submit();
           if (index===2)
              this.$refs.upload2.submit();
        },
       handleAvatarSuccess(response,file,fileList,index) {
        //  if (this.tmpUrl){
        //         http.delete('/general/deletefile',{data:{filename:this.tmpUrl}});
        //     }
            //上传成功后，会返回后端的图片地址，存到imageUrl里面，将来调用create的api
            // this.imageUrlback[index] = response.url;
            // this.$forceUpdate();
            this.imageUrl1.push(response.url)
            this.imageName.push(file.name)
            // this.imageUrl2.push(response.url)
             console.log(this.imageName)
            this.tmpUrl = this.imageUrl;
            this.$forceUpdate();
        },
        handleRemove1(file1, fileList1) {
        console.log(file1, fileList1);
      },
      handlePreview1(file1) {
        console.log(file1);
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
            console.log(this.imageName1)
            // this.tmpUrl = this.imageUrl;
            this.$forceUpdate();
        },
        beforeAvatarUpload(file) {
            const isJPG = file.type === 'image/jpeg';
            const isLt2M = file.size / 1024 / 1024 < 2;
            //  if (file==="") {
            //     this.$message.error('不能为空!');
            // }
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
        },
    // 
    cancelForm() {
      this.loading = false;
      this.dialog = false;
      clearTimeout(this.timer);
    }
    },
    data() {
      return {
        imageName1:[],
        imageName:[],
        code:"",
        isshow2:false,
        gys:[],
        qiye:[],
        jianzhu:[],
        nextStateDept:[],
        nextStateDept:[],
        currentStateDept:[],
        currentStateDept1:[],
        tableData1: [],
        activeName: 'first',
        deletedept:[1,3,8],
        updatedept:[1,3,8],
        kandept:[1,3,8],
        isshow1:false,
        adddept:[1,3,8],
        lastone:"",
        deptId:[],
        statedeptId:[],
       tableData2: [],
        pa:'',
        buttonText: '确定',
        qiyeid:'',
        oldstateid:'',
        oldStateid:'',
        nextState:'',
        annui:'',
        annui1:'',
        isshow:false,
        validated1:false,
        validated:false,
        liucheng:false,
        activities: [],
        titleMap: {
        addData: "添加数据",
        updataData: "修改数据",
        kanData: "查看数据",
        examine: "采购",
      },
        dialogTitle:"",
        oldUrl: '',
        tmpUrl: '',
        imageUrl1:[],
        imageUrl2:[],
        fileList:[],
        fileList1:[],
        imageUrl:'',
        imageUrlfront:[],
        imageUrlback:[],
        dialog: false,
        loading: false,
        TravelType:1,
        formLabelWidth: "160px",
        rules1:{
          name: [
            { required: true, message: '请输入项目名称', trigger: 'blur' },
          ],
          wname: [
            { required: true, message: '请选择物料名称', trigger: 'change' }
          ],
          shu: [
            { required: true, message: '请输入数量', trigger: 'change' }
          ],
        },
        rules:{
          qiye_name: [
            { required: true, message: '请输入企业信息', trigger: 'blur' },
          ],
          item_name: [
            { required: true, message: '请选择项目', trigger: 'change' }
          ],
          money: [
            { required: true, message: '请输入已使用额度', trigger: 'change' }
          ],
          totalmoney: [
            { required: true, message: '请输入总授信额度', trigger: 'change' }
          ],
        },
        tableData:[],
        result:[],
        result1:[],
        fukuan:{},
        rongzi:{},
        filterCode:'',
        filterQiye_name:'',
        filterItem_name:'',
        filterMoney:'',
        filterTotalmoney:'',
        filterMoney1:'',
        filterMoney2:'',
        filterMoney3:'',
        filterMoney4:'',
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
  .statement {
    width: 178px;
    height: 178px;
    display: block;
  }
  .delivery_note {
    width: 178px;
    height: 178px;
    display: block;
  }
  .bill {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
