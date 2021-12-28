import http from "../http-common";
class AlphaService {
  getAll() {
    return http.get("/Alpha");
  }
  get(id) {
    return http.get(`/Alpha/${id}`);
  }
  create(data) {
    return http.post("/Alpha", data);
  }
  update(id, data) {
    return http.put(`/Alpha/${id}`, data);
  }
  delete(id) {
    return http.delete(`/Alpha/${id}`);
  }
//   deleteAll() {
//     return http.delete(`/tutorials`);
//   }
//   findByTitle(title) {
//     return http.get(`/tutorials?title=${title}`);
//   }
}
export default new AlphaService();