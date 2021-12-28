import http from "../http-common";
class JianzhuService {
  getAll() {
    return http.get("/Jianzhu");
  }
  get(id) {
    return http.get(`/Jianzhu/${id}`);
  }
  create(data) {
    return http.post("/Jianzhu", data);
  }
  update(id, data) {
    return http.put(`/Jianzhu/${id}`, data);
  }
  delete(id) {
    return http.delete(`/Jianzhu/${id}`);
  }
//   deleteAll() {
//     return http.delete(`/tutorials`);
//   }
//   findByTitle(title) {
//     return http.get(`/tutorials?title=${title}`);
//   }
}
export default new JianzhuService();