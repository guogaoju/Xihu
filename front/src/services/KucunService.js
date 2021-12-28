import http from "../http-common";
class KucunService {
  getAll() {
    return http.get("/kucun");
  }
  get(id) {
    return http.get(`/kucun/${id}`);
  }
  create(data) {
    return http.post("/kucun", data);
  }
  update(id, data) {
    return http.put(`/kucun/${id}`, data);
  }
  delete(id) {
    return http.delete(`/kucun/${id}`);
  }
//   deleteAll() {
//     return http.delete(`/tutorials`);
//   }
//   findByTitle(title) {
//     return http.get(`/tutorials?title=${title}`);
//   }
}
export default new KucunService();