import http from "../http-common";
class HuankuanStatelogService {
  getAll() {
    return http.get("/HuankuanStatelog");
  }
  findByLog(huankuanId) {
    return http.get(`/HuankuanStatelog?huankuanId=${huankuanId}`);
  }
  get(id) {
    return http.get(`/HuankuanStatelog/${id}`);
  }
  create(data) {
    return http.post("/HuankuanStatelog", data);
  }
  update(id, data) {
    return http.put(`/HuankuanStatelog/${id}`, data);
  }
  delete(id) {
    return http.delete(`/HuankuanStatelog/${id}`);
  }
}
export default new HuankuanStatelogService();