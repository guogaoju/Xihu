<template>
    <div>
      <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/Dao' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item></el-breadcrumb-item>
    </el-breadcrumb>
    <el-row>
        <el-col :span="8">
            <el-card shadow="hover" class="mgb20" style="height:252px;">
                   <div slot="header" class="clearfix">
                        <span>待办事项</span>
                        <!-- <el-button style="float: right; padding: 3px 0" type="text">添加</el-button> -->
                    </div>
                    <el-table
                    @row-click="handdle"
                    :data="tableData"
                    max-height="150"
                    style="width: 100%">
                        <el-table-column
                            prop="name"
                            label="待办所在页面"
                            width="120"
                            align="center">
                        </el-table-column>
                        <el-table-column
                            prop="sum"
                            label="待办项目数量"
                            width="120"
                            align="center">
                        </el-table-column>
                        <el-table-column width="150">
                            <template>
                                <i class="el-icon-right"></i>
                                <i class="el-icon-s-promotion"></i>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-card>
                <el-card class="mgb20" shadow="hover" style="height:192px;">
                    <div slot="header" class="clearfix">
                        <span>加权平均α比例</span>
                    </div>加权平均α比例
                    <el-progress :percentage="59.7" color="#42b983"></el-progress>
                </el-card>
                <el-card class="mgb20" shadow="hover">
                    <div class="schart-box">
                    <div class="content-title"></div>
                        <schart class="schart" canvasId="pie" :options="options3"></schart>
                    </div>
                </el-card>
        </el-col>
        <el-col :span="16">
           <el-row :gutter="20" class="mgb20">
                    <el-col :span="6">
                        <el-card shadow="hover" :body-style="{padding: '0px'}">
                            <div class="grid-content grid-con-1">
                                <i class="el-icon-lx-people grid-con-icon"></i>
                                <div class="grid-cont-right">
                                    <div class="grid-num">290,638,300</div>
                                    <div style="font-size:18px">营业收入</div>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="6">
                        <el-card shadow="hover" :body-style="{padding: '0px'}">
                            <div class="grid-content grid-con-2">
                                <i class="el-icon-lx-notice grid-con-icon"></i>
                                <div class="grid-cont-right">
                                    <div class="grid-num">231,122,700</div>
                                    <div style="font-size:18px">贷款余额</div>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="6">
                        <el-card shadow="hover" :body-style="{padding: '0px'}">
                            <div class="grid-content grid-con-3">
                                <i class="el-icon-lx-goods grid-con-icon"></i>
                                <div class="grid-cont-right">
                                    <div class="grid-num">59,515,600</div>
                                    <div style="font-size:18px">累计回款</div>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="6">
                        <el-card shadow="hover" :body-style="{padding: '0px'}">
                            <div class="grid-content grid-con-3">
                                <i class="el-icon-lx-goods grid-con-icon"></i>
                                <div class="grid-cont-right">
                                    <div class="grid-num">18,635,300</div>
                                    <div style="font-size:18px">营业利润</div>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                </el-row>
                <el-row  class="mgb20">
                    <el-col :span="12">
                        <el-card  shadow="hover">
                            <schart ref="line" class="schart" canvasId="line" :options="options2"></schart>
                        </el-card>
                    </el-col>
                    <el-col :span="12">
                        <el-card  shadow="hover">
                            <schart ref="bar" class="schart" canvasId="bar" :options="options"></schart> 
                        </el-card>
                    </el-col>
                   
                </el-row>
                <el-row  class="mgb20">
                    <el-col :span="12">
                        <el-card  shadow="hover">
                            <schart ref="line" class="schart" canvasId="line1" :options="options4"></schart>
                        </el-card>
                    </el-col>
                    <el-col :span="12">
                        <el-card  shadow="hover">
                            <schart ref="line" class="schart" canvasId="line2" :options="options5"></schart>
                        </el-card> 
                    </el-col>
                </el-row>   
        </el-col>
    </el-row>
    </div>
</template>

<script>
import authservice from "../services/auth.service"
import DaibanService from "../services/DaibanService"
import Schart from 'vue-schart';
import bus from '../router/bus';
export default {
    name: 'dashboard',
    data() {
        return {
            tableData:[],
            result:[],
            name: localStorage.getItem('ms_username'),
            options3: {
                type: 'pie',
                title: {
                    text: '项目融资余额占比(%)'
                },
                
                legend: {
                    position: 'left',
                },
                bgColor: '#fbfbfb',
                labels: ['桃心大道', '文化中心', '塔田安置房', '唐村安置房一期', '邓埠安置房',],
                datasets: [
                    {
                        data: [40, 15, 20, 15, 10,]
                    }
                ]
            },
            data: [
                {
                    name: '2018/09/04',
                    value: 1083
                },
                {
                    name: '2018/09/05',
                    value: 941
                },
                {
                    name: '2018/09/06',
                    value: 1139
                },
                {
                    name: '2018/09/07',
                    value: 816
                },
                {
                    name: '2018/09/08',
                    value: 327
                },
                {
                    name: '2018/09/09',
                    value: 228
                },
                {
                    name: '2018/09/10',
                    value: 1065
                }
            ],
            options: {
                type: 'bar',
                title: {
                    text: '建筑项目融资余额(万)'
                },
                xRorate: 50,
                labels: ['2020/8', '2020/9', '2020/10', '2020/11', '2020/12','2021/1', '2021/2', '2021/3', '2021/4', '2021/5','2021/6', '2021/7'],
                datasets: [
                    {
                        label: '塔田安置房',
                        data: [3385, 3385, 3385, 3385,3385, 3385, 3385, 3385,3385, 3385, 3385, 3385,]
                    },
                    {
                        label: '桃心大道',
                        data: [6536, 6536, 6536, 6536, 10778,8060,8372,9997,12876,18362,17362,19342,]
                    },
                    {
                        label: '南昌县文化中心',
                        data: [1533, 1652, 1652, 1704, 1718,1718,1718,1718,1718,1718,1718,1718,1718,]
                    },
                ]
            },
            options2: {
                type: 'line',
                title: {
                    text: '建筑企业信用评分'
                },
                
                xRorate: 50,
                labels: ['2020/8', '2020/9', '2020/10', '2020/11', '2020/12','2021/1', '2021/2', '2021/3', '2021/4', '2021/5','2021/6', '2021/7'],
                datasets: [
                    {
                        label: '北京城建',
                        data: [86, 86, 89, 90, 90,92,92,91,92,92,91,90],
                    },
                    {
                        label: '江西诺金',
                        data: [88, 86, 88, 88, 86,88,90,90,92,92,92,93]
                    },
                    {
                        label: '江西圳发',
                        data: [85,88,85,85,86,85,86,85,88,89,86,85]
                    },
                ],
               
							// normal: {
							// 	label: {
							// 		show: false, //开启显示
							// 		position: 'top', //在上方显示
							// 		textStyle: { //数值样式
							// 			color: 'black',
							// 			fontSize: 16
							// 		}
								
                            //     }
                            // }
            },
            options4: {
                type: 'line',
                title: {
                    text: '建筑项目α风险值%'
                },
                xRorate: 50,
                labels: ['2020/8', '2020/9', '2020/10', '2020/11', '2020/12','2021/1', '2021/2', '2021/3', '2021/4', '2021/5','2021/6', '2021/7'],
                datasets: [
                    {
                        label: '桃心大道',
                        data: [46, 46, 39, 39, 62,60,60,56,58,56,57,57]
                    },
                    {
                        label: '塔田安置房',
                        data: [63, 62, 63, 62, 63, 62,63, 62,63, 62,63, 62,]
                    },
                    {
                        label: '文化中心',
                        data: [56, 56, 55, 53, 52,52,52,52,52,52,52,52]
                    },
                ]
            },
            options5: {
                type: 'line',
                title: {
                    text: '建筑企业β风险值%'
                },
                xRorate: 50,
                labels: ['2020/8', '2020/9', '2020/10', '2020/11', '2020/12','2021/1', '2021/2', '2021/3', '2021/4', '2021/5','2021/6', '2021/7'],
                datasets: [
                    {
                        label: '北京城建',
                        data: [24, 38, 39, 44, 46,30,22,24,23,24,25,24]
                    },
                    {
                        label: '江西诺金',
                        data: [33, 32, 32, 32, 32, 32,33, 32,31, 32,32, 34,]
                    },
                    {
                        label: '江西圳发',
                        data: [41, 40, 39, 38, 37,36,35,34,35,34,32,30]
                    },
                ]
            }
        }
    },
    components: {
        Schart
    },
    computed: {
        role() {
            return this.name === 'admin' ? '超级管理员' : '普通用户';
        },
         currentUser() {
      return this.$store.state.auth.user;
    }
    },
    created () {
          this.selectDaiban();
      },
    methods: {
        handdle(row, event, column) {
            if(row.name==="还款管理"){}
            switch(row.name){
                                   case "还款管理":
                                        this.$router.push({
                                        path:"/HuanKuan",
                                        query:{
                                            type:'second'
                                        }
                                    });      
                                       break;
                                    case "采购管理":
                                       this.$router.push({
                                        path:"/CaiGou",
                                        query:{
                                            type:'second'
                                        }
                                    });      
                                       break;
                                    case "企业评级":
                                      this.$router.push({
                                        path:"/Qiye_pingji",
                                        query:{
                                            type:'second'
                                        }
                                    });      
                                       break;
                                    case "供应商评级":
                                       this.$router.push({
                                        path:"/Pingji",
                                        query:{
                                            type:'second'
                                        }
                                    });      
                                       break;
                                    case "付款管理":
                                       this.$router.push({
                                        path:"/FuKuan",
                                        query:{
                                            type:'second'
                                        }
                                    });      
                                       break;      
                               }
       },
        // kanClick(index,row){     
        //             DaibanService.get(this.tableData[index].id)
        //             .then(response => {
        //                     this.$router.push(response.data.link);
        //                 }).catch(e => {
        //                     console.log(e);
        //                         });
        // },
         selectDaiban(){
            authservice.get(this.currentUser.id).then( async resUser =>{
                var arr=[0,0,0,0,0]
                for (var i = 0; i < resUser.data.depts.length; i++) {
                        await DaibanService.findByLog(resUser.data.depts[i].id).then(response=>{
                             for(var j = 0; j < response.data.length; j++){
                               switch(response.data[j].name){
                                   case "还款管理":
                                       arr[0]=arr[0]+response.data[j].sum;
                                       break;
                                    case "采购管理":
                                       arr[1]=arr[1]+response.data[j].sum;
                                       break;
                                    case "企业评级":
                                       arr[2]=arr[2]+response.data[j].sum;
                                       break;
                                    case "供应商评级":
                                       arr[3]=arr[3]+response.data[j].sum;
                                       break;
                                    case "付款管理":
                                       arr[4]=arr[4]+response.data[j].sum;
                                       break;      
                               }
                                // console.log(arr);
                             }    
                    })
                }               
                                this.tableData=[];
                                this.tableData.push({name:"还款管理",sum:arr[0]})
                                this.tableData.push({name:"采购管理",sum:arr[1]})
                                this.tableData.push({name:"企业评级",sum:arr[2]})
                                this.tableData.push({name:"供应商评级",sum:arr[3]})
                                this.tableData.push({name:"付款管理",sum:arr[4]})
                                // console.log(this.tableData)
             })    
        },
        changeDate() {
            const now = new Date().getTime();
            this.data.forEach((item, index) => {
                const date = new Date(now - (6 - index) * 86400000);
                item.name = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
            });
        }
    }
};
</script>


<style scoped>
.el-row {
    margin-bottom: 20px;
}

.grid-content {
    display: flex;
    align-items: center;
    height: 100px;
}

.grid-cont-right {
    flex: 1;
    text-align: center;
    font-size: 14px;
    color: #999;
}

.grid-num {
    font-size: 20px;
    font-weight: bold;
}

.grid-con-icon {
    font-size: 50px;
    width: 65px;
    height: 100px;
    text-align: center;
    line-height: 100px;
    color: #fff;
}

.grid-con-1 .grid-con-icon {
    background: rgb(45, 140, 240);
}

.grid-con-1 .grid-num {
    color: rgb(45, 140, 240);
}

.grid-con-2 .grid-con-icon {
    background: rgb(100, 213, 114);
}

.grid-con-2 .grid-num {
    color: rgb(45, 140, 240);
}

.grid-con-3 .grid-con-icon {
    background: rgb(242, 94, 67);
}

.grid-con-3 .grid-num {
    color: rgb(242, 94, 67);
}

.user-info {
    display: flex;
    align-items: center;
    padding-bottom: 20px;
    border-bottom: 2px solid #ccc;
    margin-bottom: 20px;
}

.user-avator {
    width: 120px;
    height: 120px;
    border-radius: 50%;
}

.user-info-cont {
    padding-left: 50px;
    flex: 1;
    font-size: 14px;
    color: #999;
}

.user-info-cont div:first-child {
    font-size: 30px;
    color: #222;
}

.user-info-list {
    font-size: 14px;
    color: #999;
    line-height: 25px;
}

.user-info-list span {
    margin-left: 70px;
}

.mgb20 {
    margin-bottom: 10px;
}

.todo-item {
    font-size: 14px;
}

.todo-item-del {
    text-decoration: line-through;
    color: #999;
}

.schart {
    width: 100%;
    height: 300px;
}
</style>
