import http from "../http-common";
class PingjiStateService {
  getAll(data) {
    return http.get("/PingjiState",data);
  }
  get(id) {
    return http.get(`/PingjiState/${id}`);
  }
  create(data) {
    return http.post("/PingjiState", data);
  }
  update(id, data) {
    return http.put(`/PingjiState/${id}`, data);
  }
  delete(id) {
    return http.delete(`/PingjiState/${id}`);
  }
}
export default new PingjiStateService();