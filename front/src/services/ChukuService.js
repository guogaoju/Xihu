import http from "../http-common";
class ChukuService {
  getAll() {
    return http.get("/chuku");
  }
  get(id) {
    return http.get(`/chuku/${id}`);
  }
  create(data) {
    return http.post("/chuku", data);
  }
  update(id, data) {
    return http.put(`/chuku/${id}`, data);
  }
  delete(id) {
    return http.delete(`/chuku/${id}`);
  }
//   deleteAll() {
//     return http.delete(`/tutorials`);
//   }
//   findByTitle(title) {
//     return http.get(`/tutorials?title=${title}`);
//   }
}
export default new ChukuService();