import http from "../http-common";
class FangwenStatelogService {
  getAll() {
    return http.get("/FangwenStatelog");
  }
  findByLog(fangwenId) {
    return http.get(`/FangwenStatelog?fangwenId=${fangwenId}`);
  }
  get(id) {
    return http.get(`/FangwenStatelog/${id}`);
  }
  create(data) {
    return http.post("/FangwenStatelog", data);
  }
  update(id, data) {
    return http.put(`/FangwenStatelog/${id}`, data);
  }
  delete(id) {
    return http.delete(`/FangwenStatelog/${id}`);
  }
}
export default new FangwenStatelogService();