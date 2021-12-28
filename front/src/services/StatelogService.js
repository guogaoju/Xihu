import http from "../http-common";
class StatelogService {
  getAll() {
    return http.get("/Statelog");
  }
  findByLog(qiyeId) {
    return http.get(`/Statelog?qiyeId=${qiyeId}`);
  }
  get(id) {
    return http.get(`/Statelog/${id}`);
  }
  create(data) {
    return http.post("/Statelog", data);
  }
  update(id, data) {
    return http.put(`/Statelog/${id}`, data);
  }
  delete(id) {
    return http.delete(`/Statelog/${id}`);
  }
}
export default new StatelogService();