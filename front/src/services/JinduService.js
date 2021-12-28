import http from "../http-common";
class JinduService {
  getAll() {
    return http.get("/Jindu");
  }
  get(id) {
    return http.get(`/Jindu/${id}`);
  }
  create(data) {
    return http.post("/Jindu", data);
  }
  update(id, data) {
    return http.put(`/Jindu/${id}`, data);
  }
  delete(id) {
    return http.delete(`/Jindu/${id}`);
  }
//   deleteAll() {
//     return http.delete(`/tutorials`);
//   }
//   findByTitle(title) {
//     return http.get(`/tutorials?title=${title}`);
//   }
}
export default new JinduService();