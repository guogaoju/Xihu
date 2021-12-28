import http from "../http-common";
class CaiGouService {
  getAll() {
    return http.get("/CaiGou");
  }
  get(id) {
    return http.get(`/CaiGou/${id}`);
  }
  create(data) {
    return http.post("/CaiGou", data);
  }
  update(id, data) {
    return http.put(`/CaiGou/${id}`, data);
  }
  delete(id) {
    return http.delete(`/CaiGou/${id}`);
  }
//   deleteAll() {
//     return http.delete(`/tutorials`);
//   }
//   findByTitle(title) {
//     return http.get(`/tutorials?title=${title}`);
//   }
}
export default new CaiGouService();