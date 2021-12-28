import http from "../http-common";
class CaigouImageService {
  getAll() {
    return http.get("/CaigouImage");
  }
  findByLog(caigouId) {
    return http.get(`/CaigouImage?caigouId=${caigouId}`);
  }
  get(id) {
    return http.get(`/CaigouImage/${id}`);
  }
  create(data) {
    return http.post("/CaigouImage", data);
  }
  update(id, data) {
    return http.put(`/CaigouImage/${id}`, data);
  }
  delete(id) {
    return http.delete(`/CaigouImage/${id}`);
  }
}
export default new CaigouImageService();