import http from "../http-common";
class WuliaoTypeStateService {
  getAll(data) {
    return http.get("/WuliaoTypeState",data);
  }
  get(id) {
    return http.get(`/WuliaoTypeState/${id}`);
  }
  create(data) {
    return http.post("/WuliaoTypeState", data);
  }
  update(id, data) {
    return http.put(`/WuliaoTypeState/${id}`, data);
  }
  delete(id) {
    return http.delete(`/WuliaoTypeState/${id}`);
  }
}
export default new WuliaoTypeStateService();