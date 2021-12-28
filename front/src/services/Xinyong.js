import http from "../http-common";
class XinyongService {
  getAll() {
    return http.get("/xinyongA");
  }
  get(id) {
    return http.get(`/xinyongA/${id}`);
  }
  create(data) {
    return http.post("/xinyongA", data);
  }
  update(id, data) {
    return http.put(`/xinyongA/${id}`, data);
  }
  delete(id) {
    return http.delete(`/xinyongA/${id}`);
  }
//   deleteAll() {
//     return http.delete(`/tutorials`);
//   }
//   findByTitle(title) {
//     return http.get(`/tutorials?title=${title}`);
//   }
}
export default new XinyongService();