import http from "../http-common";
class WuliaoService {
  // img1(data) {
  //   return http.post("/upload",data);
  // }
  getAll() {
    return http.get("/Wuliao");
  }
  get(id) {
    return http.get(`/Wuliao/${id}`);
  }
  create(data) {
    return http.post("/Wuliao", data);
  }
  update(id, data) {
    return http.put(`/Wuliao/${id}`, data);
  }
  delete(id) {
    return http.delete(`/Wuliao/${id}`);
  }
//   deleteAll() {
//     return http.delete(`/tutorials`);
//   }
//   findByTitle(title) {
//     return http.get(`/tutorials?title=${title}`);
//   }
}
export default new WuliaoService();