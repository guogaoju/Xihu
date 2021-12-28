import http from "../http-common";
class JinduStateService {
  getAll(data) {
    return http.get("/JinduState",data);
  }
  get(id) {
    return http.get(`/JinduState/${id}`);
  }
  create(data) {
    return http.post("/JinduState", data);
  }
  update(id, data) {
    return http.put(`/JinduState/${id}`, data);
  }
  delete(id) {
    return http.delete(`/JinduState/${id}`);
  }
}
export default new JinduStateService();