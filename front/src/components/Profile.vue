<template>
  <div class="container">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/Dao' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item></el-breadcrumb-item>
    </el-breadcrumb>
    <header class="jumbotron">
      <h4>
        个人资料
      </h4>
    </header>
    <!-- <p>
      <strong>Token:</strong>
      {{currentUser.accessToken.substring(0, 20)}} ... {{currentUser.accessToken.substr(currentUser.accessToken.length - 20)}}
    </p> -->
    <p>
      <strong>用户名:</strong>
      {{currentUser.username}}
    </p>
    <p>
      <strong>Id:</strong>
      {{currentUser.id}}
    </p>
    <p>
      <strong>邮箱:</strong>
      {{currentUser.email}}
    </p>
    <strong>Authorities:</strong>
    <ul>
      <li v-for="(role,index) in currentUser.roles" :key="index">{{role}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push('/login');
    }
  }
};
</script>