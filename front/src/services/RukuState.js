import http from "../http-common";
class RukuStateService {
  getAll(data) {
    return http.get("/RukuState",data);
  }
  get(id) {
    return http.get(`/RukuState/${id}`);
  }
  create(data) {
    return http.post("/RukuState", data);
  }
  update(id, data) {
    return http.put(`/RukuState/${id}`, data);
  }
  delete(id) {
    return http.delete(`/RukuState/${id}`);
  }
}
export default new RukuStateService();