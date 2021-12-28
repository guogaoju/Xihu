import http from "../http-common";
class ZhizaoStatelogService {
  getAll() {
    return http.get("/ZhizaoStatelog");
  }
  findByLog(zhizaoId) {
    return http.get(`/ZhizaoStatelog?zhizaoId=${zhizaoId}`);
  }
  get(id) {
    return http.get(`/ZhizaoStatelog/${id}`);
  }
  create(data) {
    return http.post("/ZhizaoStatelog", data);
  }
  update(id, data) {
    return http.put(`/ZhizaoStatelog/${id}`, data);
  }
  delete(id) {
    return http.delete(`/ZhizaoStatelog/${id}`);
  }
}
export default new ZhizaoStatelogService();