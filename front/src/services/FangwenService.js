import http from "../http-common";
class FangwenService {
  getAll() {
    return http.get("/Fangwen");
  }
  get(id) {
    return http.get(`/Fangwen/${id}`);
  }
  create(data) {
    return http.post("/Fangwen", data);
  }
  update(id, data) {
    return http.put(`/Fangwen/${id}`, data);
  }
  delete(id) {
    return http.delete(`/Fangwen/${id}`);
  }
//   deleteAll() {
//     return http.delete(`/tutorials`);
//   }
//   findByTitle(title) {
//     return http.get(`/tutorials?title=${title}`);
//   }
}
export default new FangwenService();