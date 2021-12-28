import http from "../http-common";
class JianzhuStateService {
  getAll(data) {
    return http.get("/JianzhuState",data);
  }
  get(id) {
    return http.get(`/JianzhuState/${id}`);
  }
  create(data) {
    return http.post("/JianzhuState", data);
  }
  update(id, data) {
    return http.put(`/JianzhuState/${id}`, data);
  }
  delete(id) {
    return http.delete(`/JianzhuState/${id}`);
  }
}
export default new JianzhuStateService();