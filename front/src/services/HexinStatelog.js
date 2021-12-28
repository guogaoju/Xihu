import http from "../http-common";
class HexinStatelogService {
  getAll() {
    return http.get("/corefirmStatelog");
  }
  findByLog(core_firmId) {
    return http.get(`/corefirmStatelog?core_firmId=${core_firmId}`);
  }
  get(id) {
    return http.get(`/corefirmStatelog/${id}`);
  }
  create(data) {
    return http.post("/corefirmStatelog", data);
  }
  update(id, data) {
    return http.put(`/corefirmStatelog/${id}`, data);
  }
  delete(id) {
    return http.delete(`/corefirmStatelog/${id}`);
  }
}
export default new HexinStatelogService();