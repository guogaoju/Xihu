import http from "../http-common";
class CailiaoStatelogService {
  getAll() {
    return http.get("/CailiaoStatelog");
  }
  findByLog(cailiaogyId) {
    return http.get(`/CailiaoStatelog?cailiaogyId=${cailiaogyId}`);
  }
  get(id) {
    return http.get(`/CailiaoStatelog/${id}`);
  }
  create(data) {
    return http.post("/CailiaoStatelog", data);
  }
  update(id, data) {
    return http.put(`/CailiaoStatelog/${id}`, data);
  }
  delete(id) {
    return http.delete(`/CailiaoStatelog/${id}`);
  }
}
export default new CailiaoStatelogService();