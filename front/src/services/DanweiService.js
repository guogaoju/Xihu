import http from "../http-common";
class DanweiService {
  getAll() {
    return http.get("/Danwei");
  }
  get(id) {
    return http.get(`/Danwei/${id}`);
  }
  create(data) {
    return http.post("/Danwei", data);
  }
  update(id, data) {
    return http.put(`/Danwei/${id}`, data);
  }
  delete(id) {
    return http.delete(`/Danwei/${id}`);
  }
//   deleteAll() {
//     return http.delete(`/tutorials`);
//   }
//   findByTitle(title) {
//     return http.get(`/tutorials?title=${title}`);
//   }
}
export default new DanweiService();