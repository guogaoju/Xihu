import http from "../http-common";
class CailiaogysService {
  getAll() {
    return http.get("/Cailiaogys");
  }
  get(id) {
    return http.get(`/Cailiaogys/${id}`);
  }
  create(data) {
    return http.post("/Cailiaogys", data);
  }
  update(id, data) {
    return http.put(`/Cailiaogys/${id}`, data);
  }
  delete(id) {
    return http.delete(`/Cailiaogys/${id}`);
  }
//   deleteAll() {
//     return http.delete(`/tutorials`);
//   }
//   findByTitle(title) {
//     return http.get(`/tutorials?title=${title}`);
//   }
}
export default new CailiaogysService();