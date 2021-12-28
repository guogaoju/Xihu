
import http from "../http-common";
class AuthService {
  getAll() {
    return http.get("signselectAll");
  }
  get(userid) {
    return http.get(`/signselect/${userid}`);
  }
  getDept(deptid) {
    return http.get(`/signselectdept/${deptid}`);
  }
  update(userid, data) {
    return http.put(`/signupdate/${userid}`, data);
  }
  delete(userid) {
    return http.delete(`/signdelete/${userid}`);
  }
  login(user) {
    return http
      .post('signin', {
        username: user.username,
        password: user.password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
      });
  }
  logout() {
    localStorage.removeItem('user');
  }
  register(user) {
    /*
    return http.post('signup', {
      name:user.name,
      username: user.username,
      email: user.email,
      password: user.password,
      //问题出在这里，这个地方少一句
      depts: user.depts
    });
    */
   //其实直接这样就行 不需要重新赋一遍值
    return http.post('signup',user);
  }
}
export default new AuthService();