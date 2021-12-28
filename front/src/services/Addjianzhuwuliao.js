import http from "../http-common";

class AddjianzhuWuliaoService {
  getAll() {
    return http.get("/AddjianzhuWuliao");
  }
  findByLog(jianzhuId) {
    return http.get(`/AddjianzhuWuliao?jianzhuId=${jianzhuId}`);
  }
  get(id) {
    return http.get(`/AddjianzhuWuliao/${id}`);
  }
  create(data) {
    return http.post("/AddjianzhuWuliao", data);
  }
  update(id, data) {
    return http.put(`/AddjianzhuWuliao/${id}`, data);
  }
  delete(id) {
    return http.delete(`/AddjianzhuWuliao/${id}`);
  }
//   deleteAll() {
//     return http.delete(`/tutorials`);
//   }

//   findByTitle(title) {
//     return http.get(`/tutorials?title=${title}`);
//   }
}
export default new AddjianzhuWuliaoService();