import http from "../http-common";
class DeptService {
  getAll() {
    return http.get("/Dept");
  }
  get(id) {
    return http.get(`/Dept/${id}`);
  }
  create(data) {
    return http.post("/Dept", data);
  }
  update(id, data) {
    return http.put(`/Dept/${id}`, data);
  }
  delete(id) {
    return http.delete(`/Dept/${id}`);
  }
}
export default new DeptService();