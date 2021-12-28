import http from "../http-common";
class RoleService {
  getAll() {
    return http.get("/Role");
  }
  get(id) {
    return http.get(`/Role/${id}`);
  }
  create(data) {
    return http.post("/Role", data);
  }
  update(id, data) {
    return http.put(`/Role/${id}`, data);
  }
  delete(id) {
    return http.delete(`/Role/${id}`);
  }
}
export default new RoleService();