<template>
  <div class="col-md-12">
    <div class="card card-container">
      <img
        id="profile-img"
        src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
        class="profile-img-card"
      />
      <form name="form" @submit.prevent="handleLogin">
        <div class="form-group">
          <label for="username">账号</label>
          <input
            v-model="user.username"
            v-validate="'required'"
            type="text"
            class="form-control"
            name="username"
          />
          <div
            v-if="errors.has('username')"
            class="alert alert-danger"
            role="alert"
          >用户名不能为空</div>
        </div>
        <div class="form-group">
          <label for="password">密码</label>
          <input
            v-model="user.password"
            v-validate="'required'"
            type="password"
            class="form-control"
            name="password"
          />
          <div
            v-if="errors.has('password')"
            class="alert alert-danger"
            role="alert"
          >密码不能为空</div>
        </div>
        <div class="form-group" style="text-align:center">
          <button class="btn btn-primary btn-lg disabled btn-block" :disabled="loading">
            <span v-show="loading" class="spinner-border spinner-border-sm"></span>
            <span>登录</span>
          </button>
        </div>
        <!-- <div class="form-group">
          <button class="btn btn-primary btn-lg disabled btn-block" @click="zhuce()">注册</button>
        </div> -->
        <div class="form-group">
          <div v-if="message" class="alert alert-danger" role="alert">{{message}}</div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import User from '../models/user';

export default {
  name: 'Login',
  data() {
    return {
      user: new User('', ''),
      loading: false,
      message: ''
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    }
  },
  created() {
    // if (this.loggedIn) {
    //   this.$router.push('/profile');
    // }
  },
  methods: {
    zhuce(){
        this.$router.push('/register');
    },
    handleLogin() {
      this.loading = true;
      this.$validator.validateAll().then(isValid => {
        if (!isValid) {
          this.loading = false;
          return;
        }

        if (this.user.username && this.user.password) {
          this.$store.dispatch('auth/login', this.user).then(
            () => {
              this.$router.push('/Dao');
            },
            error => {
              this.loading = false;
              this.message =
                (error.response && error.response.data) ||
                error.message ||
                error.toString();
            }
          );
        }
      });
    }
  }
};
</script>

<style scoped>
label {
  display: block;
  margin-top: 10px;
}
/* .big{
  width: 100%;
  height: 900px;
  background-image:url(https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fcrawl.ws.126.net%2F2c355142f25295b144507982cf6f8b50.jpg&refer=http%3A%2F%2Fcrawl.ws.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1620288118&t=d8d994a0e9b58cd8c942ad7a21025ec5);
  background-repeat:repeat;
  background-size: 100% 100%;
  width: 100%; 
  height: 1000px;
} */
.card-container.card {
  max-width: 350px !important;
  padding: 40px 40px;
}

.card {
  background-color: #f7f7f7;
  padding: 20px 25px 30px;
  margin: 0 auto 25px;
  margin-top: 100px;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  border-radius: 2px;
  -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
}

.profile-img-card {
  width: 96px;
  height: 96px;
  margin: 0 auto 10px;
  display: block;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
}
</style>