import http from "../http-common";
class HuankuanStateService {
  getAll(data) {
    return http.get("/HuankuanState",data);
  }
  get(id) {
    return http.get(`/HuankuanState/${id}`);
  }
  create(data) {
    return http.post("/HuankuanState", data);
  }
  update(id, data) {
    return http.put(`/HuankuanState/${id}`, data);
  }
  delete(id) {
    return http.delete(`/HuankuanState/${id}`);
  }
}
export default new HuankuanStateService();