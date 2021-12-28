import http from "../http-common";
class FukuanStatelogService {
  getAll() {
    return http.get("/FukuanStatelog");
  }
  findByLog(fukuanId) {
    return http.get(`/FukuanStatelog?fukuanId=${fukuanId}`);
  }
  get(id) {
    return http.get(`/FukuanStatelog/${id}`);
  }
  create(data) {
    return http.post("/FukuanStatelog", data);
  }
  update(id, data) {
    return http.put(`/FukuanStatelog/${id}`, data);
  }
  delete(id) {
    return http.delete(`/FukuanStatelog/${id}`);
  }
}
export default new FukuanStatelogService();