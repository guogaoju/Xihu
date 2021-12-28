import http from "../http-common";
class ChukuStatelogService {
  getAll() {
    return http.get("/ChukuStatelog");
  }
  findByLog(chukuId) {
    return http.get(`/ChukuStatelog?chukuId=${chukuId}`);
  }
  get(id) {
    return http.get(`/ChukuStatelog/${id}`);
  }
  create(data) {
    return http.post("/ChukuStatelog", data);
  }
  update(id, data) {
    return http.put(`/ChukuStatelog/${id}`, data);
  }
  delete(id) {
    return http.delete(`/ChukuStatelog/${id}`);
  }
}
export default new ChukuStatelogService();