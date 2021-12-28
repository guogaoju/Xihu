import http from "../http-common";

class addWuliaoService {
  getAll() {
    return http.get("/addWuliao");
  }
  findByLog(zhizaoId) {
    return http.get(`/addWuliao?zhizaoId=${zhizaoId}`);
  }
  get(id) {
    return http.get(`/addWuliao/${id}`);
  }
  create(data) {
    return http.post("/addWuliao", data);
  }
  update(id, data) {
    return http.put(`/addWuliao/${id}`, data);
  }
  delete(id) {
    return http.delete(`/addWuliao/${id}`);
  }
//   deleteAll() {
//     return http.delete(`/tutorials`);
//   }

//   findByTitle(title) {
//     return http.get(`/tutorials?title=${title}`);
//   }
}
export default new addWuliaoService();