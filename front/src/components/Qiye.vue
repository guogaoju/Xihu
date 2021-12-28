<template>
<div>
  <el-breadcrumb style="padding-top: 10px;" separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/Dao' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>客户管理</el-breadcrumb-item>
      <el-breadcrumb-item>企业信息管理</el-breadcrumb-item>
      <el-breadcrumb-item>企业信息</el-breadcrumb-item>
    </el-breadcrumb>
  <!-- 客户管理/企业信息管理/企业信息 -->
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
                &(!filterRegister_name || data.register_name.toLowerCase().includes(filterRegister_name.toString().toLowerCase()))
                &(!filterIntroduction || data.introduction.toLowerCase().includes(filterIntroduction.toString().toLowerCase()))
                &(!filterCredit_code || data.credit_code.toLowerCase().includes(filterCredit_code.toString().toLowerCase()))
                &(!filterJuridical_person || data.juridical_person.toLowerCase().includes(filterJuridical_person.toString().toLowerCase()))
                &(!filterRegister_money || data.register_money.toLowerCase().includes(filterRegister_money.toString().toLowerCase()))
                &(!filterHexinqiye || data.hexinqiye.toLowerCase().includes(filterHexinqiye.toString().toLowerCase()))
                &(!filterBusiness_term || data.business_term.toLowerCase().includes(filterBusiness_term.toString().toLowerCase()))
                &(!filterPost_code || data.post_code.toLowerCase().includes(filterPost_code.toString().toLowerCase()))
                &(!filterAddress || data.address.toLowerCase().includes(filterAddress.toString().toLowerCase()))
                &(!filterEmail || data.email.toLowerCase().includes(filterEmail.toString().toLowerCase()))
                &(!filterAccount_type || data.account_type.toLowerCase().includes(filterAccount_type.toString().toLowerCase()))
                &(!filterCreate_time || data.create_time.toLowerCase().includes(filterCreate_time.toString().toLowerCase()))
                &(!filterBusiness_scope || data.business_scope.toLowerCase().includes(filterBusiness_scope.toString().toLowerCase()))
                &(!filterPhone || data.phone.toLowerCase().includes(filterPhone.toString().toLowerCase()))
                &(!filterFax || data.fax.toLowerCase().includes(filterFax.toString().toLowerCase()))
                &(!filterBank_name || data.bank_name.toLowerCase().includes(filterBank_name.toString().toLowerCase()))
                &(!filterBank_card || data.bank_card.toLowerCase().includes(filterBank_card.toString().toLowerCase()))
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
              <el-table-column min-width='120' align="center">
                      <!-- eslint-disable-next-line -->
                      <template slot="header" slot-scope="scope">
                          <el-popover placement="bottom" trigger="click">
                              <el-input v-model="filterRegister_name"> </el-input>
                              <div slot="reference"> <label> 注册名称 </label> <i class='el-icon-arrow-down'> </i> </div>
                          </el-popover>
                      </template>
                      <template slot-scope="scope">
                          <div>
                              {{scope.row.register_name}}
                          </div>
                      </template>
              </el-table-column>
              <el-table-column min-width='100' align="center">
                      <!-- eslint-disable-next-line -->
                      <template slot="header" slot-scope="scope">
                          <el-popover placement="bottom" trigger="click">
                              <el-input v-model="filterIntroduction"> </el-input>
                              <div slot="reference"> <label> 企业简称 </label> <i class='el-icon-arrow-down'> </i> </div>
                          </el-popover>
                      </template>
                      <template slot-scope="scope">
                          <div>
                              {{scope.row.introduction}}
                          </div>
                      </template>
              </el-table-column>
              <el-table-column min-width='150' align="center">
                      <!-- eslint-disable-next-line -->
                      <template slot="header" slot-scope="scope">
                          <el-popover placement="bottom" trigger="click">
                              <el-input v-model="filterCredit_code"> </el-input>
                              <div slot="reference"> <label> 社会信用代码 </label> <i class='el-icon-arrow-down'> </i> </div>
                          </el-popover>
                      </template>
                      <template slot-scope="scope">
                          <div>
                              {{scope.row.credit_code}}
                          </div>
                      </template>
              </el-table-column>
              <el-table-column prop="trade" label="行业" width="100" align="center" :filters="[{text:'建筑业', value:'建筑业'},{text:'制造业', value:'制造业'},{text:'其他', value:'其他'}]" :filter-method="filterTrade">
              </el-table-column>
              <el-table-column min-width='100' align="center">
                      <!-- eslint-disable-next-line -->
                      <template slot="header" slot-scope="scope">
                          <el-popover placement="bottom" trigger="click">
                              <el-input v-model="filterJuridical_person"> </el-input>
                              <div slot="reference"> <label> 法人代表 </label> <i class='el-icon-arrow-down'> </i> </div>
                          </el-popover>
                      </template>
                      <template slot-scope="scope">
                          <div>
                              {{scope.row.juridical_person}}
                          </div>
                      </template>
              </el-table-column>
              <el-table-column min-width='100' align="center">
                      <!-- eslint-disable-next-line -->
                      <template slot="header" slot-scope="scope">
                          <el-popover placement="bottom" trigger="click">
                              <el-input v-model="filterRegister_money"> </el-input>
                              <div slot="reference"> <label> 注册资本 </label> <i class='el-icon-arrow-down'> </i> </div>
                          </el-popover>
                      </template>
                      <template slot-scope="scope">
                          <div>
                              {{scope.row.register_money}}
                          </div>
                      </template>
              </el-table-column>
              <el-table-column min-width='150' align="center">
                      <!-- eslint-disable-next-line -->
                      <template slot="header" slot-scope="scope">
                          <el-popover placement="bottom" trigger="click">
                              <el-input v-model="filterHexinqiye"> </el-input>
                              <div slot="reference"> <label> 核心企业 </label> <i class='el-icon-arrow-down'> </i> </div>
                          </el-popover>
                      </template>
                      <template slot-scope="scope">
                          <div>
                              {{scope.row.hexinqiye}}
                          </div>
                      </template>
              </el-table-column>
              <el-table-column min-width='100' align="center">
                      <!-- eslint-disable-next-line -->
                      <template slot="header" slot-scope="scope">
                          <el-popover placement="bottom" trigger="click">
                              <el-input v-model="filterBusiness_term"> </el-input>
                              <div slot="reference"> <label> 营业期限 </label> <i class='el-icon-arrow-down'> </i> </div>
                          </el-popover>
                      </template>
                      <template slot-scope="scope">
                          <div>
                              {{scope.row.business_term}}
                          </div>
                      </template>
              </el-table-column>
              <el-table-column min-width='80' align="center">
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
              <el-table-column min-width='250' align="center">
                      <!-- eslint-disable-next-line -->
                      <template slot="header" slot-scope="scope">
                          <el-popover placement="bottom" trigger="click">
                              <el-input v-model="filterAddress"> </el-input>
                              <div slot="reference"> <label> 营业地址 </label> <i class='el-icon-arrow-down'> </i> </div>
                          </el-popover>
                      </template>
                      <template slot-scope="scope">
                          <div>
                              {{scope.row.address}}
                          </div>
                      </template>
              </el-table-column>
              <el-table-column min-width='150' align="center">
                      <!-- eslint-disable-next-line -->
                      <template slot="header" slot-scope="scope">
                          <el-popover placement="bottom" trigger="click">
                              <el-input v-model="filterEmail"> </el-input>
                              <div slot="reference"> <label> 邮箱 </label> <i class='el-icon-arrow-down'> </i> </div>
                          </el-popover>
                      </template>
                      <template slot-scope="scope">
                          <div>
                              {{scope.row.email}}
                          </div>
                      </template>
              </el-table-column>
              <el-table-column min-width='100' align="center">
                      <!-- eslint-disable-next-line -->
                      <template slot="header" slot-scope="scope">
                          <el-popover placement="bottom" trigger="click">
                              <el-input v-model="filterAccount_type"> </el-input>
                              <div slot="reference"> <label> 账户类型 </label> <i class='el-icon-arrow-down'> </i> </div>
                          </el-popover>
                      </template>
                      <template slot-scope="scope">
                          <div>
                              {{scope.row.account_type}}
                          </div>
                      </template>
              </el-table-column>
              <el-table-column min-width='150' align="center">
                      <!-- eslint-disable-next-line -->
                      <template slot="header" slot-scope="scope">
                          <el-popover placement="bottom" trigger="click">
                              <el-input v-model="filterCreate_time"> </el-input>
                              <div slot="reference"> <label> 成立日期 </label> <i class='el-icon-arrow-down'> </i> </div>
                          </el-popover>
                      </template>
                      <template slot-scope="scope">
                          <div>
                              {{scope.row.create_time}}
                          </div>
                      </template>
              </el-table-column>
              <el-table-column min-width='150' align="center">
                      <!-- eslint-disable-next-line -->
                      <template slot="header" slot-scope="scope">
                          <el-popover placement="bottom" trigger="click">
                              <el-input v-model="filterBusiness_scope"> </el-input>
                              <div slot="reference"> <label> 营业范围 </label> <i class='el-icon-arrow-down'> </i> </div>
                          </el-popover>
                      </template>
                      <template slot-scope="scope">
                          <div>
                              {{scope.row.business_scope}}
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
                              <el-input v-model="filterBank_name"> </el-input>
                              <div slot="reference"> <label> 所属银行 </label> <i class='el-icon-arrow-down'> </i> </div>
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
              <!-- :filters="[{text:'通过', value:'通过'},{text:'拒绝', value:'拒绝'},{text:'审核中', value:'审核中'}]" :filter-method="filterCurrent" -->
              <el-table-column prop="nodeName" label="当前流程" width="100" align="center" :formatter="getfor">
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
                  &(!filterRegister_name || data.register_name.toLowerCase().includes(filterRegister_name.toString().toLowerCase()))
                  &(!filterIntroduction || data.introduction.toLowerCase().includes(filterIntroduction.toString().toLowerCase()))
                  &(!filterCredit_code || data.credit_code.toLowerCase().includes(filterCredit_code.toString().toLowerCase()))
                  &(!filterJuridical_person || data.juridical_person.toLowerCase().includes(filterJuridical_person.toString().toLowerCase()))
                  &(!filterRegister_money || data.register_money.toLowerCase().includes(filterRegister_money.toString().toLowerCase()))
                  &(!filterHexinqiye || data.hexinqiye.toLowerCase().includes(filterHexinqiye.toString().toLowerCase()))
                  &(!filterBusiness_term || data.business_term.toLowerCase().includes(filterBusiness_term.toString().toLowerCase()))
                  &(!filterPost_code || data.post_code.toLowerCase().includes(filterPost_code.toString().toLowerCase()))
                  &(!filterAddress || data.address.toLowerCase().includes(filterAddress.toString().toLowerCase()))
                  &(!filterEmail || data.email.toLowerCase().includes(filterEmail.toString().toLowerCase()))
                  &(!filterAccount_type || data.account_type.toLowerCase().includes(filterAccount_type.toString().toLowerCase()))
                  &(!filterCreate_time || data.create_time.toLowerCase().includes(filterCreate_time.toString().toLowerCase()))
                  &(!filterBusiness_scope || data.business_scope.toLowerCase().includes(filterBusiness_scope.toString().toLowerCase()))
                  &(!filterPhone || data.phone.toLowerCase().includes(filterPhone.toString().toLowerCase()))
                  &(!filterFax || data.fax.toLowerCase().includes(filterFax.toString().toLowerCase()))
                  &(!filterBank_name || data.bank_name.toLowerCase().includes(filterBank_name.toString().toLowerCase()))
                  &(!filterBank_card || data.bank_card.toLowerCase().includes(filterBank_card.toString().toLowerCase()))
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
                <el-table-column min-width='120' align="center">
                        <!-- eslint-disable-next-line -->
                        <template slot="header" slot-scope="scope">
                            <el-popover placement="bottom" trigger="click">
                                <el-input v-model="filterRegister_name"> </el-input>
                                <div slot="reference"> <label> 注册名称 </label> <i class='el-icon-arrow-down'> </i> </div>
                            </el-popover>
                        </template>
                        <template slot-scope="scope">
                            <div>
                                {{scope.row.register_name}}
                            </div>
                        </template>
                </el-table-column>
                <el-table-column min-width='100' align="center">
                        <!-- eslint-disable-next-line -->
                        <template slot="header" slot-scope="scope">
                            <el-popover placement="bottom" trigger="click">
                                <el-input v-model="filterIntroduction"> </el-input>
                                <div slot="reference"> <label> 企业简称 </label> <i class='el-icon-arrow-down'> </i> </div>
                            </el-popover>
                        </template>
                        <template slot-scope="scope">
                            <div>
                                {{scope.row.introduction}}
                            </div>
                        </template>
                </el-table-column>
                <el-table-column min-width='150' align="center">
                        <!-- eslint-disable-next-line -->
                        <template slot="header" slot-scope="scope">
                            <el-popover placement="bottom" trigger="click">
                                <el-input v-model="filterCredit_code"> </el-input>
                                <div slot="reference"> <label> 社会信用代码 </label> <i class='el-icon-arrow-down'> </i> </div>
                            </el-popover>
                        </template>
                        <template slot-scope="scope">
                            <div>
                                {{scope.row.credit_code}}
                            </div>
                        </template>
                </el-table-column>
                <el-table-column prop="trade" label="行业" width="100" align="center" :filters="[{text:'建筑业', value:'建筑业'},{text:'制造业', value:'制造业'},{text:'其他', value:'其他'}]" :filter-method="filterTrade">
                </el-table-column>
                <el-table-column min-width='100' align="center">
                        <!-- eslint-disable-next-line -->
                        <template slot="header" slot-scope="scope">
                            <el-popover placement="bottom" trigger="click">
                                <el-input v-model="filterJuridical_person"> </el-input>
                                <div slot="reference"> <label> 法人代表 </label> <i class='el-icon-arrow-down'> </i> </div>
                            </el-popover>
                        </template>
                        <template slot-scope="scope">
                            <div>
                                {{scope.row.juridical_person}}
                            </div>
                        </template>
                </el-table-column>
                <el-table-column min-width='100' align="center">
                        <!-- eslint-disable-next-line -->
                        <template slot="header" slot-scope="scope">
                            <el-popover placement="bottom" trigger="click">
                                <el-input v-model="filterRegister_money"> </el-input>
                                <div slot="reference"> <label> 注册资本 </label> <i class='el-icon-arrow-down'> </i> </div>
                            </el-popover>
                        </template>
                        <template slot-scope="scope">
                            <div>
                                {{scope.row.register_money}}
                            </div>
                        </template>
                </el-table-column>
                <el-table-column min-width='150' align="center">
                        <!-- eslint-disable-next-line -->
                        <template slot="header" slot-scope="scope">
                            <el-popover placement="bottom" trigger="click">
                                <el-input v-model="filterHexinqiye"> </el-input>
                                <div slot="reference"> <label> 核心企业 </label> <i class='el-icon-arrow-down'> </i> </div>
                            </el-popover>
                        </template>
                        <template slot-scope="scope">
                            <div>
                                {{scope.row.hexinqiye}}
                            </div>
                        </template>
                </el-table-column>
                <el-table-column min-width='100' align="center">
                        <!-- eslint-disable-next-line -->
                        <template slot="header" slot-scope="scope">
                            <el-popover placement="bottom" trigger="click">
                                <el-input v-model="filterBusiness_term"> </el-input>
                                <div slot="reference"> <label> 营业期限 </label> <i class='el-icon-arrow-down'> </i> </div>
                            </el-popover>
                        </template>
                        <template slot-scope="scope">
                            <div>
                                {{scope.row.business_term}}
                            </div>
                        </template>
                </el-table-column>
                <el-table-column min-width='80' align="center">
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
                <el-table-column min-width='250' align="center">
                        <!-- eslint-disable-next-line -->
                        <template slot="header" slot-scope="scope">
                            <el-popover placement="bottom" trigger="click">
                                <el-input v-model="filterAddress"> </el-input>
                                <div slot="reference"> <label> 营业地址 </label> <i class='el-icon-arrow-down'> </i> </div>
                            </el-popover>
                        </template>
                        <template slot-scope="scope">
                            <div>
                                {{scope.row.address}}
                            </div>
                        </template>
                </el-table-column>
                <el-table-column min-width='150' align="center">
                        <!-- eslint-disable-next-line -->
                        <template slot="header" slot-scope="scope">
                            <el-popover placement="bottom" trigger="click">
                                <el-input v-model="filterEmail"> </el-input>
                                <div slot="reference"> <label> 邮箱 </label> <i class='el-icon-arrow-down'> </i> </div>
                            </el-popover>
                        </template>
                        <template slot-scope="scope">
                            <div>
                                {{scope.row.email}}
                            </div>
                        </template>
                </el-table-column>
                <el-table-column min-width='100' align="center">
                        <!-- eslint-disable-next-line -->
                        <template slot="header" slot-scope="scope">
                            <el-popover placement="bottom" trigger="click">
                                <el-input v-model="filterAccount_type"> </el-input>
                                <div slot="reference"> <label> 账户类型 </label> <i class='el-icon-arrow-down'> </i> </div>
                            </el-popover>
                        </template>
                        <template slot-scope="scope">
                            <div>
                                {{scope.row.account_type}}
                            </div>
                        </template>
                </el-table-column>
                <el-table-column min-width='150' align="center">
                        <!-- eslint-disable-next-line -->
                        <template slot="header" slot-scope="scope">
                            <el-popover placement="bottom" trigger="click">
                                <el-input v-model="filterCreate_time"> </el-input>
                                <div slot="reference"> <label> 成立日期 </label> <i class='el-icon-arrow-down'> </i> </div>
                            </el-popover>
                        </template>
                        <template slot-scope="scope">
                            <div>
                                {{scope.row.create_time}}
                            </div>
                        </template>
                </el-table-column>
                <el-table-column min-width='150' align="center">
                        <!-- eslint-disable-next-line -->
                        <template slot="header" slot-scope="scope">
                            <el-popover placement="bottom" trigger="click">
                                <el-input v-model="filterBusiness_scope"> </el-input>
                                <div slot="reference"> <label> 营业范围 </label> <i class='el-icon-arrow-down'> </i> </div>
                            </el-popover>
                        </template>
                        <template slot-scope="scope">
                            <div>
                                {{scope.row.business_scope}}
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
                                <el-input v-model="filterBank_name"> </el-input>
                                <div slot="reference"> <label> 所属银行 </label> <i class='el-icon-arrow-down'> </i> </div>
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
                <!-- :filters="[{text:'通过', value:'通过'},{text:'拒绝', value:'拒绝'},{text:'审核中', value:'审核中'}]" :filter-method="filterCurrent" -->
                <el-table-column prop="nodeName" label="当前流程" width="100" align="center" :formatter="getfor">
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

  <!-- 添加弹出层 -->
  <el-dialog id="finance" :title="titleMap[dialogTitle]" :visible.sync="dialogFormVisible" @close='closeDialog'>
      <el-form
        :model="Qiye"
        status-icon :rules="rules"
        ref="Qiye"
        label-width="120px"
        class="demo-ruleForm"
      >
      <el-row>
        <el-col :span="18"> 
            <el-row>
        <el-col :span="12">
          <el-form-item label="注册名称" prop="register_name" :label-width="formLabelWidth">
            <el-input :disabled="validated" v-model="Qiye.register_name"></el-input>
          </el-form-item>
        </el-col>
         <el-col :span="12">
          <el-form-item label="企业简称" prop="introduction" :label-width="formLabelWidth">
            <el-input :disabled="validated" v-model="Qiye.introduction"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="行业" prop="trade" :label-width="formLabelWidth">
            <el-select :disabled="validated" v-model="Qiye.trade" clearable placeholder="请选择" >
              <el-option label="制造业" value="制造业"></el-option>
              <el-option label="建筑业" value="建筑业"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
         <el-col :span="12">
          <el-form-item label="社会信用代码" prop="credit_code" :label-width="formLabelWidth">
            <el-input :disabled="validated" v-model="Qiye.credit_code"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
        <el-row>
        <el-col :span="12">
          <el-form-item label="法人代表" prop="juridical_person" :label-width="formLabelWidth">
            <el-input :disabled="validated" v-model="Qiye.juridical_person"></el-input>
          </el-form-item>
        </el-col>
         <el-col :span="12">
           <el-form-item label="注册资本" prop="register_money" :label-width="formLabelWidth">
            <el-input :disabled="validated" v-model="Qiye.register_money" @blur="inputMoney($event,'register_money')"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
          <el-col :span="12">
           <el-form-item label="核心企业" prop="hexinqiye" :label-width="formLabelWidth">
              <el-select :disabled="validated" filterable v-model="Qiye.hexinqiye" placeholder="请选择核心企业">
                <el-option v-for="item in hexin" :key="item.id" :label="item.register_name" :value="item.register_name"></el-option>
              </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
           <el-form-item label="地址" prop="address" :label-width="formLabelWidth">
            <el-input :disabled="validated" v-model="Qiye.address"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="营业期限" prop="business_term" :label-width="formLabelWidth">
            <el-input :disabled="validated" v-model="Qiye.business_term"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
           <el-form-item label="营业范围" prop="business_scope" :label-width="formLabelWidth">
            <el-input :disabled="validated" v-model="Qiye.business_scope"></el-input>
        </el-form-item> 
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="邮编" prop="post_code" :label-width="formLabelWidth">
            <el-input :disabled="validated" v-model="Qiye.post_code"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="电话" prop="phone" :label-width="formLabelWidth">
            <el-input :disabled="validated" v-model="Qiye.phone"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="邮箱" prop="email" :label-width="formLabelWidth">
            <el-input :disabled="validated" v-model="Qiye.email"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="传真" prop="fax" :label-width="formLabelWidth">
            <el-input :disabled="validated" v-model="Qiye.fax"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="账户类型" prop="account_type" :label-width="formLabelWidth">
            <el-select :disabled="validated" v-model="Qiye.account_type" clearable placeholder="请选择" >
              <el-option label="基本账户" value="基本账户"></el-option>
              <el-option label="一般结业户" value="一般结业户"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="所属银行" prop="bank_name" :label-width="formLabelWidth">
            <el-input :disabled="validated" v-model="Qiye.bank_name"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="银行账号" prop="bank_card" :label-width="formLabelWidth">
            <el-input :disabled="validated" v-model="Qiye.bank_card"></el-input>
          </el-form-item>
        </el-col>
         <el-col :span="12">
          <el-form-item label="成立日期" prop="create_time" :label-width="formLabelWidth">
            <el-date-picker :disabled="validated" v-model="Qiye.create_time" type="date" placeholder="选择日期"></el-date-picker>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="当前流程" prop="nodeName" :label-width="formLabelWidth">
            <el-input :disabled="liucheng" v-model="Qiye.nodeName"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="11"><el-form-item></el-form-item></el-col>   
        <el-col :span="13">
        <el-form-item>
          <el-button type="primary" :disabled="annui" v-show="isshow" ref="buttonname" @click="submit('Qiye')">{{buttonText}}</el-button>
          <!-- <el-button type="primary" @click="addsubmit()">隐藏</el-button> -->
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
import moment from 'moment'
import HexinService from "../services/HexinService";
import authservice from "../services/auth.service"
import QiyeService from "../services/QiyeService";
import QiyeStateService from "../services/QiyeStateService";
import StatelogService from "../services/StatelogService";
import CodeService from "../services/CodeService";
import {getInputValue} from "../util";
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
    inputMoney(el,name) {
         this.Qiye[name] = getInputValue(el);
     },
    selectCode(){
        let date = new Date();
        let year = date.getFullYear(); // 年
        let month = (date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1) // 月
        let day = date.getDate(); // 日
        let time=`${year}${month}${day}`;
        CodeService.findByLog("企业信息").then(response=>{
            this.code=response.data.code_name+"-"+time+"-"+response.data.sum.toString().padStart(5,'0')
        })
    },
    selectHexin(){
      HexinService.getAll().then( response=>{
        this.hexin=response.data
      })
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
           QiyeService.get(this.pa)
         .then(response => {
                this.isshow=false;
                this.qiyeid=this.pa
                this.nextState=response.data.qiyeState.nextStateid
                this.oldStateid=response.data.qiyeState.id
                this.Qiye=response.data;
                this.Qiye.nodeName = response.data.qiyeState.nodeName;
                this.validated=true;
                this.buttonText = response.data.qiyeState.nodebutton;
               
              })
              .catch(e => {
                console.log(e);
              });
          this.selectStateAndLogs();
       },

      async tableonload(){
        QiyeService.getAll()
        .then(response => {
          this.tableData = response.data;
          this.selectdept();
          this.selectCode();
        })
        .catch(e => {
          console.log(e);
        });
      },
      addStatelog(){
         var data = {
              userId:this.currentUser.id,
              qiyeId: this.qiyeid,
              oldstateid: this.oldStateid,
              newstateid:this.nextState,
              operateId:4
              }
              StatelogService.create(data).then(response => {
        })
        .catch(e => {
          console.log(e);
        });
      },
      selectState(){
         QiyeStateService.getAll()
        .then(response => {
          this.activities=response.data
        })
        .catch(e => {
        });
      },
      selectStateAndLogs(){
        QiyeStateService.getAll()
        .then(response => {
          this.activities=response.data
          this.selectlogs();
        })
        .catch(e => {
        });
      },
      getfor(row,column){
            return row.qiyeState.nodeName;
          },
       openFrom(){
           this.Qiye={},
          this.dialogFormVisible=true
          this.selectHexin();
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
            register_name: this.Qiye.register_name,
            introduction:this.Qiye.introduction,
            credit_code:this.Qiye.credit_code,
            trade: this.Qiye.trade,
            address: this.Qiye.address,
            hexinqiye:this.Qiye.hexinqiye,
            juridical_person:this.Qiye.juridical_person,
            register_money:this.Qiye.register_money,
            create_time:this.Qiye.create_time,
            business_term:this.Qiye.business_term,
            business_scope:this.Qiye.business_scope,
            post_code:this.Qiye.post_code,
            phone:this.Qiye.phone,
            email:this.Qiye.email,
            fax:this.Qiye.fax,
            account_type:this.Qiye.account_type,
            bank_name:this.Qiye.bank_name,
            bank_card:this.Qiye.bank_card,
          }
        QiyeService.create(data)
        .then(response => {
          this.tableonload();
           var data = {
              userId:this.currentUser.id,
              qiyeId: response.data.id,
              oldstateid: 1,
              newstateid:response.data.qiyeStateId,
              operateId:1,
              }
              StatelogService.create(data).then(response => {
              }).catch(e => {
                console.log(e);
              });
        })
        .catch(e => {
          console.log(e);
        });
       },
       submit(Qiye){
           this.$refs[Qiye].validate((valid) => {
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
        let qiyeId=this.pa
          StatelogService.findByLog(qiyeId).then(response => {
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
                                    QiyeService.get(this.pa)
                                    .then(response => {
                                          this.Qiye=response.data;
                                          this.Qiye.nodeName = response.data.qiyeState.nodeName;
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
          this.selectHexin();
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
                                    this.annui=false;
                                    this.validated=false;
                                    this.liucheng=true,
                                    this.dialogTitle = "updataData";
                                    this.pa=this.tableData[index].id;
                                    this.selectStateAndLogs();
                                    QiyeService.get(this.pa)
                                    .then(response => {
                                          this.Qiye=response.data;
                                          this.Qiye.nodeName = response.data.qiyeState.nodeName;
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
       updateState(index,row){
        var data = {
           qiyeStateId:this.nextState
          }
          QiyeService.update(this.pa,data)
        .then(response => {
          this.tableonload();
        })
        .catch(e => {
          console.log(e);
        });
       },
       updateservice(){
            this.dialogFormVisible=false;
          var data = {
            id:this.Qiye.id,
        register_name: this.Qiye.register_name,
        introduction:this.Qiye.introduction,
         credit_code:this.Qiye.credit_code,
        trade: this.Qiye.trade,
        address: this.Qiye.address,
        hexinqiye:this.Qiye.hexinqiye,
        juridical_person:this.Qiye.juridical_person,
        register_money:this.Qiye.register_money,
        create_time:this.Qiye.create_time,
        business_term:this.Qiye.business_term,
        business_scope:this.Qiye.business_scope,
        post_code:this.Qiye.post_code,
        phone:this.Qiye.phone,
        email:this.Qiye.email,
        fax:this.Qiye.fax,
        account_type:this.Qiye.account_type,
        bank_name:this.Qiye.bank_name,
        bank_card:this.Qiye.bank_card,
        nodeName:this.Qiye.nodeName
        }
          QiyeService.update(data.id,data)
        .then(response => {
          this.tableonload();
        })
        .catch(e => {
          console.log(e);
        });
       },
       delClickconfirm(index,row){
              let pa=this.tableData[index].id;
              QiyeService.delete(pa)
              .then(response => {
                 var data = {
              userId:this.currentUser.id,
              qiyeId: pa,
              oldstateid: 1,
              newstateid:1,
              operateId:3,
              }
              StatelogService.create(data).then(response => {
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
      filterTrade(value, row){
            return row.trade === value;
        },
      filterCurrent(value, row){
            return row.current_process === value;
        }
    },

    data() {
      return {
        code:"",
        hexin:[],
        tableData1: [],
        activeName: 'first',
        deletedept:[1,3,8],
        updatedept:[1,3,8],
        kandept:[1,3,8],
        isshow1:false,
        adddept:[1,3,8],
        deptId:[],
        pa:'',
        annui:'',
        isshow:true,
        validated:false,
        liucheng:false,
        activities: [],
        titleMap: {
        addData: "添加数据",
        updataData: "修改数据",
        kanData: "查看数据",
        examine: "企业信息",
        },
        dialogTitle:"",
        TravelType:1,
        formLabelWidth: "120px",
         rules:{
          register_name: [
            { required: true, message: '请输入注册名称', trigger: 'blur' },
          ],
          credit_code: [
            { required: true, message: '请输入社会信用代码', trigger: 'change' }
          ],
          trade: [
            { required: true, message: '请选择行业', trigger: 'change' }
          ],
          address: [
            { required: true, message: '请输入地址', trigger: 'change' }
          ],
          hexinqiye: [
            { required: true, message: '请选择核心企业', trigger: 'change' }
          ],
          juridical_person: [
            { required: true, message: '请输入法定代表人', trigger: 'change' }
          ],
          register_money: [
            { required: true, message: '请输入注册资本', trigger: 'blur' }
          ],
          create_time: [
            { required: true, message: '请输入选择时间', trigger: 'change' }
          ],
        },
        buttonText: '确定',
        qiyeid:'',
        oldstateid:'',
        oldStateid:'',
        nextState:'',
        tableData:[],
        Qiye:{},
        filterCode:'',
        filterRegister_name:'',
        filterIntroduction:'',
        filterCredit_code:'',
        filterJuridical_person:'',
        filterRegister_money:'',
        filterHexinqiye:'',
        filterBusiness_term:'',
        filterPost_code:'',
        filterAddress:'',
        filterEmail:'',
        filterAccount_type:'',
        filterCreate_time:'',
        filterBusiness_scope:'',
        filterPhone:'',
        filterFax:'',
        filterBank_name:'',
        filterBank_card:'',
        dialogFormVisible: false,
      }
    }
  }
</script>