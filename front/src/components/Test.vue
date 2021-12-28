<template>
    <div>
      <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/Dao' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item></el-breadcrumb-item>
    </el-breadcrumb>
        <el-row :gutter="20">
            <el-col :span="8">
                <el-card shadow="hover" class="mgb20" style="height:252px;">
                   <div slot="header" class="clearfix">
                        <span>待办事项</span>
                        <el-button style="float: right; padding: 3px 0" type="text">添加</el-button>
                    </div>
                    <el-table :show-header="false" :data="todoList" style="width:100%;">
                        <el-table-column width="40">
                            <template slot-scope="scope">
                                <el-checkbox v-model="scope.row.status"></el-checkbox>
                            </template>
                        </el-table-column>
                        <el-table-column>
                            <template slot-scope="scope">
                                <div
                                    class="todo-item"
                                    :class="{'todo-item-del': scope.row.status}"
                                >{{scope.row.title}}</div>
                            </template>
                        </el-table-column>
                        <el-table-column width="60">
                            <template>
                                <i class="el-icon-edit"></i>
                                <i class="el-icon-delete"></i>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-card>
                <el-card shadow="hover" style="height:252px;">
                    <div slot="header" class="clearfix">
                        <span>项目进度</span>
                    </div>桃心大道
                    <el-progress :percentage="51.3" color="#42b983"></el-progress>体育场
                    <el-progress :percentage="24.1" color="#f1e05a"></el-progress>地铁
                    <el-progress :percentage="43.7"></el-progress>人民广场
                    <el-progress :percentage="35.9" color="#f56c6c"></el-progress>
                </el-card>
            </el-col>
            <el-col :span="16">
                <el-row :gutter="20" class="mgb20">
                    <el-col :span="8">
                        <el-card shadow="hover" :body-style="{padding: '0px'}">
                            <div class="grid-content grid-con-1">
                                <i class="el-icon-lx-people grid-con-icon"></i>
                                <div class="grid-cont-right">
                                    <div class="grid-num">9</div>
                                    <div>待审批项目</div>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="8">
                        <el-card shadow="hover" :body-style="{padding: '0px'}">
                            <div class="grid-content grid-con-2">
                                <i class="el-icon-lx-notice grid-con-icon"></i>
                                <div class="grid-cont-right">
                                    <div class="grid-num">3</div>
                                    <div>已通过项目</div>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="8">
                        <el-card shadow="hover" :body-style="{padding: '0px'}">
                            <div class="grid-content grid-con-3">
                                <i class="el-icon-lx-goods grid-con-icon"></i>
                                <div class="grid-cont-right">
                                    <div class="grid-num">5</div>
                                    <div>已拒绝项目</div>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                </el-row>
                <el-card shadow="hover" style="height:403px;">
                  <schart ref="bar" class="schart" canvasId="bar" :options="options"></schart> 
                </el-card>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="10">
              <el-card shadow="hover">
                <div class="schart-box">
                  <div class="content-title"></div>
                    <schart class="schart" canvasId="pie" :options="options3"></schart>
                </div>
              </el-card>
            </el-col>
            <el-col :span="12">
                <el-card shadow="hover">
                    <schart ref="line" class="schart" canvasId="line" :options="options2"></schart>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import Schart from 'vue-schart';
import bus from '../router/bus';
export default {
    name: 'dashboard',
    data() {
        return {
            name: localStorage.getItem('ms_username'),
            options3: {
                type: 'pie',
                title: {
                    text: '物料种类出库饼状图(吨)'
                },
                legend: {
                    position: 'left'
                },
                bgColor: '#fbfbfb',
                labels: ['水泥', '钢筋', '沙子', '混凝土', '螺纹钢', '钣金', '钢管'],
                datasets: [
                    {
                        data: [334, 278, 190, 235, 260, 200, 141]
                    }
                ]
            },
            todoList: [
                {
                    title: '您有2个建筑项目待审批.',
                    status: false
                },
                {
                    title: '您有5个制造项目待审批',
                    status: false
                },
                {
                    title: '您有2个其他待审批',
                    status: false
                },
                // {
                //     title: '今天要修复100个bug',
                //     status: false
                // },
                // {
                //     title: '今天要修复100个bug',
                //     status: true
                // },
                // {
                //     title: '今天要写100行代码加几个bug吧',
                //     status: true
                // }
            ],
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
                    text: '最近一年各项目融资情况(万)'
                },
                xRorate: 25,
                labels: ['第一季度', '第二季度', '第三季度', '第四季度'],
                datasets: [
                    {
                        label: '地铁',
                        data: [234, 278, 270, 190, 230]
                    },
                    {
                        label: '桃心大道',
                        data: [164, 178, 190, 135, 160]
                    },
                    {
                        label: '体育场',
                        data: [144, 198, 150, 235, 120]
                    },
                    {
                        label: '人民广场',
                        data: [144, 198, 150, 235, 120]
                    }
                ]
            },
            options2: {
                type: 'line',
                title: {
                    text: '最近几个月主要物料出库趋势图'
                },
                labels: ['6月', '7月', '8月', '9月', '10月'],
                datasets: [
                    {
                        label: '水泥',
                        data: [234, 278, 270, 190, 230]
                    },
                    {
                        label: '钢筋',
                        data: [164, 188, 150, 135, 160]
                    },
                    {
                        label: '沙子',
                        data: [74, 118, 200, 235, 190]
                    },
                    {
                        label: '混凝土',
                        data: [100, 154, 121, 150, 200]
                    }
                ]
            }
        };
    },
    components: {
        Schart
    },
    computed: {
        role() {
            return this.name === 'admin' ? '超级管理员' : '普通用户';
        }
    },
    // created() {
    //     this.handleListener();
    //     this.changeDate();
    // },
    // activated() {
    //     this.handleListener();
    // },
    // deactivated() {
    //     window.removeEventListener('resize', this.renderChart);
    //     bus.$off('collapse', this.handleBus);
    // },
    methods: {
        changeDate() {
            const now = new Date().getTime();
            this.data.forEach((item, index) => {
                const date = new Date(now - (6 - index) * 86400000);
                item.name = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
            });
        }
        // handleListener() {
        //     bus.$on('collapse', this.handleBus);
        //     // 调用renderChart方法对图表进行重新渲染
        //     window.addEventListener('resize', this.renderChart);
        // },
        // handleBus(msg) {
        //     setTimeout(() => {
        //         this.renderChart();
        //     }, 200);
        // },
        // renderChart() {
        //     this.$refs.bar.renderChart();
        //     this.$refs.line.renderChart();
        // }
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
    font-size: 30px;
    font-weight: bold;
}

.grid-con-icon {
    font-size: 50px;
    width: 100px;
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
    margin-bottom: 20px;
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
