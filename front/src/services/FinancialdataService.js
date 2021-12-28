import http from "../http-common";
class FinancialdataService {
  getAll() {
    return http.get("/Finance");
  }
  get(id) {
    return http.get(`/Finance/${id}`);
  }
  create(data) {
    return http.post("/Finance", data);
  }
  update(id, data) {
    return http.put(`/Finance/${id}`, data);
  }
  delete(id) {
    return http.delete(`/Finance/${id}`);
  }
//   deleteAll() {
//     return http.delete(`/tutorials`);
//   }
//   findByTitle(title) {
//     return http.get(`/tutorials?title=${title}`);
//   }
}
export default new FinancialdataService();