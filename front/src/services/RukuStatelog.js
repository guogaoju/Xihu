import http from "../http-common";
class RukuStatelogService {
  getAll() {
    return http.get("/RukuStatelog");
  }
  findByLog(rukuId) {
    return http.get(`/RukuStatelog?rukuId=${rukuId}`);
  }
  get(id) {
    return http.get(`/RukuStatelog/${id}`);
  }
  create(data) {
    return http.post("/RukuStatelog", data);
  }
  update(id, data) {
    return http.put(`/RukuStatelog/${id}`, data);
  }
  delete(id) {
    return http.delete(`/RukuStatelog/${id}`);
  }
}
export default new RukuStatelogService();