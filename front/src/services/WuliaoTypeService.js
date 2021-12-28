import http from "../http-common";
class WuliaoTypeService {
  getAll() {
    return http.get("/WuliaoType");
  }
  get(id) {
    return http.get(`/WuliaoType/${id}`);
  }
  create(data) {
    return http.post("/WuliaoType", data);
  }
  update(id, data) {
    return http.put(`/WuliaoType/${id}`, data);
  }
  delete(id) {
    return http.delete(`/WuliaoType/${id}`);
  }
//   deleteAll() {
//     return http.delete(`/tutorials`);
//   }
//   findByTitle(title) {
//     return http.get(`/tutorials?title=${title}`);
//   }
}
export default new WuliaoTypeService();