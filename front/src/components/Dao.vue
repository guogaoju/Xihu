<template>
    <div>
        <div style="margin-top:5px height:100%">
            <el-row :gutter="12">
                <el-col :xs="4" :sm="4" :md="4" :lg="4">
                    <!-- <div style="background-color: #0f1126;">
                        <img src="https://datav.oss-cn-hangzhou.aliyuncs.com/uploads/images/ed6ae7abf84d74402a8df1336be91ecd.png" width="200" height="60" alt="">
                    </div> -->
                    <div>
                        <el-menu
                        style="height:1000px;"
                        default-active="0"
                        class="el-menu-vertical-demo"
                        background-color="#0f1126"
                        text-color="#fff"
                        active-text-color="#ffd04b"
                        @select="handleSelect">
                        <el-submenu index="0">
                            <template slot="title">
                            <i class="el-icon-user-solid"></i>
                            <span>核心企业管理</span>
                            </template>
                            <el-menu-item index="0-1">核心企业信息</el-menu-item>
                        </el-submenu>
                        <el-submenu index="1">
                            <template slot="title">
                            <i class="el-icon-user-solid"></i>
                            <span>客户管理</span>
                            </template>
                            <el-submenu index="1-1">
                            <template slot="title">企业信息管理</template>
                            <el-menu-item index="1-1-1">企业信息</el-menu-item>
                            <el-menu-item index="1-1-2">企业评级</el-menu-item>
                            <el-menu-item index="1-1-3">企业财务数据</el-menu-item>
                            <el-menu-item index="1-1-4">企业访问记录</el-menu-item>
                            </el-submenu>
                            <el-submenu index="1-2">
                            <template slot="title">供应商信息管理</template>
                            <el-menu-item index="1-2-1">供应商资料</el-menu-item>
                            <el-menu-item index="1-2-2">供应商评级管理</el-menu-item>
                            </el-submenu>
                        </el-submenu>
                        <el-submenu index="2">
                            <template slot="title">
                            <i class="el-icon-menu"></i>
                            <span>项目管理</span>
                            </template>
                            <el-menu-item index="2-3">建筑项目信息</el-menu-item>
                            <el-menu-item index="2-1">建筑项目管理</el-menu-item>
                            <el-menu-item index="2-2">制造业项目管理</el-menu-item>
                        </el-submenu>
                        <el-submenu index="3">
                            <template slot="title">
                            <i class="el-icon-document"></i>
                            <span>业务管理</span>
                            </template>
                            <el-menu-item index="3-1">采购管理</el-menu-item>
                            <el-menu-item index="3-2">付款管理</el-menu-item>
                            <el-menu-item index="3-3">还款管理</el-menu-item>
                            <!-- <el-menu-item index="3-4">建筑项目进度更新</el-menu-item> -->
                            <el-menu-item index="3-5">采购融资信息</el-menu-item>
                            <el-menu-item index="3-6">数据分析</el-menu-item>
                        </el-submenu>
                        <el-submenu index="4">
                            <template slot="title">
                            <i class="el-icon-s-order"></i>
                            <span>仓库管理</span>
                            </template>
                            <el-menu-item index="4-1">入库记录</el-menu-item>
                            <el-menu-item index="4-2">出库记录</el-menu-item>
                            <el-menu-item index="4-3">库存信息</el-menu-item>
                        </el-submenu>
                         <el-submenu index="5">
                            <template slot="title">
                            <i class="el-icon-warning"></i>
                            <span>风险预警管理</span>
                            </template>
                            <el-menu-item index="5-1">风险预警管理</el-menu-item>
                        </el-submenu>
                        <el-submenu index="6">
                            <template slot="title">
                            <i class="el-icon-s-data"></i>
                            <span>基本资料管理</span>
                            </template>
                            <el-submenu index="6-1">
                            <template slot="title">物料参数</template>
                            <el-menu-item index="6-1-1">地区资料</el-menu-item>
                            <el-menu-item index="6-1-2">物料资料</el-menu-item>
                            </el-submenu>
                            <el-submenu index="6-2">
                            <template slot="title">基本资料</template>
                            <el-menu-item index="6-2-1">计量单位</el-menu-item>
                            <el-menu-item index="6-2-2">物料分类</el-menu-item>
                            </el-submenu>
                        </el-submenu>
                        </el-menu>
                    </div>
                </el-col>
                <el-col :xs="20" :sm="20" :md="20" :lg="20">
                    <!-- <div>
                        <div style="border: 1px solid #A6A6A6; border-radius:6px; padding:5px; margin:2px; background-color: white">
                            <el-breadcrumb separator="/">
                                <el-breadcrumb-item v-for="item in breadcrumbItems" :key="item.id">{{item}}</el-breadcrumb-item>
                            </el-breadcrumb>
                        </div>
                    </div> -->
                    <div class="big1" style="width:100%;background-color: ; height:40px ; overflow: hidden">
            <span class="demonstration" style="float:left;padding-top:15px;color:black;margin-left:1%">
                供应链金融管理系统
            </span>
                <span class="navbar-nav ml-auto" style="float:right;margin-right:1%;padding-top:5px">
                    <li class="nav-item">
                        <a style="color:black" class="nav-link" href @click.prevent="logOut">
                            <font-awesome-icon icon="sign-out-alt" />退出登录
                        </a>
                    </li>
                </span>
                <span class="navbar-nav ml-auto" style="float:right;margin-right:1%;padding-top:5px">
                    <li  class="nav-item">
                        <router-link style="color:black" to="/profile" class="nav-link">
                            <font-awesome-icon icon="user" />
                            {{ currentUser.username }}
                        </router-link>
                    </li>
                </span>
                <span class="navbar-nav ml-auto" style="float:right;margin-right:1%;padding-top:5px">
                    <li  class="nav-item">
                        <router-link style="color:black" to="/Bumen" class="nav-link">
                            <font-awesome-icon icon="user" />
                            人员部门管理
                        </router-link>
                    </li>
                </span>
                    </div>
                    <div style="margin-top:10px;background-color: #f7f7f7">
                        <router-view></router-view>
                    </div>
                </el-col>
            </el-row>
        </div>
         
    </div>
</template>
<script type="text/ecmascript-6">
import AuthService from "../services/auth.service";
    export default {
        data(){
            return {
                // searchCriteria: '',
                // breadcrumbItems: ['导航一'],
            }
        },
computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
    showAdminBoard() {
      if (this.currentUser && this.currentUser.roles) {
        return this.currentUser.roles.includes('ROLE_ADMIN');
      }

      return false;
    },
    showModeratorBoard() {
      if (this.currentUser && this.currentUser.roles) {
        return this.currentUser.roles.includes('ROLE_MODERATOR');
      }

      return false;
    }
  },
        methods:{
            logOut() {
            this.$store.dispatch('auth/logout');
            this.$router.push('/');
            },
            handleIconClick(ev) {
                console.log(ev);
            },

            handleSelect(key, keyPath){
                switch(key){
                    case '1-1-1':
                        this.$router.push('/Qiye');
                        this.breadcrumbItems  = ['企业信息']
                        break;
                    case '1-1-2':
                        this.$router.push('/Qiye_pingji');
                        this.breadcrumbItems  = ['建筑企业评级']
                        break;
                    case '1-1-3':
                        this.$router.push('/Financialdata');
                        this.breadcrumbItems  = ['企业财务数据']
                        break;
                    case '1-1-4':
                        this.$router.push('/Fangwen');
                        this.breadcrumbItems  = ['企业访问记录']
                        break;
                    case '0-1':
                        this.$router.push('/Hexin');
                        this.breadcrumbItems  = ['核心企业信息']
                        break;
                    case '1-2-1':
                        this.$router.push('/CaiLiaogys')
                        this.breadcrumbItems  = ['材料供应商资料']
                        break;
                    case '1-2-2':
                        this.$router.push('/Pingji');
                        this.breadcrumbItems  = ['供应商评级管理']
                        break;
                    case '2-1':
                        this.$router.push('/JianzhuXiangmu');
                        this.breadcrumbItems  = ['建筑项目管理']
                        break;
                    case '2-2':
                        this.$router.push('/ZhizaoXiangmu');
                        this.breadcrumbItems  = ['制造业项目管理']
                        break;
                    case '2-3':
                        this.$router.push('/JinduUpdate');
                        this.breadcrumbItems  = ['建筑项目进度更新']
                        break;
                    case '3-1':
                        this.$router.push('/CaiGou');
                        this.breadcrumbItems  = ['采购管理']
                        break;
                    case '3-2':
                        this.$router.push('/Fukuan');
                        this.breadcrumbItems  = ['付款管理']
                        break;
                    case '3-3':
                        this.$router.push('/HuanKuan');
                        this.breadcrumbItems  = ['还款管理']
                        break;
                    case '3-6':
                         AuthService.get(this.currentUser.id).then((response)=>{
                            for(var i=0;i<response.data.roles.length;i++){
                            if(response.data.roles[i].name==="datav_admin"||response.data.roles[i].name==="admin"){
                        this.$router.push('/Daping');
                        this.breadcrumbItems  = ['数据分析']
                             }else{
                                 alert("您没有权限访问")
                             }
                             }
        
                            })
                       
                        break;
                    case '4-1':
                        this.$router.push('/Ruku');
                        this.breadcrumbItems  = ['入库记录']
                        break;
                    case '4-2':
                        this.$router.push('/Chuku');
                        this.breadcrumbItems  = ['出库记录']
                        break;
                    case '4-3':
                        this.$router.push('/Kucun');
                        this.breadcrumbItems  = ['库存信息']
                        break;
                    case '6-1-2':
                        this.$router.push('/Wuliao');
                        this.breadcrumbItems  = ['物料资料']
                        break;
                    // case '5-1':
                    //     this.$router.push('/HelloWorld');
                    //     this.breadcrumbItems  = ['风险预警管理']
                    //     break;
                    case '6-2-1':
                        this.$router.push('/Jiliangdanwei');
                        this.breadcrumbItems  = ['计量单位']
                        break;
                    case '6-2-2':
                        this.$router.push('/WuliaoType');
                        this.breadcrumbItems  = ['物料分类']
                        break;
                    default :
                        this.$router.push('/Erro')
                        this.breadcrumbItems  = ['']
                }
            },

        },
    }
</script>
</style>


