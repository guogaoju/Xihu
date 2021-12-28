import http from "../http-common";
class CodeService {
  getAll() {
    return http.get("/Code");
  }
  findByLog(name) {
    return http.get(`/Code?name=${name}`);
  }
  get(id) {
    return http.get(`/Code/${id}`);
  }
  create(data) {
    return http.post("/Code", data);
  }
  update(id, data) {
    return http.put(`/Code/${id}`, data);
  }
  delete(id) {
    return http.delete(`/Code/${id}`);
  }
}
export default new CodeService();