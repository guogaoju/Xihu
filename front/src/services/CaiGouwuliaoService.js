import http from "../http-common";
class CaiGouwuliaoService {
  getAll() {
    return http.get("/CaiGouwuliao");
  }
  get(id) {
    return http.get(`/CaiGouwuliao/${id}`);
  }
  create(data) {
    return http.post("/CaiGouwuliao", data);
  }
  update(id, data) {
    return http.put(`/CaiGouwuliao/${id}`, data);
  }
  delete(id) {
    return http.delete(`/CaiGouwuliao/${id}`);
  }
//   deleteAll() {
//     return http.delete(`/tutorials`);
//   }
//   findByTitle(title) {
//     return http.get(`/tutorials?title=${title}`);
//   }
}
export default new CaiGouwuliaoService();