import http from "../http-common";
class RongziBService {
  getAll() {
    return http.get("/RongziB");
  }
  get(id) {
    return http.get(`/RongziB/${id}`);
  }
  create(data) {
    return http.post("/RongziB", data);
  }
  update(id, data) {
    return http.put(`/RongziB/${id}`, data);
  }
  delete(id) {
    return http.delete(`/RongziB/${id}`);
  }
//   deleteAll() {
//     return http.delete(`/tutorials`);
//   }
//   findByTitle(title) {
//     return http.get(`/tutorials?title=${title}`);
//   }
}
export default new RongziBService();