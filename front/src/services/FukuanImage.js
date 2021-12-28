import http from "../http-common";
class FukuanImageService {
  getAll() {
    return http.get("/FukuanImage");
  }
  findByLog(fukuanId) {
    return http.get(`/FukuanImage?fukuanId=${fukuanId}`);
  }
  get(id) {
    return http.get(`/FukuanImage/${id}`);
  }
  create(data) {
    return http.post("/FukuanImage", data);
  }
  update(id, data) {
    return http.put(`/FukuanImage/${id}`, data);
  }
  delete(id) {
    return http.delete(`/FukuanImage/${id}`);
  }
}
export default new FukuanImageService();