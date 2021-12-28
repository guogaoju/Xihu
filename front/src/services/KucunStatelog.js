import http from "../http-common";
class KucunStatelogService {
  getAll() {
    return http.get("/KucunStatelog");
  }
  findByLog(kucunId) {
    return http.get(`/KucunStatelog?kucunId=${kucunId}`);
  }
  get(id) {
    return http.get(`/KucunStatelog/${id}`);
  }
  create(data) {
    return http.post("/KucunStatelog", data);
  }
  update(id, data) {
    return http.put(`/KucunStatelog/${id}`, data);
  }
  delete(id) {
    return http.delete(`/KucunStatelog/${id}`);
  }
}
export default new KucunStatelogService();