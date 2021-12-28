<template>
<div>
  <!-- 仓库管理/入库管理 -->
  <el-breadcrumb style="padding-top: 10px;" separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/Dao' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>仓库管理</el-breadcrumb-item>
      <el-breadcrumb-item>入库管理</el-breadcrumb-item>
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
                  &(!filterSupplier || data.supplier.toLowerCase().includes(filterSupplier.toString().toLowerCase()))
                  &(!filterGoods_name || data.goods_name.toLowerCase().includes(filterGoods_name.toString().toLowerCase()))
                  &(!filterGoods_danwei || data.goods_danwei.toLowerCase().includes(filterGoods_danwei.toString().toLowerCase()))
                  &(!filterRuku_number || data.ruku_number.toLowerCase().includes(filterRuku_number.toString().toLowerCase()))
                  &(!filterBefore_stock || data.before_stock.toLowerCase().includes(filterBefore_stock.toString().toLowerCase()))
                  &(!filterAfter_stock || data.after_stock.toLowerCase().includes(filterAfter_stock.toString().toLowerCase()))
                  &(!filterBefore_supply || data.before_supply.toLowerCase().includes(filterBefore_supply.toString().toLowerCase()))
                  &(!filterAfter_supply || data.after_supply.toLowerCase().includes(filterAfter_supply.toString().toLowerCase()))
                  )" border style="width: 100%">
                <el-table-column min-width='160' align="center">
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
                <el-table-column min-width='120' align="center">
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
                <el-table-column min-width='120' align="center">
                        <!-- eslint-disable-next-line -->
                        <template slot="header" slot-scope="scope">
                            <el-popover placement="bottom" trigger="click">
                                <el-input v-model="filterSupplier"> </el-input>
                                <div slot="reference"> <label> 供应商 </label> <i class='el-icon-arrow-down'> </i> </div>
                            </el-popover>
                        </template>
                        <template slot-scope="scope">
                            <div>
                                {{scope.row.supplier}}
                            </div>
                        </template>
                </el-table-column>
                <el-table-column min-width='80' align="center">
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
                <el-table-column min-width='90' align="center">
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
                <el-table-column min-width='90' align="center">
                        <!-- eslint-disable-next-line -->
                        <template slot="header" slot-scope="scope">
                            <el-popover placement="bottom" trigger="click">
                                <el-input v-model="filterRuku_number"> </el-input>
                                <div slot="reference"> <label> 入库数量 </label> <i class='el-icon-arrow-down'> </i> </div>
                            </el-popover>
                        </template>
                        <template slot-scope="scope">
                            <div>
                                {{scope.row.ruku_number}}
                            </div>
                        </template>
                </el-table-column>
                <el-table-column min-width='90' align="center">
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
                <el-table-column min-width='100' align="center">
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
                <el-table-column min-width='100' align="center">
                        <!-- eslint-disable-next-line -->
                        <template slot="header" slot-scope="scope">
                            <el-popover placement="bottom" trigger="click">
                                <el-input v-model="filterBefore_supply"> </el-input>
                                <div slot="reference"> <label> 当前已供应 </label> <i class='el-icon-arrow-down'> </i> </div>
                            </el-popover>
                        </template>
                        <template slot-scope="scope">
                            <div>
                                {{scope.row.before_supply}}
                            </div>
                        </template>
                </el-table-column>
                <el-table-column min-width='120' align="center">
                        <!-- eslint-disable-next-line -->
                        <template slot="header" slot-scope="scope">
                            <el-popover placement="bottom" trigger="click">
                                <el-input v-model="filterAfter_supply"> </el-input>
                                <div slot="reference"> <label> 更新后已供应 </label> <i class='el-icon-arrow-down'> </i> </div>
                            </el-popover>
                        </template>
                        <template slot-scope="scope">
                            <div>
                                {{scope.row.after_supply}}
                            </div>
                        </template>
                </el-table-column>
              <el-table-column prop="nodeName" label="当前流程" width="100" align="center" :formatter="getfor">
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
                &(!filterSupplier || data.supplier.toLowerCase().includes(filterSupplier.toString().toLowerCase()))
                &(!filterGoods_name || data.goods_name.toLowerCase().includes(filterGoods_name.toString().toLowerCase()))
                &(!filterGoods_danwei || data.goods_danwei.toLowerCase().includes(filterGoods_danwei.toString().toLowerCase()))
                &(!filterRuku_number || data.ruku_number.toLowerCase().includes(filterRuku_number.toString().toLowerCase()))
                &(!filterBefore_stock || data.before_stock.toLowerCase().includes(filterBefore_stock.toString().toLowerCase()))
                &(!filterAfter_stock || data.after_stock.toLowerCase().includes(filterAfter_stock.toString().toLowerCase()))
                &(!filterBefore_supply || data.before_supply.toLowerCase().includes(filterBefore_supply.toString().toLowerCase()))
                &(!filterAfter_supply || data.after_supply.toLowerCase().includes(filterAfter_supply.toString().toLowerCase()))
                )" border style="width: 100%">
              <el-table-column min-width='80' align="center">
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
                              <el-input v-model="filterSupplier"> </el-input>
                              <div slot="reference"> <label> 供应商 </label> <i class='el-icon-arrow-down'> </i> </div>
                          </el-popover>
                      </template>
                      <template slot-scope="scope">
                          <div>
                              {{scope.row.supplier}}
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
                              <el-input v-model="filterRuku_number"> </el-input>
                              <div slot="reference"> <label> 入库数量 </label> <i class='el-icon-arrow-down'> </i> </div>
                          </el-popover>
                      </template>
                      <template slot-scope="scope">
                          <div>
                              {{scope.row.ruku_number}}
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
              <el-table-column min-width='50' align="center">
                      <!-- eslint-disable-next-line -->
                      <template slot="header" slot-scope="scope">
                          <el-popover placement="bottom" trigger="click">
                              <el-input v-model="filterBefore_supply"> </el-input>
                              <div slot="reference"> <label> 当前已供应 </label> <i class='el-icon-arrow-down'> </i> </div>
                          </el-popover>
                      </template>
                      <template slot-scope="scope">
                          <div>
                              {{scope.row.before_supply}}
                          </div>
                      </template>
              </el-table-column>
              <el-table-column min-width='70' align="center">
                      <!-- eslint-disable-next-line -->
                      <template slot="header" slot-scope="scope">
                          <el-popover placement="bottom" trigger="click">
                              <el-input v-model="filterAfter_supply"> </el-input>
                              <div slot="reference"> <label> 更新后已供应 </label> <i class='el-icon-arrow-down'> </i> </div>
                          </el-popover>
                      </template>
                      <template slot-scope="scope">
                          <div>
                              {{scope.row.after_supply}}
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
  <el-dialog :title="titleMap[dialogTitle]" width="45%" :visible.sync="dialogFormVisible" @close='closeDialog'>
      <el-form
        :model="ruku"
        status-icon :rules="rules"
        ref="ruku"
        label-width="100px"
        class="demo-ruleForm"
      >
      <el-row>
        <el-col :span="18">
          <el-row>
         <el-col :span="12">
          <el-form-item label="项目名称" prop="item_name" :label-width="formLabelWidth">
            <el-select :disabled="validated" filterable v-model="ruku.item_name" placeholder="请选择项目">
                <el-option v-for="item in jianzhu" :key="item.id" :label="item.item_name" :value="item.item_name"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="供应商" prop="supplier" :label-width="formLabelWidth">
            <el-select :disabled="validated" filterable v-model="ruku.supplier" placeholder="请选择供应商">
              <el-option v-for="item in gys" :key="item.id" :label="item.supplier_name" :value="item.supplier_name"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="商品名" prop="goods_name" :label-width="formLabelWidth">
           <el-select :disabled="validated" filterable v-model="ruku.goods_name" placeholder="请选择商品">
              <el-option v-for="item in wuliao" :key="item.id" :label="item.name" :value="item.name"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="商品单位" prop="goods_danwei" :label-width="formLabelWidth">
            <el-select :disabled="validated" filterable v-model="ruku.goods_danwei" placeholder="请选择单位">
              <el-option v-for="item in result" :key="item.id" :label="item.name" :value="item.name"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
         <el-col :span="12">
          <el-form-item label="入库数量" prop="ruku_number" :label-width="formLabelWidth">
            <el-input :disabled="validated" v-model="ruku.ruku_number"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
            <el-form-item label="当前库存" prop="before_stock" :label-width="formLabelWidth">
                <el-input :disabled="validated" v-model="ruku.before_stock"></el-input>
             </el-form-item>
        </el-col>
      </el-row>
      <el-row>
         <el-col :span="12">
          <el-form-item label="更新后库存" prop="after_stock" :label-width="formLabelWidth">
            <el-input :disabled="validated" v-model="ruku.after_stock"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
            <el-form-item label="当前已供应" prop="before_supply" :label-width="formLabelWidth">
                <el-input :disabled="validated" v-model="ruku.before_supply"></el-input>
             </el-form-item>
        </el-col>
      </el-row>
      <el-row>
          <el-col :span="12">
            <el-form-item label="更新后已供应" prop="after_supply" :label-width="formLabelWidth">
                <el-input :disabled="validated" v-model="ruku.after_supply"></el-input>
             </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="当前流程" prop="nodeName" :label-width="formLabelWidth">
            <el-input :disabled="liucheng" v-model="ruku.nodeName"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12"><el-form-item></el-form-item></el-col>  
        <el-col :span="12">
        <el-form-item>
          <el-button type="primary" :disabled="annui" v-show="isshow" ref="buttonname" id="submitButton" @click="submit('ruku')">{{buttonText}}</el-button>
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
import RukuService from "../services/RukuService"
import RukuState from "../services/RukuState"
import RukuStatelog from "../services/RukuStatelog"
import CodeService from "../services/CodeService";
import CailiaogysService from "../services/CailiaogysService";
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
        CodeService.findByLog("入库记录").then(response=>{
            this.code=response.data.code_name+"-"+time+"-"+response.data.sum.toString().padStart(5,'0')
        })
    },
    selectgys(){
      CailiaogysService.getAll().then(response=>{
        this.gys=response.data
      })
    },
    selectJianzhu(){
      JianzhuService.getAll().then(response=>{
        this.jianzhu=response.data
      })
    },
      selectState(){
         RukuState.getAll()
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
           RukuService.get(this.pa)
         .then(response => {
                this.isshow=false;
                this.qiyeid=this.pa
                this.nextState=response.data.RukuState.nextStateid
                this.oldStateid=response.data.RukuState.id
                this.ruku=response.data;
                this.ruku.nodeName = response.data.RukuState.nodeName;
                this.validated=true;
                this.buttonText = response.data.RukuState.nodebutton;
               
              })
              .catch(e => {
                console.log(e);
              });
              this.selectStateAndLogs();
       },
       addStatelog(){
         var data = {
              userId:this.currentUser.id,
              rukuId: this.qiyeid,
              oldstateid: this.oldStateid,
              newstateid:this.nextState,
              operateId:4
              }
              RukuStatelog.create(data).then(response => {
        })
        .catch(e => {
          console.log(e);
        });
      },
      updateState(index,row){
        var data = {
           RukuStateId:this.nextState
          }
          RukuService.update(this.pa,data)
        .then(response => {
          this.tableonload();
        })
        .catch(e => {
          console.log(e);
        });
       },
       selectStateAndLogs(){
        RukuState.getAll()
        .then(response => {
          this.activities=response.data
          this.selectlogs();
        })
        .catch(e => {
          console.log(e);
        });
      },
      getfor(row,column){
            return row.RukuState.nodeName;
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
         RukuService.getAll()
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
          this.selectJianzhu()
          this.selectgys()
          this.ruku={},
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
        item_name: this.ruku.item_name,
        supplier: this.ruku.supplier,
        goods_name: this.ruku.goods_name,
        goods_danwei:this.ruku.goods_danwei,
        ruku_number:this.ruku.ruku_number,
        before_stock:this.ruku.before_stock,
        after_stock:this.ruku.after_stock,
        before_supply:this.ruku.before_supply,
        after_supply:this.ruku.after_supply,
        nodeName:this.ruku.nodeName
        }
        RukuService.create(data)
        .then(response => {
          this.tableonload();
          var data = {
              userId:this.currentUser.id,
              rukuId: response.data.id,
              oldstateid: 1,
              newstateid:response.data.RukuStateId,
              operateId:1,
              }
              RukuStatelog.create(data).then(response => {
              }).catch(e => {
                console.log(e);
              });
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
       },
       submit(ruku){
           this.$refs[ruku].validate((valid) => {
          if (this.dialogTitle ==  "addData"&&valid ) {
        this.addservice();
      } else if(this.dialogTitle ==  "updataData"&&valid) {
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
        let rukuId=this.pa
          RukuStatelog.findByLog(rukuId).then(response => {
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
                                    RukuService.get(this.pa)
                                  .then(response => {
                                          this.ruku=response.data;
                                          this.ruku.nodeName = response.data.RukuState.nodeName; 
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
          this.selectgys()
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
                                    RukuService.get(this.pa)
                                  .then(response => {
                                          this.ruku=response.data;
                                          this.ruku.nodeName = response.data.RukuState.nodeName;
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
            id:this.ruku.id,
            item_name: this.ruku.item_name,
            supplier: this.ruku.supplier,
            goods_name: this.ruku.goods_name,
            goods_danwei:this.ruku.goods_danwei,
            ruku_number:this.ruku.ruku_number,
            before_stock:this.ruku.before_stock,
            after_stock:this.ruku.after_stock,
            before_supply:this.ruku.before_supply,
            after_supply:this.ruku.after_supply,
            nodeName:this.ruku.nodeName
        }
          RukuService.update(data.id,data)
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
              RukuService.delete(pa)
              .then(response => {
                var data = {
              userId:this.currentUser.id,
              rukuId: pa,
              oldstateid: 1,
              newstateid:1,
              operateId:3,
              }
              RukuStatelog.create(data).then(response => {
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
      },
      filterCurrent(value, row){
            return row.current_process === value;
        }
    },

    data() {
      return {
        code:"",
        gys:[],
        jianzhu:[],
        tableData1: [],
        activeName: 'first',
        deletedept:[1,3,8],
        updatedept:[1,3,8],
        kandept:[1,3,8],
        isshow1:false,
        adddept:[1,3,8],
        deptId:[],
        wuliao:[],
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
         examine: "入库信息",
      },
        dialogTitle:"",
        TravelType:1,
        formLabelWidth: "100px",
        rules:{
          item_name: [
            { required: true, message: '请输入项目名称', trigger: 'blur' },
          ],
          supplier: [
            { required: true, message: '请输入供应商', trigger: 'change' }
          ],
          goods_name: [
            { required: true, message: '请输入商品名', trigger: 'change' }
          ],
          ruku_number: [
            { required: true, message: '请输入入库数量', trigger: 'change' }
          ],
        },
        tableData:[],
        result:[],
        ruku:{},
        filterCode:'',
        filterItem_name:'',
        filterSupplier:'',
        filterGoods_name:'',
        filterGoods_danwei:'',
        filterRuku_number:'',
        filterBefore_stock:'',
        filterAfter_stock:'',
        filterBefore_supply:'',
        filterAfter_supply:'',
        dialogFormVisible: false,
      }
    }
  }
</script>