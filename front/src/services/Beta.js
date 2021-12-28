import http from "../http-common";
class BetaService {
  getAll() {
    return http.get("/Beta");
  }
  get(id) {
    return http.get(`/Beta/${id}`);
  }
  create(data) {
    return http.post("/Beta", data);
  }
  update(id, data) {
    return http.put(`/Beta/${id}`, data);
  }
  delete(id) {
    return http.delete(`/Beta/${id}`);
  }
//   deleteAll() {
//     return http.delete(`/tutorials`);
//   }
//   findByTitle(title) {
//     return http.get(`/tutorials?title=${title}`);
//   }
}
export default new BetaService();