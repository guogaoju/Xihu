import http from "../http-common";
class DanweiStatelogService {
  getAll() {
    return http.get("/DanweiStatelog");
  }
  findByLog(danweiId) {
    return http.get(`/DanweiStatelog?danweiId=${danweiId}`);
  }
  get(id) {
    return http.get(`/DanweiStatelog/${id}`);
  }
  create(data) {
    return http.post("/DanweiStatelog", data);
  }
  update(id, data) {
    return http.put(`/DanweiStatelog/${id}`, data);
  }
  delete(id) {
    return http.delete(`/DanweiStatelog/${id}`);
  }
}
export default new DanweiStatelogService();