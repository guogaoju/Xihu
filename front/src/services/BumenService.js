import http from "../http-common";
class BumenService {
  getAll() {
    return http.get("/Bumen");
  }
  get(id) {
    return http.get(`/Bumen/${id}`);
  }
  create(data) {
    return http.post("/Bumen", data);
  }
  update(id, data) {
    return http.put(`/Bumen/${id}`, data);
  }
  delete(id) {
    return http.delete(`/Bumen/${id}`);
  }
}
export default new BumenService();