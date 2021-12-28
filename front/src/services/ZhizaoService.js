import http from "../http-common";
class ZhizaoService {
  getAll() {
    return http.get("/Zhizao");
  }
  get(id) {
    return http.get(`/Zhizao/${id}`);
  }
  create(data) {
    return http.post("/Zhizao", data);
  }
  update(id, data) {
    return http.put(`/Zhizao/${id}`, data);
  }
  delete(id) {
    return http.delete(`/Zhizao/${id}`);
  }
//   deleteAll() {
//     return http.delete(`/tutorials`);
//   }
//   findByTitle(title) {
//     return http.get(`/tutorials?title=${title}`);
//   }
}
export default new ZhizaoService();