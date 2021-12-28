import http from "../http-common";
class DanweiStateService {
  getAll(data) {
    return http.get("/DanweiState",data);
  }
  get(id) {
    return http.get(`/DanweiState/${id}`);
  }
  create(data) {
    return http.post("/DanweiState", data);
  }
  update(id, data) {
    return http.put(`/DanweiState/${id}`, data);
  }
  delete(id) {
    return http.delete(`/DanweiState/${id}`);
  }
}
export default new DanweiStateService();