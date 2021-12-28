<template>
<div>
  <!-- 客户管理/材料供应商信息管理/材料供应商资料页面 -->
  <el-breadcrumb style="padding-top: 10px;" separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/Dao' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>客户管理</el-breadcrumb-item>
      <el-breadcrumb-item>材料供应商信息管理</el-breadcrumb-item>
      <el-breadcrumb-item>材料供应商资料</el-breadcrumb-item>
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
                &(!filterAddress || data.address.toLowerCase().includes(filterAddress.toString().toLowerCase()))
                &(!filterContact_person || data.contact_person.toLowerCase().includes(filterContact_person.toString().toLowerCase()))
                &(!filterPhone || data.phone.toLowerCase().includes(filterPhone.toString().toLowerCase()))
                &(!filterFax || data.fax.toLowerCase().includes(filterFax.toString().toLowerCase()))
                &(!filterPost_code || data.post_code.toLowerCase().includes(filterPost_code.toString().toLowerCase()))
                &(!filterJuridical_person || data.juridical_person.toLowerCase().includes(filterJuridical_person.toString().toLowerCase()))
                &(!filterBank_name || data.bank_name.toLowerCase().includes(filterBank_name.toString().toLowerCase()))
                &(!filterBank_card || data.bank_card.toLowerCase().includes(filterBank_card.toString().toLowerCase()))
                &(!filterTax_card || data.tax_card.toLowerCase().includes(filterTax_card.toString().toLowerCase()))
                &(!filterVat || data.vat.toLowerCase().includes(filterVat.toString().toLowerCase()))
                &(!filterDiscount || data.discount.toLowerCase().includes(filterDiscount.toString().toLowerCase()))
                &(!filterRegistered_trademark || data.registered_trademark.toLowerCase().includes(filterRegistered_trademark.toString().toLowerCase()))
                &(!filterGrade || data.grade.toLowerCase().includes(filterGrade.toString().toLowerCase()))
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
              <el-table-column min-width='150' align="center">
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
              <el-table-column prop="trade" label="行业" width="100" align="center" :filters="[{text:'制造业', value:'制造业'},{text:'建筑业', value:'建筑业'}]" :filter-method="filtertrade">
              </el-table-column>
              <el-table-column min-width='250' align="center">
                      <!-- eslint-disable-next-line -->
                      <template slot="header" slot-scope="scope">
                          <el-popover placement="bottom" trigger="click">
                              <el-input v-model="filterAddress"> </el-input>
                              <div slot="reference"> <label> 地址 </label> <i class='el-icon-arrow-down'> </i> </div>
                          </el-popover>
                      </template>
                      <template slot-scope="scope">
                          <div>
                              {{scope.row.address}}
                          </div>
                      </template>
              </el-table-column>
              <el-table-column min-width='100' align="center">
                      <!-- eslint-disable-next-line -->
                      <template slot="header" slot-scope="scope">
                          <el-popover placement="bottom" trigger="click">
                              <el-input v-model="filterContact_person"> </el-input>
                              <div slot="reference"> <label> 联系人 </label> <i class='el-icon-arrow-down'> </i> </div>
                          </el-popover>
                      </template>
                      <template slot-scope="scope">
                          <div>
                              {{scope.row.contact_person}}
                          </div>
                      </template>
              </el-table-column>
              <el-table-column min-width='120' align="center">
                      <!-- eslint-disable-next-line -->
                      <template slot="header" slot-scope="scope">
                          <el-popover placement="bottom" trigger="click">
                              <el-input v-model="filterPhone"> </el-input>
                              <div slot="reference"> <label> 电话 </label> <i class='el-icon-arrow-down'> </i> </div>
                          </el-popover>
                      </template>
                      <template slot-scope="scope">
                          <div>
                              {{scope.row.phone}}
                          </div>
                      </template>
              </el-table-column>
              <el-table-column min-width='120' align="center">
                      <!-- eslint-disable-next-line -->
                      <template slot="header" slot-scope="scope">
                          <el-popover placement="bottom" trigger="click">
                              <el-input v-model="filterFax"> </el-input>
                              <div slot="reference"> <label> 传真 </label> <i class='el-icon-arrow-down'> </i> </div>
                          </el-popover>
                      </template>
                      <template slot-scope="scope">
                          <div>
                              {{scope.row.fax}}
                          </div>
                      </template>
              </el-table-column>
              <el-table-column min-width='120' align="center">
                      <!-- eslint-disable-next-line -->
                      <template slot="header" slot-scope="scope">
                          <el-popover placement="bottom" trigger="click">
                              <el-input v-model="filterPost_code"> </el-input>
                              <div slot="reference"> <label> 邮编 </label> <i class='el-icon-arrow-down'> </i> </div>
                          </el-popover>
                      </template>
                      <template slot-scope="scope">
                          <div>
                              {{scope.row.post_code}}
                          </div>
                      </template>
              </el-table-column>
              <el-table-column min-width='100' align="center">
                      <!-- eslint-disable-next-line -->
                      <template slot="header" slot-scope="scope">
                          <el-popover placement="bottom" trigger="click">
                              <el-input v-model="filterJuridical_person"> </el-input>
                              <div slot="reference"> <label> 法人 </label> <i class='el-icon-arrow-down'> </i> </div>
                          </el-popover>
                      </template>
                      <template slot-scope="scope">
                          <div>
                              {{scope.row.juridical_person}}
                          </div>
                      </template>
              </el-table-column>
              <el-table-column min-width='200' align="center">
                      <!-- eslint-disable-next-line -->
                      <template slot="header" slot-scope="scope">
                          <el-popover placement="bottom" trigger="click">
                              <el-input v-model="filterBank_name"> </el-input>
                              <div slot="reference"> <label> 开户银行 </label> <i class='el-icon-arrow-down'> </i> </div>
                          </el-popover>
                      </template>
                      <template slot-scope="scope">
                          <div>
                              {{scope.row.bank_name}}
                          </div>
                      </template>
              </el-table-column>
              <el-table-column min-width='150' align="center">
                      <!-- eslint-disable-next-line -->
                      <template slot="header" slot-scope="scope">
                          <el-popover placement="bottom" trigger="click">
                              <el-input v-model="filterBank_card"> </el-input>
                              <div slot="reference"> <label> 银行账号 </label> <i class='el-icon-arrow-down'> </i> </div>
                          </el-popover>
                      </template>
                      <template slot-scope="scope">
                          <div>
                              {{scope.row.bank_card}}
                          </div>
                      </template>
              </el-table-column>
              <el-table-column min-width='180' align="center">
                      <!-- eslint-disable-next-line -->
                      <template slot="header" slot-scope="scope">
                          <el-popover placement="bottom" trigger="click">
                              <el-input v-model="filterTax_card"> </el-input>
                              <div slot="reference"> <label> 税务登记号 </label> <i class='el-icon-arrow-down'> </i> </div>
                          </el-popover>
                      </template>
                      <template slot-scope="scope">
                          <div>
                              {{scope.row.tax_card}}
                          </div>
                      </template>
              </el-table-column>
              <el-table-column min-width='100' align="center">
                      <!-- eslint-disable-next-line -->
                      <template slot="header" slot-scope="scope">
                          <el-popover placement="bottom" trigger="click">
                              <el-input v-model="filterVat"> </el-input>
                              <div slot="reference"> <label> 增值税率 </label> <i class='el-icon-arrow-down'> </i> </div>
                          </el-popover>
                      </template>
                      <template slot-scope="scope">
                          <div>
                              {{scope.row.vat}}
                          </div>
                      </template>
              </el-table-column>
              <el-table-column prop="supplier_type" label="供应商类型" width="120" align="center" :filters="[{text:'往来单位', value:'往来单位'},{text:'其他客户', value:'其他客户'}]" :filter-method="filtersupplier_type">
              </el-table-column>
              <el-table-column min-width='100' align="center">
                      <!-- eslint-disable-next-line -->
                      <template slot="header" slot-scope="scope">
                          <el-popover placement="bottom" trigger="click">
                              <el-input v-model="filterDiscount"> </el-input>
                              <div slot="reference"> <label> 折扣 </label> <i class='el-icon-arrow-down'> </i> </div>
                          </el-popover>
                      </template>
                      <template slot-scope="scope">
                          <div>
                              {{scope.row.discount}}
                          </div>
                      </template>
              </el-table-column>
              <el-table-column min-width='120' align="center">
                      <!-- eslint-disable-next-line -->
                      <template slot="header" slot-scope="scope">
                          <el-popover placement="bottom" trigger="click">
                              <el-input v-model="filterRegistered_trademark"> </el-input>
                              <div slot="reference"> <label> 品牌 </label> <i class='el-icon-arrow-down'> </i> </div>
                          </el-popover>
                      </template>
                      <template slot-scope="scope">
                          <div>
                              {{scope.row.registered_trademark}}
                          </div>
                      </template>
              </el-table-column>
              <el-table-column min-width='100' align="center">
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
              <el-table-column min-width='100' align="center">
                      <!-- eslint-disable-next-line -->
                      <template slot="header" slot-scope="scope">
                          <el-popover placement="bottom" trigger="click">
                              <el-input v-model="filterGrade"> </el-input>
                              <div slot="reference"> <label> 最新评级 </label> <i class='el-icon-arrow-down'> </i> </div>
                          </el-popover>
                      </template>
                      <template slot-scope="scope">
                          <div>
                              {{scope.row.grade}}
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
                &(!filterSupplier_name || data.supplier_name.toLowerCase().includes(filterSupplier_name.toString().toLowerCase()))
                &(!filterAddress || data.address.toLowerCase().includes(filterAddress.toString().toLowerCase()))
                &(!filterContact_person || data.contact_person.toLowerCase().includes(filterContact_person.toString().toLowerCase()))
                &(!filterPhone || data.phone.toLowerCase().includes(filterPhone.toString().toLowerCase()))
                &(!filterFax || data.fax.toLowerCase().includes(filterFax.toString().toLowerCase()))
                &(!filterPost_code || data.post_code.toLowerCase().includes(filterPost_code.toString().toLowerCase()))
                &(!filterJuridical_person || data.juridical_person.toLowerCase().includes(filterJuridical_person.toString().toLowerCase()))
                &(!filterBank_name || data.bank_name.toLowerCase().includes(filterBank_name.toString().toLowerCase()))
                &(!filterBank_card || data.bank_card.toLowerCase().includes(filterBank_card.toString().toLowerCase()))
                &(!filterTax_card || data.tax_card.toLowerCase().includes(filterTax_card.toString().toLowerCase()))
                &(!filterVat || data.vat.toLowerCase().includes(filterVat.toString().toLowerCase()))
                &(!filterDiscount || data.discount.toLowerCase().includes(filterDiscount.toString().toLowerCase()))
                &(!filterRegistered_trademark || data.registered_trademark.toLowerCase().includes(filterRegistered_trademark.toString().toLowerCase()))
                &(!filterRemarks || data.remarks.toLowerCase().includes(filterRemarks.toString().toLowerCase()))
                &(!filterGrade || data.grade.toLowerCase().includes(filterGrade.toString().toLowerCase()))
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
              <el-table-column min-width='150' align="center">
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
              <el-table-column prop="trade" label="行业" width="100" align="center" :filters="[{text:'制造业', value:'制造业'},{text:'建筑业', value:'建筑业'}]" :filter-method="filtertrade">
              </el-table-column>
              <el-table-column min-width='250' align="center">
                      <!-- eslint-disable-next-line -->
                      <template slot="header" slot-scope="scope">
                          <el-popover placement="bottom" trigger="click">
                              <el-input v-model="filterAddress"> </el-input>
                              <div slot="reference"> <label> 地址 </label> <i class='el-icon-arrow-down'> </i> </div>
                          </el-popover>
                      </template>
                      <template slot-scope="scope">
                          <div>
                              {{scope.row.address}}
                          </div>
                      </template>
              </el-table-column>
              <el-table-column min-width='100' align="center">
                      <!-- eslint-disable-next-line -->
                      <template slot="header" slot-scope="scope">
                          <el-popover placement="bottom" trigger="click">
                              <el-input v-model="filterContact_person"> </el-input>
                              <div slot="reference"> <label> 联系人 </label> <i class='el-icon-arrow-down'> </i> </div>
                          </el-popover>
                      </template>
                      <template slot-scope="scope">
                          <div>
                              {{scope.row.contact_person}}
                          </div>
                      </template>
              </el-table-column>
              <el-table-column min-width='120' align="center">
                      <!-- eslint-disable-next-line -->
                      <template slot="header" slot-scope="scope">
                          <el-popover placement="bottom" trigger="click">
                              <el-input v-model="filterPhone"> </el-input>
                              <div slot="reference"> <label> 电话 </label> <i class='el-icon-arrow-down'> </i> </div>
                          </el-popover>
                      </template>
                      <template slot-scope="scope">
                          <div>
                              {{scope.row.phone}}
                          </div>
                      </template>
              </el-table-column>
              <el-table-column min-width='120' align="center">
                      <!-- eslint-disable-next-line -->
                      <template slot="header" slot-scope="scope">
                          <el-popover placement="bottom" trigger="click">
                              <el-input v-model="filterFax"> </el-input>
                              <div slot="reference"> <label> 传真 </label> <i class='el-icon-arrow-down'> </i> </div>
                          </el-popover>
                      </template>
                      <template slot-scope="scope">
                          <div>
                              {{scope.row.fax}}
                          </div>
                      </template>
              </el-table-column>
              <el-table-column min-width='120' align="center">
                      <!-- eslint-disable-next-line -->
                      <template slot="header" slot-scope="scope">
                          <el-popover placement="bottom" trigger="click">
                              <el-input v-model="filterPost_code"> </el-input>
                              <div slot="reference"> <label> 邮编 </label> <i class='el-icon-arrow-down'> </i> </div>
                          </el-popover>
                      </template>
                      <template slot-scope="scope">
                          <div>
                              {{scope.row.post_code}}
                          </div>
                      </template>
              </el-table-column>
              <el-table-column min-width='100' align="center">
                      <!-- eslint-disable-next-line -->
                      <template slot="header" slot-scope="scope">
                          <el-popover placement="bottom" trigger="click">
                              <el-input v-model="filterJuridical_person"> </el-input>
                              <div slot="reference"> <label> 法人 </label> <i class='el-icon-arrow-down'> </i> </div>
                          </el-popover>
                      </template>
                      <template slot-scope="scope">
                          <div>
                              {{scope.row.juridical_person}}
                          </div>
                      </template>
              </el-table-column>
              <el-table-column min-width='200' align="center">
                      <!-- eslint-disable-next-line -->
                      <template slot="header" slot-scope="scope">
                          <el-popover placement="bottom" trigger="click">
                              <el-input v-model="filterBank_name"> </el-input>
                              <div slot="reference"> <label> 开户银行 </label> <i class='el-icon-arrow-down'> </i> </div>
                          </el-popover>
                      </template>
                      <template slot-scope="scope">
                          <div>
                              {{scope.row.bank_name}}
                          </div>
                      </template>
              </el-table-column>
              <el-table-column min-width='150' align="center">
                      <!-- eslint-disable-next-line -->
                      <template slot="header" slot-scope="scope">
                          <el-popover placement="bottom" trigger="click">
                              <el-input v-model="filterBank_card"> </el-input>
                              <div slot="reference"> <label> 银行账号 </label> <i class='el-icon-arrow-down'> </i> </div>
                          </el-popover>
                      </template>
                      <template slot-scope="scope">
                          <div>
                              {{scope.row.bank_card}}
                          </div>
                      </template>
              </el-table-column>
              <el-table-column min-width='180' align="center">
                      <!-- eslint-disable-next-line -->
                      <template slot="header" slot-scope="scope">
                          <el-popover placement="bottom" trigger="click">
                              <el-input v-model="filterTax_card"> </el-input>
                              <div slot="reference"> <label> 税务登记号 </label> <i class='el-icon-arrow-down'> </i> </div>
                          </el-popover>
                      </template>
                      <template slot-scope="scope">
                          <div>
                              {{scope.row.tax_card}}
                          </div>
                      </template>
              </el-table-column>
              <el-table-column min-width='100' align="center">
                      <!-- eslint-disable-next-line -->
                      <template slot="header" slot-scope="scope">
                          <el-popover placement="bottom" trigger="click">
                              <el-input v-model="filterVat"> </el-input>
                              <div slot="reference"> <label> 增值税率 </label> <i class='el-icon-arrow-down'> </i> </div>
                          </el-popover>
                      </template>
                      <template slot-scope="scope">
                          <div>
                              {{scope.row.vat}}
                          </div>
                      </template>
              </el-table-column>
              <el-table-column prop="supplier_type" label="供应商类型" width="120" align="center" :filters="[{text:'往来单位', value:'往来单位'},{text:'其他客户', value:'其他客户'}]" :filter-method="filtersupplier_type">
              </el-table-column>
              <el-table-column min-width='100' align="center">
                      <!-- eslint-disable-next-line -->
                      <template slot="header" slot-scope="scope">
                          <el-popover placement="bottom" trigger="click">
                              <el-input v-model="filterDiscount"> </el-input>
                              <div slot="reference"> <label> 折扣 </label> <i class='el-icon-arrow-down'> </i> </div>
                          </el-popover>
                      </template>
                      <template slot-scope="scope">
                          <div>
                              {{scope.row.discount}}
                          </div>
                      </template>
              </el-table-column>
              <el-table-column min-width='120' align="center">
                      <!-- eslint-disable-next-line -->
                      <template slot="header" slot-scope="scope">
                          <el-popover placement="bottom" trigger="click">
                              <el-input v-model="filterRegistered_trademark"> </el-input>
                              <div slot="reference"> <label> 品牌 </label> <i class='el-icon-arrow-down'> </i> </div>
                          </el-popover>
                      </template>
                      <template slot-scope="scope">
                          <div>
                              {{scope.row.registered_trademark}}
                          </div>
                      </template>
              </el-table-column>
              <el-table-column min-width='100' align="center">
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
              <el-table-column min-width='100' align="center">
                      <!-- eslint-disable-next-line -->
                      <template slot="header" slot-scope="scope">
                          <el-popover placement="bottom" trigger="click">
                              <el-input v-model="filterGrade"> </el-input>
                              <div slot="reference"> <label> 最新评级 </label> <i class='el-icon-arrow-down'> </i> </div>
                          </el-popover>
                      </template>
                      <template slot-scope="scope">
                          <div>
                              {{scope.row.grade}}
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
  <el-dialog :title="titleMap[dialogTitle]" :visible.sync="dialogFormVisible" @close='closeDialog'>
      <el-form
        :model="Ziliao"
        status-icon :rules="rules"
        ref="Ziliao"
        label-width="100px"
        class="demo-ruleForm"
      >
      <el-row>
        <el-col :span="18">
          <el-row>
        <el-col :span="12">
          <el-form-item label="供应商名称" prop="supplier_name" :label-width="formLabelWidth">
            <el-input :disabled="validated" v-model="Ziliao.supplier_name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="行业" prop="trade" :label-width="formLabelWidth">
            <el-select :disabled="validated" v-model="Ziliao.trade" clearable placeholder="请选择" >
              <el-option label="制造业" value="制造业"></el-option>
              <el-option label="建筑业" value="建筑业"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
        <el-row>
        <el-col :span="12">
           <el-form-item label="地址" prop="address" :label-width="formLabelWidth">
            <el-input :disabled="validated" v-model="Ziliao.address"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="联系人" prop="contact_person" :label-width="formLabelWidth">
            <el-input :disabled="validated" v-model="Ziliao.contact_person"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="电话" prop="phone" :label-width="formLabelWidth">
            <el-input :disabled="validated" v-model="Ziliao.phone"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="传真" prop="fax" :label-width="formLabelWidth">
            <el-input :disabled="validated" v-model="Ziliao.fax"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="邮编" prop="post_code" :label-width="formLabelWidth">
            <el-input :disabled="validated" v-model="Ziliao.post_code"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="法人" prop="juridical_person" :label-width="formLabelWidth">
            <el-input :disabled="validated" v-model="Ziliao.juridical_person"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="开户银行" prop="bank_name" :label-width="formLabelWidth">
            <el-input :disabled="validated" v-model="Ziliao.bank_name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="银行账号" prop="bank_card" :label-width="formLabelWidth">
            <el-input :disabled="validated" v-model="Ziliao.bank_card"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="税务登记号" prop="tax_card" :label-width="formLabelWidth">
            <el-input :disabled="validated" v-model="Ziliao.tax_card"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="税率" prop="vat" :label-width="formLabelWidth">
            <el-input :disabled="validated" v-model="Ziliao.vat"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="供应商类型" prop="supplier_type" :label-width="formLabelWidth">
            <el-select :disabled="validated" v-model="Ziliao.supplier_type" clearable placeholder="请选择" >
              <el-option label="往来单位" value="往来单位"></el-option>
              <el-option label="配件供应" value="配件供应"></el-option>
              <el-option label="其他客户" value="其他客户"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="折扣" prop="discount" :label-width="formLabelWidth">
            <el-input :disabled="validated" v-model="Ziliao.discount"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="品牌" prop="registered_trademark" :label-width="formLabelWidth">
            <el-input :disabled="validated" v-model="Ziliao.registered_trademark"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="评级" prop="grade" :label-width="formLabelWidth">
            <el-input :disabled="validated" v-model="Ziliao.grade"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="备注" prop="remarks" :label-width="formLabelWidth">
            <el-input :disabled="validated" v-model="Ziliao.remarks"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="当前流程" prop="nodeName" :label-width="formLabelWidth">
            <el-input :disabled="liucheng" v-model="Ziliao.nodeName"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="11"><el-form-item></el-form-item></el-col>   
        <el-col :span="5">
        <el-form-item>
          <el-button type="primary" :disabled="annui" v-show="isshow" ref="buttonname" id="submitButton" @click="submit('Ziliao')">{{buttonText}}</el-button>
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
import authservice from "../services/auth.service"
import CailiaogysService from "../services/CailiaogysService";
import PingjiService from "../services/PingjiService";
import CailiaoState from "../services/CailiaoState"
import CailiaoStatelog from "../services/CailiaoStatelog"
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
      this.isshow=false;
      this.isshow2=false
    },
    selectCode(){
        let date = new Date();
        let year = date.getFullYear(); // 年
        let month = (date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1) // 月
        let day = date.getDate(); // 日
        let time=`${year}${month}${day}`;
        CodeService.findByLog("材料供应商").then(response=>{
            this.code=response.data.code_name+"-"+time+"-"+response.data.sum.toString().padStart(5,'0')
        })
    },
    no(){
      this.dialogFormVisible=false;
      var data = {
           CailiaoStateId:4
          }
          CailiaogysService.update(this.pa,data)
        .then(response => {
          var data = {
              userId:this.currentUser.id,
              cailiaogyId: this.pa,
              oldstateid: this.oldStateid,
              newstateid:this.nextState,
              operateId:5,
              }
              CailiaoStatelog.create(data).then(response => {
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
         CailiaoState.getAll()
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
          CailiaogysService.getAll().then(async resAllCailiao =>  {          
            for(var i=0;i<resAllCailiao.data.length;i++){
              await CailiaoState.get(resAllCailiao.data[i].CailiaoStateId).then(resCailiaoState =>{
                var ifKeep=false;
                for (let k = 0; k < resUser.data.depts.length; k++){
                  for (var l = 0; l < resCailiaoState.data.depts.length; l++){
                    if (resUser.data.depts[k].id === resCailiaoState.data.depts[l].id){
                      ifKeep=true;
                    }
                  }
                }
                if(ifKeep){
                  this.tableData1.push(resAllCailiao.data[i])
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
        CailiaogysService.get(this.pa)
         .then(response => {
           this.lastone=response.data.CailiaoState.lastone;
          CailiaoState.get(response.data.CailiaoState.nextStateid).then(response =>{
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
          this.nextState=response.data.CailiaoState.nextStateid
          this.oldStateid=response.data.CailiaoState.id
                this.Ziliao=response.data;
                this.Ziliao.nodeName = response.data.CailiaoState.nodeName;
                this.validated=true;
                this.buttonText = response.data.CailiaoState.nodebutton;
               
              })
              .catch(e => {
                console.log(e);
              });
              this.selectStateAndLogs();
       },
       addStatelog(){
         var data = {
              userId:this.currentUser.id,
              cailiaogyId: this.qiyeid,
              oldstateid: this.oldStateid,
              newstateid:this.nextState,
              operateId:4
              }
              CailiaoStatelog.create(data).then(response => {
        })
        .catch(e => {
          console.log(e);
        });
      },
      updateState(index,row){
        var data = {
           CailiaoStateId:this.nextState
          }
          CailiaogysService.update(this.pa,data)
        .then(response => {
          this.tableonload();
        })
        .catch(e => {
          console.log(e);
        });
       },
       selectStateAndLogs(){
        CailiaoState.getAll()
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
            return row.CailiaoState.nodeName;
          },
      async tableonload(){
        CailiaogysService.getAll()
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
         this.isshow2=false;
         this.isshow=true;
         this.activities=[]
          this.Ziliao={},
          this.dialogFormVisible=true
         this.selectState();
          this.validated=false;
          this.liucheng=true,
          this.annui=false;
        this.dialogTitle = "addData";
           PingjiService.getAll()
        .then(response => {
          this.result = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
       },
       async addservice(){
              this.dialogFormVisible=false;
          var data = {
            code:this.code,
        supplier_name: this.Ziliao.supplier_name,
        trade: this.Ziliao.trade,
        address: this.Ziliao.address,
        contact_person:this.Ziliao.contact_person,
        phone:this.Ziliao.phone,
        fax:this.Ziliao.fax,
        post_code:this.Ziliao.post_code,
        juridical_person:this.Ziliao.juridical_person,
        bank_name:this.Ziliao.bank_name,
        bank_card:this.Ziliao.bank_card,
        tax_card:this.Ziliao.tax_card,
        vat:this.Ziliao.vat,
        email:this.Ziliao.email,
        supplier_type:this.Ziliao.supplier_type,
        discount:this.Ziliao.discount,
        registered_trademark:this.Ziliao.registered_trademark,
        remarks:this.Ziliao.remarks,
        grade:this.Ziliao.grade,
        nodeName:this.Ziliao.nodeName
        }

        CailiaogysService.create(data)
        .then(response => {
          this.tableonload();
          var data = {
              userId:this.currentUser.id,
              cailiaogyId: response.data.id,
              oldstateid: 1,
              newstateid:response.data.CailiaoStateId,
              operateId:4,
              }
              CailiaoStatelog.create(data).then(response => {
              }).catch(e => {
                console.log(e);
              });
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
       },
      submit(Ziliao){
          this.$refs[Ziliao].validate((valid) => {
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
        let CailiaoId=this.pa
          CailiaoStatelog.findByLog(CailiaoId).then(response => {
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
                                    this.isshow2=false;
                                    this.liucheng=true,
                                    this.validated=true;
                                    this.pa=this.tableData[index].id;
                                    this.selectStateAndLogs();
                                    CailiaogysService.get(this.pa)
                                  .then(response => {
                                          this.Ziliao=response.data;
                                          this.Ziliao.nodeName = response.data.CailiaoState.nodeName; 
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
                                    this.isshow2=false;
                                    this.isshow=true;
                                    this.validated=false;
                                    this.liucheng=true, 
                                    this.pa=this.tableData[index].id;
                                    this.selectStateAndLogs();
                                    CailiaogysService.get(this.pa)
                                  .then(response => {
                                          this.Ziliao=response.data;
                                          this.Ziliao.nodeName = response.data.CailiaoState.nodeName;
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
          id:this.Ziliao.id,
        supplier_name: this.Ziliao.supplier_name,
        trade: this.Ziliao.trade,
        address: this.Ziliao.address,
        contact_person:this.Ziliao.contact_person,
        phone:this.Ziliao.phone,
        fax:this.Ziliao.fax,
        post_code:this.Ziliao.post_code,
        juridical_person:this.Ziliao.juridical_person,
        bank_name:this.Ziliao.bank_name,
        bank_card:this.Ziliao.bank_card,
        tax_card:this.Ziliao.tax_card,
        vat:this.Ziliao.vat,
        email:this.Ziliao.email,
        supplier_type:this.Ziliao.supplier_type,
        discount:this.Ziliao.discount,
        registered_trademark:this.Ziliao.registered_trademark,
        remarks:this.Ziliao.remarks,
        grade:this.Ziliao.grade,
        nodeName:this.Ziliao.nodeName
        }
         CailiaogysService.update(data.id,data)
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
              CailiaogysService.delete(pa)
              .then(response => {
                var data = {
              userId:this.currentUser.id,
              cailiaogyId: pa,
              oldstateid: 1,
              newstateid:1,
              operateId:3,
              }
              CailiaoStatelog.create(data).then(response => {
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
        // 触发‘待办事项’事件
        if(tab.name == 'second'){
        	this.selectdept1();
        }else{
        	// 触发‘其他’事件
        }
      },
      filtertrade(value, row){
            return row.trade === value;
        },
      filterCurrent(value, row){
            return row.current_process === value;
        },
      filtersupplier_type(value, row){
            return row.supplier_type === value;
        }
    },

    data() {
      return {
        code:"",
        isshow2:false,
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
        isshow:false,
        validated:false,
        liucheng:false,
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
          supplier_name: [
            { required: true, message: '请输入供应商名称', trigger: 'blur' },
          ],
          trade: [
            { required: true, message: '请选择行业', trigger: 'change' }
          ],
          address: [
            { required: true, message: '请输入地址', trigger: 'change' }
          ],
          contact_person: [
            { required: true, message: '请输入联系人', trigger: 'change' }
          ],
          phone: [
            { required: true, message: '请输入电话', trigger: 'change' }
          ],
          juridical_person: [
            { required: true, message: '请输入法人', trigger: 'change' }
          ],
        },
        Ziliao:{},
        filterCode:'',
        filterSupplier_name:'',
        filterAddress:'',
        filterContact_person:'',
        filterPhone:'',
        filterFax:'',
        filterPost_code:'',
        filterJuridical_person:'',
        filterBank_name:'',
        filterBank_card:'',
        filterTax_card:'',
        filterVat:'',
        filterDiscount:'',
        filterRegistered_trademark:'',
        filterRemarks:'',
        filterGrade:'',
        dialogFormVisible: false,
        tableData: [],
        result:[]
      }
    }
  }
</script>