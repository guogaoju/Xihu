import http from "../http-common";
class FukuanService {
  getAll() {
    return http.get("/Fukuan");
  }
  get(id) {
    return http.get(`/Fukuan/${id}`);
  }
  create(data) {
    return http.post("/Fukuan", data);
  }
  update(id, data) {
    return http.put(`/Fukuan/${id}`, data);
  }
  delete(id) {
    return http.delete(`/Fukuan/${id}`);
  }
//   deleteAll() {
//     return http.delete(`/tutorials`);
//   }
//   findByTitle(title) {
//     return http.get(`/tutorials?title=${title}`);
//   }
}
export default new FukuanService();