import http from "../http-common";
class WuliaoStateService {
  getAll(data) {
    return http.get("/WuliaoState",data);
  }
  get(id) {
    return http.get(`/WuliaoState/${id}`);
  }
  create(data) {
    return http.post("/WuliaoState", data);
  }
  update(id, data) {
    return http.put(`/WuliaoState/${id}`, data);
  }
  delete(id) {
    return http.delete(`/WuliaoState/${id}`);
  }
}
export default new WuliaoStateService();