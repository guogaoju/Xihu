import http from "../http-common";
class QiyePingjiService {
  getAll() {
    return http.get("/QiyePingji");
  }
  get(id) {
    return http.get(`/QiyePingji/${id}`);
  }
  create(data) {
    return http.post("/QiyePingji", data);
  }
  update(id, data) {
    return http.put(`/QiyePingji/${id}`, data);
  }
  delete(id) {
    return http.delete(`/QiyePingji/${id}`);
  }
//   deleteAll() {
//     return http.delete(`/tutorials`);
//   }
//   findByTitle(title) {
//     return http.get(`/tutorials?title=${title}`);
//   }
}
export default new QiyePingjiService();