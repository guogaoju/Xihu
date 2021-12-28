import http from "../http-common";
class PingjiService {
  getAll() {
    return http.get("/Pingji");
  }
  get(id) {
    return http.get(`/Pingji/${id}`);
  }
  create(data) {
    return http.post("/Pingji", data);
  }
  update(id, data) {
    return http.put(`/Pingji/${id}`, data);
  }
  delete(id) {
    return http.delete(`/Pingji/${id}`);
  }
//   deleteAll() {
//     return http.delete(`/tutorials`);
//   }
//   findByTitle(title) {
//     return http.get(`/tutorials?title=${title}`);
//   }
}
export default new PingjiService();