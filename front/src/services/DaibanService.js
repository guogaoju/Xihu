import http from "../http-common";
class DaibanService {
  getAll() {
    return http.get("/Daiban");
  }
  findByLog(deptId) {
    return http.get(`/Daiban?deptId=${deptId}`);
  }
  get(id) {
    return http.get(`/Daiban/${id}`);
  }
  getJia(deptId,name) {
    return http.get(`/Daiban/jia/${deptId}${name}`);
  }
  getJian(deptId,name) {
    return http.get(`/Daiban/jian/${deptId}${name}`);
  }
  create(data) {
    return http.post("/Daiban", data);
  }
  update(id, data) {
    return http.put(`/Daiban/${id}`, data);
  }
  delete(id) {
    return http.delete(`/Daiban/${id}`);
  }
}
export default new DaibanService();