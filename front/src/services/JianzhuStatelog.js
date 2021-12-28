import http from "../http-common";
class JianzhuStatelogService {
  getAll() {
    return http.get("/JianzhuStatelog");
  }
  findByLog(jianzhuId) {
    return http.get(`/JianzhuStatelog?jianzhuId=${jianzhuId}`);
  }
  get(id) {
    return http.get(`/JianzhuStatelog/${id}`);
  }
  create(data) {
    return http.post("/JianzhuStatelog", data);
  }
  update(id, data) {
    return http.put(`/JianzhuStatelog/${id}`, data);
  }
  delete(id) {
    return http.delete(`/JianzhuStatelog/${id}`);
  }
}
export default new JianzhuStatelogService();