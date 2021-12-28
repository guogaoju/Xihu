import http from "../http-common";
class ChukuStateService {
  getAll(data) {
    return http.get("/ChukuState",data);
  }
  get(id) {
    return http.get(`/ChukuState/${id}`);
  }
  create(data) {
    return http.post("/ChukuState", data);
  }
  update(id, data) {
    return http.put(`/ChukuState/${id}`, data);
  }
  delete(id) {
    return http.delete(`/ChukuState/${id}`);
  }
}
export default new ChukuStateService();