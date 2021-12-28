import http from "../http-common";
class HuankuanImageService {
  getAll() {
    return http.get("/HuankuanImage");
  }
  get(id) {
    return http.get(`/HuankuanImage/${id}`);
  }
  create(data) {
    return http.post("/HuankuanImage", data);
  }
  update(id, data) {
    return http.put(`/HuankuanImage/${id}`, data);
  }
  delete(id) {
    return http.delete(`/HuankuanImage/${id}`);
  }
}
export default new HuankuanImageService();