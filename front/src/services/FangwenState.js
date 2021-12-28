import http from "../http-common";
class FangwenStateService {
  getAll(data) {
    return http.get("/FangwenState",data);
  }
  get(id) {
    return http.get(`/FangwenState/${id}`);
  }
  create(data) {
    return http.post("/FangwenState", data);
  }
  update(id, data) {
    return http.put(`/FangwenState/${id}`, data);
  }
  delete(id) {
    return http.delete(`/FangwenState/${id}`);
  }
}
export default new FangwenStateService();