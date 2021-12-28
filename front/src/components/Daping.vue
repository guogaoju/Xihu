<template>
    <div>
      <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/Dao' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item></el-breadcrumb-item>
    </el-breadcrumb>
    <el-row>
        <el-col :span="7">
            <el-card shadow="hover" class="mgb20" style="height:510px;">
                   <div slot="header" class="clearfix">
                        <span>大屏数字数据</span>
                        <!-- <el-button style="float: right; padding: 3px 0" type="text">添加</el-button> -->
                    </div>
                    <el-table
                    :data="tableData"
                    max-height="400"
                    style="width: 100%">
                        <el-table-column
                            prop="name"
                            label="业务模块"
                            width="210"
                            align="center">
                        </el-table-column>
                        <el-table-column
                            prop="value"
                            label="数据"
                            width="120"
                            align="center">
                        </el-table-column>
                        <el-table-column width="180">
                            <template slot-scope="scope">
                                <el-button type="success" @click.stop="updateClick(scope.$index,tableData)" plain round size="small">修改</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-card>
        </el-col>
        <el-col :span="9">
            <el-card shadow="hover" class="mgb20" style="height:510px;">
                   <div slot="header" class="clearfix">
                        <span>融资余额图表数据</span>
                        <el-button style="float: right; padding: 3px 0" type="text" @click="openFrom()">添加</el-button>
                    </div>
                    <el-table
                    :data="tableData1"
                    max-height="400"
                    style="width: 100%">
                        <el-table-column
                            prop="x"
                            label="日期"
                            width="100"
                            align="center">
                        </el-table-column>
                        <el-table-column
                            prop="y"
                            label="融资余额(万元)"
                            width="120"
                            align="center">
                        </el-table-column>
                        <el-table-column
                            prop="s"
                            label="项目名称"
                            width="120"
                            align="center">
                        </el-table-column>
                        <el-table-column width="180">
                            <template slot-scope="scope">
                                <el-button type="success" @click.stop="updateClick1(scope.$index,tableData)" plain round size="small">修改</el-button>
                                <el-button type="danger" @click.stop="delClick(scope.$index,tableData)" plain round size="small">删除</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-card>
        </el-col>
        <el-col :span="8">
            <el-card shadow="hover" class="mgb20" style="height:510px;">
                   <div slot="header" class="clearfix">
                        <span>信用评分图表数据</span>
                        <el-button style="float: right; padding: 3px 0" type="text" @click="openFrom1()">添加</el-button>
                    </div>
                    <el-table
                    :data="tableData2"
                    max-height="400"
                    style="width: 100%">
                        <el-table-column
                            prop="x"
                            label="日期"
                            width="100"
                            align="center">
                        </el-table-column>
                        <el-table-column
                            prop="y"
                            label="评分"
                            width="80"
                            align="center">
                        </el-table-column>
                        <el-table-column
                            prop="s"
                            label="企业"
                            width="100"
                            align="center">
                        </el-table-column>
                        <el-table-column width="180">
                            <template slot-scope="scope">
                                <el-button type="success" @click.stop="updateClick2(scope.$index,tableData)" plain round size="small">修改</el-button>
                                <el-button type="danger" @click.stop="delClick1(scope.$index,tableData)" plain round size="small">删除</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-card>
        </el-col>
    </el-row>
    <el-row>
        <el-col :span="12">
            <el-card shadow="hover" class="mgb20" style="height:510px;">
                   <div slot="header" class="clearfix">
                        <span>α风险值图表数据</span>
                        <el-button style="float: right; padding: 3px 0" type="text" @click="openFrom2()">添加</el-button>
                    </div>
                    <el-table
                    :data="tableData3"
                    max-height="400"
                    style="width: 100%">
                        <el-table-column
                            prop="x"
                            label="日期"
                            width="100"
                            align="center">
                        </el-table-column>
                        <el-table-column
                            prop="y"
                            label="α比例"
                            width="120"
                            align="center">
                        </el-table-column>
                        <el-table-column
                            prop="s"
                            label="项目名称"
                            width="120"
                            align="center">
                        </el-table-column>
                        <el-table-column width="180">
                            <template slot-scope="scope">
                                <el-button type="success" @click.stop="updateClick3(scope.$index,tableData)" plain round size="small">修改</el-button>
                                <el-button type="danger" @click.stop="delClick2(scope.$index,tableData)" plain round size="small">删除</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-card>
        </el-col>
        <el-col :span="12">
            <el-card shadow="hover" class="mgb20" style="height:510px;">
                   <div slot="header" class="clearfix">
                        <span>β风险值图表数据</span>
                        <el-button style="float: right; padding: 3px 0" type="text" @click="openFrom3()">添加</el-button>
                    </div>
                    <el-table
                    :data="tableData4"
                    max-height="400"
                    style="width: 100%">
                        <el-table-column
                            prop="x"
                            label="日期"
                            width="100"
                            align="center">
                        </el-table-column>
                        <el-table-column
                            prop="y"
                            label="β比例"
                            width="80"
                            align="center">
                        </el-table-column>
                        <el-table-column
                            prop="s"
                            label="企业"
                            width="100"
                            align="center">
                        </el-table-column>
                        <el-table-column width="180">
                            <template slot-scope="scope">
                                <el-button type="success" @click.stop="updateClick4(scope.$index,tableData)" plain round size="small">修改</el-button>
                                <el-button type="danger" @click.stop="delClick3(scope.$index,tableData)" plain round size="small">删除</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-card>
        </el-col>
    </el-row>
    <el-dialog title="修改数据" :visible.sync="dialogFormVisible">
        <el-form :model="dange"
        status-icon :rules="rules"
        ref="dange"
        label-width="100px"
        class="demo-ruleForm">
            <el-form-item label="数据" :label-width="formLabelWidth">
                <el-input v-model="dange.value" autocomplete="off"></el-input>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="submit('dange')">确 定</el-button>
        </div>
    </el-dialog>
    <el-dialog :title="titleMap[dialogTitle]" :visible.sync="dialogFormVisible1">
        <el-form :model="rongziB"
        status-icon :rules="rules"
        ref="rongziB"
        label-width="100px"
        class="demo-ruleForm">
        <el-row>
            <el-col :span="12">
                <el-form-item label="日期" :label-width="formLabelWidth" >
                    <el-input v-model="rongziB.x" autocomplete="off" placeholder="格式如：2020年11月1号：11/1/2020"></el-input>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row>
             <el-col :span="12">
                <el-form-item label="融资余额(万元)" :label-width="formLabelWidth">
                    <el-input v-model="rongziB.y" autocomplete="off"></el-input>
                </el-form-item>  
             </el-col>
             <el-col :span="12">
                <el-form-item label="项目名称" prop="rongziB.s" :label-width="formLabelWidth">
                    <el-select filterable v-model="rongziB.s" placeholder="请选择项目">
                        <el-option label="桃新大道" value="桃新大道"></el-option>
                        <el-option label="塔田安置房" value="塔田安置房"></el-option>
                        <el-option label="南昌县文化中心" value="南昌县文化中心"></el-option>
                        <el-option label="街上村安置房" value="街上村安置房"></el-option>
                    </el-select>
                </el-form-item>
             </el-col>
        </el-row>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="submit1('rongziB')">确 定</el-button>
        </div>
    </el-dialog>
    <el-dialog :title="titleMap[dialogTitle]" :visible.sync="dialogFormVisible2">
        <el-form :model="xinyongA"
        status-icon :rules="rules"
        ref="xinyongA"
        label-width="100px"
        class="demo-ruleForm">
        <el-row>
            <el-col :span="12">
                <el-form-item label="日期" :label-width="formLabelWidth">
                    <el-input v-model="xinyongA.x" autocomplete="off" placeholder="格式如：2020年11月1号：11/1/2020"></el-input>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row>
             <el-col :span="12">
                <el-form-item label="评分" :label-width="formLabelWidth">
                    <el-input v-model="xinyongA.y" autocomplete="off"></el-input>
                </el-form-item>  
             </el-col>
             <el-col :span="12">
                 <el-form-item label="企业" :label-width="formLabelWidth">
                    <el-select filterable v-model="xinyongA.s" placeholder="请选择企业">
                        <el-option label="北京城建" value="北京城建"></el-option>
                        <el-option label="江西诺金" value="江西诺金"></el-option>
                        <el-option label="江西圳发" value="江西圳发"></el-option>
                    </el-select> 
                </el-form-item>  
             </el-col>
        </el-row>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible2 = false">取 消</el-button>
            <el-button type="primary" @click="submit2('xinyongA')">确 定</el-button>
        </div>
    </el-dialog>
    <el-dialog :title="titleMap[dialogTitle]" :visible.sync="dialogFormVisible3">
        <el-form :model="alpha"
        status-icon :rules="rules"
        ref="alpha"
        label-width="100px"
        class="demo-ruleForm">
        <el-row>
            <el-col :span="12">
                <el-form-item label="日期" :label-width="formLabelWidth">
                    <el-input v-model="alpha.x" autocomplete="off" placeholder="格式如：2020年11月1号：11/1/2020"></el-input>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row>
             <el-col :span="12">
                <el-form-item label="α比例" :label-width="formLabelWidth">
                    <el-input v-model="alpha.y" autocomplete="off"></el-input>
                </el-form-item>  
             </el-col>
             <el-col :span="12">
                 <el-form-item label="项目名称" prop="alpha.s" :label-width="formLabelWidth">
                    <el-select filterable v-model="alpha.s" placeholder="请选择项目">
                        <el-option label="桃新大道" value="桃新大道"></el-option>
                        <el-option label="塔田安置房" value="塔田安置房"></el-option>
                        <el-option label="南昌县文化中心" value="南昌县文化中心"></el-option>
                        <el-option label="街上村安置房" value="街上村安置房"></el-option>
                    </el-select>
                </el-form-item> 
             </el-col>
        </el-row>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible3 = false">取 消</el-button>
            <el-button type="primary" @click="submit3('alpha')">确 定</el-button>
        </div>
    </el-dialog>
    <el-dialog :title="titleMap[dialogTitle]" :visible.sync="dialogFormVisible4">
        <el-form :model="beta"
        status-icon :rules="rules"
        ref="beta"
        label-width="100px"
        class="demo-ruleForm">
        <el-row>
            <el-col :span="12">
                <el-form-item label="日期" :label-width="formLabelWidth">
                    <el-input v-model="beta.x" autocomplete="off" placeholder="格式如：2020年11月1号：11/1/2020"></el-input>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row>
             <el-col :span="12">
                <el-form-item label="β比例" :label-width="formLabelWidth">
                    <el-input v-model="beta.y" autocomplete="off"></el-input>
                </el-form-item>  
             </el-col>
             <el-col :span="12">
                 <el-form-item label="企业" :label-width="formLabelWidth">
                    <el-select filterable v-model="beta.s" placeholder="请选择企业">
                        <el-option label="北京城建" value="北京城建"></el-option>
                        <el-option label="江西诺金" value="江西诺金"></el-option>
                        <el-option label="江西圳发" value="江西圳发"></el-option>
                    </el-select> 
                </el-form-item>  
             </el-col>
        </el-row>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible4 = false">取 消</el-button>
            <el-button type="primary" @click="submit4('beta')">确 定</el-button>
        </div>
    </el-dialog>
    </div>
</template>

<script>
import dangeService from "../services/Dange"
import RongziBService from "../services/RongziB"
import XinyongAService from "../services/Xinyong"
import AlphaService from "../services/Alpha"
import BetaService from "../services/Beta"
export default {
    name: 'dashboard',
    data() {
        return {
            tableData:[],
            tableData1:[],
            tableData2:[],
            tableData3:[],
            tableData4:[],
            dialogFormVisible: false,
            dialogFormVisible1: false,
            dialogFormVisible2: false,
            dialogFormVisible3: false,
            dialogFormVisible4: false,
            rules:{},
            dange:{},
            rongziB:{},
            xinyongA:{},
            alpha:{},
            beta:{},
            formLabelWidth: "100px",
            titleMap: {
        addData: "添加数据",
        updataData: "修改数据",
      },
        dialogTitle:"",
        TravelType:1,
        }
    },
    components: {
       
    },
    computed: {
       
    },
    created () {
         this.tableonload();
      },
    methods: {
        async tableonload(){
         dangeService.getAll()
        .then(response => {
          this.tableData = response.data;
        })
        .catch(e => {
          console.log(e);
        });
        RongziBService.getAll()
        .then(response => {
          this.tableData1 = response.data;
        //   console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
        XinyongAService.getAll()
        .then(response => {
          this.tableData2 = response.data;
        //   console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
        AlphaService.getAll()
        .then(response => {
          this.tableData3 = response.data;
        //   console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
        BetaService.getAll()
        .then(response => {
          this.tableData4 = response.data;
        //   console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
      },
      updateClick(index,row){
          this.dange={}
          this.dialogFormVisible=true
            var pa=this.tableData[index].id;
          dangeService.get(pa).then(response => {
                                          this.dange=response.data;
                                        //   this.chuku.nodeName = response.data.ChukuState.nodeName;
                                        })
                                        .catch(e => {
                                          console.log(e);
                                        });
      },
      updateService(){
           this.dialogFormVisible=false;
          var data = {
            id:this.dange.id,
            value: this.dange.value,
        }
          dangeService.update(data.id,data).then(response => {
                                         this.tableonload();
                                        })
                                        .catch(e => {
                                          console.log(e);
                                        });
      },
      openFrom(){
          this.rongziB={},
          this.dialogFormVisible1=true
          this.dialogTitle = "addData"; 
       },
        openFrom1(){
          this.xinyongA={},
          this.dialogFormVisible2=true
          this.dialogTitle = "addData"; 
       },
       openFrom2(){
          this.alpha={},
          this.dialogFormVisible3=true
          this.dialogTitle = "addData"; 
       },
       openFrom3(){
          this.beta={},
          this.dialogFormVisible4=true
          this.dialogTitle = "addData"; 
       },
       AddService(){
           this.dialogFormVisible1=false
            var data = {
            x:this.rongziB.x,
        y: this.rongziB.y,
        s: this.rongziB.s,
        }
        RongziBService.create(data).then(response => {
            this.tableonload();
        })
       },
       AddService1(){
           this.dialogFormVisible2=false
            var data = {
            x:this.xinyongA.x,
        y: this.xinyongA.y,
        s: this.xinyongA.s,
        }
        XinyongAService.create(data).then(response => {
            this.tableonload();
        })
       },
        AddService2(){
           this.dialogFormVisible3=false
            var data = {
            x:this.alpha.x,
        y: this.alpha.y,
        s: this.alpha.s,
        }
        AlphaService.create(data).then(response => {
            this.tableonload();
        })
       },
        AddService3(){
           this.dialogFormVisible4=false
            var data = {
            x:this.beta.x,
        y: this.beta.y,
        s: this.beta.s,
        }
        BetaService.create(data).then(response => {
            this.tableonload();
        })
       },
       updateClick1(index,row){
           this.dialogFormVisible1=true
           this.dialogTitle = "updateData"; 
          var pa=this.tableData1[index].id;
          console.log(pa)
          RongziBService.get(pa).then(response => {
                                          this.rongziB=response.data;
                                        //   this.chuku.nodeName = response.data.ChukuState.nodeName;
                                        })
                                        .catch(e => {
                                          console.log(e);
                                        });
       },
       updateClick2(index,row){
           this.dialogFormVisible2=true
           this.dialogTitle = "updateData"; 
          var pa=this.tableData2[index].id;
          XinyongAService.get(pa).then(response => {
                                          this.xinyongA=response.data;
                                        //   this.chuku.nodeName = response.data.ChukuState.nodeName;
                                        })
                                        .catch(e => {
                                          console.log(e);
                                        });
       },
       updateClick3(index,row){
           this.dialogFormVisible3=true
           this.dialogTitle = "updateData"; 
          var pa=this.tableData3[index].id;
          AlphaService.get(pa).then(response => {
                                          this.alpha=response.data;
                                        //   this.chuku.nodeName = response.data.ChukuState.nodeName;
                                        })
                                        .catch(e => {
                                          console.log(e);
                                        });
       },
       updateClick4(index,row){
           this.dialogFormVisible4=true
           this.dialogTitle = "updateData"; 
          var pa=this.tableData4[index].id;
          BetaService.get(pa).then(response => {
                                          this.beta=response.data;
                                        //   this.chuku.nodeName = response.data.ChukuState.nodeName;
                                        })
                                        .catch(e => {
                                          console.log(e);
                                        });
       },
       updateService1(){
           this.dialogFormVisible1=false;
         var data = {
             id:this.rongziB.id,
            x:this.rongziB.x,
        y: this.rongziB.y,
        s: this.rongziB.s,
        }
          RongziBService.update(data.id,data).then(response => {
                                         this.tableonload();
                                        })
                                        .catch(e => {
                                          console.log(e);
                                        });
      },
      updateService2(){
           this.dialogFormVisible2=false;
         var data = {
             id:this.xinyongA.id,
            x:this.xinyongA.x,
        y: this.xinyongA.y,
        s: this.xinyongA.s,
        }
          XinyongAService.update(data.id,data).then(response => {
                                         this.tableonload();
                                        })
                                        .catch(e => {
                                          console.log(e);
                                        });
      },
      updateService3(){
           this.dialogFormVisible3=false;
         var data = {
             id:this.alpha.id,
            x:this.alpha.x,
        y: this.alpha.y,
        s: this.alpha.s,
        }
          AlphaService.update(data.id,data).then(response => {
                                         this.tableonload();
                                        })
                                        .catch(e => {
                                          console.log(e);
                                        });
      },
      updateService4(){
           this.dialogFormVisible4=false;
         var data = {
             id:this.beta.id,
            x:this.beta.x,
        y: this.beta.y,
        s: this.beta.s,
        }
          BetaService.update(data.id,data).then(response => {
                                         this.tableonload();
                                        })
                                        .catch(e => {
                                          console.log(e);
                                        });
      },
      delClick(index,row){
           var pa=this.tableData1[index].id;
           RongziBService.delete(pa).then(response => {
                                        this.tableonload();
                                        //   this.chuku.nodeName = response.data.ChukuState.nodeName;
                                        })
                                        .catch(e => {
                                          console.log(e);
                                        });
      },
      delClick1(index,row){
           var pa=this.tableData2[index].id;
           XinyongAService.delete(pa).then(response => {
                                        this.tableonload();
                                        //   this.chuku.nodeName = response.data.ChukuState.nodeName;
                                        })
                                        .catch(e => {
                                          console.log(e);
                                        });
      },
      delClick2(index,row){
           var pa=this.tableData3[index].id;
           AlphaService.delete(pa).then(response => {
                                        this.tableonload();
                                        //   this.chuku.nodeName = response.data.ChukuState.nodeName;
                                        })
                                        .catch(e => {
                                          console.log(e);
                                        });
      },
      delClick3(index,row){
           var pa=this.tableData4[index].id;
           BetaService.delete(pa).then(response => {
                                        this.tableonload();
                                        //   this.chuku.nodeName = response.data.ChukuState.nodeName;
                                        })
                                        .catch(e => {
                                          console.log(e);
                                        });
      },
      submit4(beta){
          this.$refs[beta].validate((valid) => {
   if (this.dialogTitle ==  "addData"&&valid ) {
        this.AddService3();
      } else if(this.dialogTitle ==  "updateData"&&valid){
          this.updateService4();
      }
      else{
        return false
      }
        });
        },
        submit3(alpha){
          this.$refs[alpha].validate((valid) => {
   if (this.dialogTitle ==  "addData"&&valid ) {
        this.AddService2();
      } else if(this.dialogTitle ==  "updateData"&&valid){
          this.updateService3();
      }
      else{
        return false
      }
        });
        },
      submit2(xinyongA){
          this.$refs[xinyongA].validate((valid) => {
   if (this.dialogTitle ==  "addData"&&valid ) {
        this.AddService1();
      } else if(this.dialogTitle ==  "updateData"&&valid){
          this.updateService2();
      }
      else{
        return false
      }
        });
        },
       submit1(rongziB){
          this.$refs[rongziB].validate((valid) => {
   if (this.dialogTitle ==  "addData"&&valid ) {
        this.AddService();
      } else if(this.dialogTitle ==  "updateData"&&valid){
        //   console.log("6666666666")
          this.updateService1();
      }
      else{
        return false
      }
        });
        },
      submit(dange){
          this.$refs[dange].validate((valid) => {
    if (valid ) {
        this.updateService();
      }else{
        return false
      }
        });
        },
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
