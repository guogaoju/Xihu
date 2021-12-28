import http from "../http-common";
class CaigouStatelogService {
  getAll() {
    return http.get("/CaigouStatelog");
  }
  findByLog(caigouId) {
    return http.get(`/CaigouStatelog?caigouId=${caigouId}`);
  }
  get(id) {
    return http.get(`/CaigouStatelog/${id}`);
  }
  create(data) {
    return http.post("/CaigouStatelog", data);
  }
  update(id, data) {
    return http.put(`/CaigouStatelog/${id}`, data);
  }
  delete(id) {
    return http.delete(`/CaigouStatelog/${id}`);
  }
}
export default new CaigouStatelogService();