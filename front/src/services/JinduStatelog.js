import http from "../http-common";
class JinduStatelogService {
  getAll() {
    return http.get("/JinduStatelog");
  }
  findByLog(jinduId) {
    return http.get(`/JinduStatelog?jinduId=${jinduId}`);
  }
  get(id) {
    return http.get(`/JinduStatelog/${id}`);
  }
  create(data) {
    return http.post("/JinduStatelog", data);
  }
  update(id, data) {
    return http.put(`/JinduStatelog/${id}`, data);
  }
  delete(id) {
    return http.delete(`/JinduStatelog/${id}`);
  }
}
export default new JinduStatelogService();