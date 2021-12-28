import http from "../http-common";
class WuliaoTypeStatelogService {
  getAll() {
    return http.get("/WuliaoTypeStatelog");
  }
  findByLog(wuliaotypeId) {
    return http.get(`/WuliaoTypeStatelog?wuliaotypeId=${wuliaotypeId}`);
  }
  get(id) {
    return http.get(`/WuliaoTypeStatelog/${id}`);
  }
  create(data) {
    return http.post("/WuliaoTypeStatelog", data);
  }
  update(id, data) {
    return http.put(`/WuliaoTypeStatelog/${id}`, data);
  }
  delete(id) {
    return http.delete(`/WuliaoTypeStatelog/${id}`);
  }
}
export default new WuliaoTypeStatelogService();