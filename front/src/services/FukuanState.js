import http from "../http-common";
class FukuanStateService {
  getAll(data) {
    return http.get("/FukuanState",data);
  }
  get(id) {
    return http.get(`/FukuanState/${id}`);
  }
  create(data) {
    return http.post("/FukuanState", data);
  }
  update(id, data) {
    return http.put(`/FukuanState/${id}`, data);
  }
  delete(id) {
    return http.delete(`/FukuanState/${id}`);
  }
}
export default new FukuanStateService();