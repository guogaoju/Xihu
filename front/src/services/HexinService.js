import http from "../http-common";
class HexinService {
  getAll() {
    return http.get("/Hexin");
  }
  get(id) {
    return http.get(`/Hexin/${id}`);
  }
  create(data) {
    return http.post("/Hexin", data);
  }
  update(id, data) {
    return http.put(`/Hexin/${id}`, data);
  }
  delete(id) {
    return http.delete(`/Hexin/${id}`);
  }
//   deleteAll() {
//     return http.delete(`/tutorials`);
//   }
//   findByTitle(title) {
//     return http.get(`/tutorials?title=${title}`);
//   }
}
export default new HexinService();