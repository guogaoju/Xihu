import http from "../http-common";
class RukuService {
  getAll() {
    return http.get("/ruku");
  }
  get(id) {
    return http.get(`/ruku/${id}`);
  }
  create(data) {
    return http.post("/ruku", data);
  }
  update(id, data) {
    return http.put(`/ruku/${id}`, data);
  }
  delete(id) {
    return http.delete(`/ruku/${id}`);
  }
//   deleteAll() {
//     return http.delete(`/tutorials`);
//   }
//   findByTitle(title) {
//     return http.get(`/tutorials?title=${title}`);
//   }
}
export default new RukuService();