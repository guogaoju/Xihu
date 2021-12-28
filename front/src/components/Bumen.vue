<template>
  <div>
    <el-row>
      <el-col :span="22" style="float: right">
        <el-button type="warning" :disabled="annui" round size="small" @click="openFrom()"
          >添加成员</el-button
        >
      </el-col>
      <el-col :span="2" style="float: right">
        <el-button type="warning" :disabled="annui" round size="small" @click="openFrom1()"
          >添加部门</el-button
        >
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="4">
        <el-button
          style="margin-top: 10px"
          type="warning"
          @click="All()"
          round
          size="small"
          >全部成员</el-button
        >
        <el-table
          @row-click="rowClicked"
          :data="tableData1"
          active-text-color="#ffd04b"
          style="width: 100%"
        >
          <el-table-column prop="name" label="全部部门"> </el-table-column>
        </el-table>
      </el-col>
      <el-col :span="20">
        <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark">
          <el-table-column prop="name" label="姓名" width="120">
          </el-table-column>
          <el-table-column prop="username" label="账号" width="120">
          </el-table-column>
          <el-table-column
            prop="roles"
            label="角色"
            width="180"
            :formatter="getfor1"
            show-overflow-tooltip
          >
          </el-table-column>
          <el-table-column
            prop="depts"
            label="部门"
            width="378"
            :formatter="getfor"
            show-overflow-tooltip
          >
          </el-table-column>
          <el-table-column label="操作" width="350" align="center">
            <template slot-scope="scope">
              <el-button
                type="warning" :disabled="annui"
                @click="updateClick(scope.$index, tableData)"
                round
                size="small"
                >修改</el-button
              >
              <el-button
                type="danger" :disabled="annui"
                @click="delClick(scope.$index, tableData)"
                round
                size="small"
                >删除</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
    <el-dialog :title="titleMap[dialogTitle]" :visible.sync="dialogFormVisible">
      <el-form
        ref="form"
        :model="form"
        status-icon
        :rules="rules"
        label-width="80px"
      >
        <el-row>
          <el-col :span="12">
            <el-form-item label="姓名">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="账号">
              <el-input v-model="form.username"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="密码">
              <el-input v-model="form.password"></el-input>
            </el-form-item>
            <el-form-item label="email">
              <el-input v-model="form.email"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item
                label="角色"
                prop="roles"
                :label-width="formLabelWidth"
              >
                <el-select v-model="form.roles" multiple placeholder="请选择">
                  <el-option
                    v-for="item in result2"
                    :key="item.id"
                    :label="item.name"
                    :value="item.name"
                  >
                  </el-option>
                </el-select>
              </el-form-item>
          </el-col>
          <el-col :span="12">
              <el-form-item
                  label="部门权限"
                  prop="depts"
                  :label-width="formLabelWidth"
                >
                  <el-select v-model="form.depts" multiple placeholder="请选择">
                    <el-option
                      v-for="item in result1"
                      :key="item.id"
                      :label="item.name"
                      :value="item.name"
                    >
                    </el-option>
                  </el-select>
                </el-form-item>
          </el-col>
        </el-row>
        <el-form-item>
          <el-button type="warning" @click="submit('form')">确定</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
    <el-dialog title="添加部门" :visible.sync="dialogFormVisible1">
      <el-form
        ref="form1"
        :model="form1"
        status-icon
        :rules="rules"
        label-width="80px"
      >
        <el-form-item label="部门名称">
          <el-input
            v-model="form1.name"
            :label-width="formLabelWidth"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="warning" @click="addsubmit('form1')">确定</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>
<script>
import DeptService from "../services/DeptService";
import RoleService from "../services/Role";
import AuthService from "../services/auth.service";
export default {
  created() {
    this.tableonload();
    this.selectUser();
    this.dialog = true;
    RoleService.getAll().then((response)=>{
      this.result2 = response.data;
    })
    DeptService.getAll()
      .then((response) => {
        this.tableData1 = response.data;
        this.result1 = response.data;
      })
      .catch((e) => {
        console.log(e);
      });
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  methods: {
    All() {
      this.tableonload();
    },
    selectUser(){
      AuthService.get(this.currentUser.id).then((response)=>{
        for(var i=0;i<response.data.roles.length;i++){
          if(response.data.roles[i].name==="admin"){
            this.annui=false
          }
        }
       
      })
    },
    rowClicked(row, event, column) {
      let deptid = row.id;
      AuthService.getDept(deptid)
        .then((response) => {
          this.tableData = response.data;
          console.log(response.data[0].depts);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    getfor(row, column) {
      var deptName = [];
      for (var i = 0; i < row.depts.length; i++) {
        deptName.push(row.depts[i].name);
      }
      return deptName.join();
    },
    getfor1(row, column) {
      var roleName = [];
      for (var i = 0; i < row.roles.length; i++) {
        roleName.push(row.roles[i].name);
      }
      return roleName.join();
    },
    async tableonload() {
      AuthService.getAll()
        .then((response) => {
          this.tableData = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    openFrom() {
      this.dialogFormVisible = true;
      (this.form = {}), (this.dialogTitle = "addData");
      DeptService.getAll()
        .then((response) => {
          this.result = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    addservice() {
      this.dialogFormVisible = false;
      var data = {
        name: this.form.name,
        username: this.form.username,
        password: this.form.password,
        email: this.form.email,
        depts: this.form.depts,
        //问题一-----------------------------------
      };
      //console.log(data);
      //问题出在这个AuthService.register函数里
      AuthService.register(data)
        .then((response) => {
          this.tableonload();
          //console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    openFrom1() {
      this.dialogFormVisible1 = true;
      this.form1 = {};
    },
    addservice1() {
      this.dialogFormVisible1 = false;
      var data = {
        name: this.form1.name,
      };
      DeptService.create(data)
        .then((response) => {
          this.tableonload();
          location.reload();
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    addsubmit(form1) {
      this.$refs[form1].validate((valid) => {
        if (valid) {
          this.addservice1();
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    submit(form) {
      this.$refs[form].validate((valid) => {
        if (this.dialogTitle == "addData" && valid) {
          this.addservice();
          this.form = {};
        } else if (this.dialogTitle == "updataData") {
          this.updateservice();
        } else {
          return false;
        }
      });
    },
    updateClick(index, row) {
      this.dialogFormVisible = true;
      this.dialogTitle = "updataData";
      let pa = this.tableData[index].id;
      AuthService.get(pa)
        .then((response) => {
          this.form = response.data;
          var deptName = [];
          var roleName = [];
          for (var i = 0; i < response.data.depts.length; i++) {
            deptName.push(response.data.depts[i].name);
          }
          for (var i = 0; i < response.data.roles.length; i++) {
            roleName.push(response.data.roles[i].name);
          }
          this.form.depts = deptName;
          this.form.roles = roleName;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    updateservice() {
      this.dialogFormVisible = false;
      var data = {
        userid: this.form.id,
        name: this.form.name,
        username: this.form.username,
        password: this.form.password,
        email: this.form.email,
        roles:this.form.roles,
        depts: this.form.depts,
      };
      AuthService.update(data.userid, data)
        .then((response) => {
          this.tableonload();
          //console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    delClickconfirm(index, row) {
      let pa = this.tableData[index].id;
      let a = this;
      AuthService.delete(pa)
        .then((response) => {
          this.tableonload();
          console.log(response.pa);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    delClick(index, row) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.delClickconfirm(index);
          this.$message({
            type: "success",
            message: "删除成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    //
    cancelForm() {
      this.loading = false;
      this.dialog = false;
      clearTimeout(this.timer);
    },
  },
  data() {
    return {
      annui:'',
      getNewList: [],
      result: "",
      result1: "",
      result2: "",
      titleMap: {
        addData: "添加数据",
        updataData: "修改数据",
      },
      // depts:[],
      dialogTitle: "",
      form: {},
      form1: {},
      rules: {},
      tableData: [],
      tableData1: [],
      menu: [],
      size: "50%",
      dialog: false,
      loading: false,
      TravelType: 1,
      formLabelWidth: "160px",
      dialogFormVisible: false,
      dialogFormVisible1: false,
    };
  },
};
</script>