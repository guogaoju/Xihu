import http from "../http-common";
class DangeService {
  getAll() {
    return http.get("/Dange");
  }
  get(id) {
    return http.get(`/Dange/${id}`);
  }
  create(data) {
    return http.post("/Dange", data);
  }
  update(id, data) {
    return http.put(`/Dange/${id}`, data);
  }
  delete(id) {
    return http.delete(`/Dange/${id}`);
  }
//   deleteAll() {
//     return http.delete(`/tutorials`);
//   }
//   findByTitle(title) {
//     return http.get(`/tutorials?title=${title}`);
//   }
}
export default new DangeService();