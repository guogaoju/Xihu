import http from "../http-common";
class WuliaoStatelogService {
  getAll() {
    return http.get("/WuliaoStatelog");
  }
  findByLog(wuliaoId) {
    return http.get(`/WuliaoStatelog?wuliaoId=${wuliaoId}`);
  }
  get(id) {
    return http.get(`/WuliaoStatelog/${id}`);
  }
  create(data) {
    return http.post("/WuliaoStatelog", data);
  }
  update(id, data) {
    return http.put(`/WuliaoStatelog/${id}`, data);
  }
  delete(id) {
    return http.delete(`/WuliaoStatelog/${id}`);
  }
}
export default new WuliaoStatelogService();