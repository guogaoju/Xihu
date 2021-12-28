import http from "../http-common";
class PingjiStatelogService {
  getAll() {
    return http.get("/PingjiStatelog");
  }
  findByLog(pingjiId) {
    return http.get(`/PingjiStatelog?pingjiId=${pingjiId}`);
  }
  get(id) {
    return http.get(`/PingjiStatelog/${id}`);
  }
  create(data) {
    return http.post("/PingjiStatelog", data);
  }
  update(id, data) {
    return http.put(`/PingjiStatelog/${id}`, data);
  }
  delete(id) {
    return http.delete(`/PingjiStatelog/${id}`);
  }
}
export default new PingjiStatelogService();