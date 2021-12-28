import http from "../http-common";
class FukuanService {
  getAll() {
    return http.get("/Fukuanwuliao");
  }
  findByLog(fukuanId) {
    return http.get(`/Fukuanwuliao?fukuanId=${fukuanId}`);
  }
  get(id) {
    return http.get(`/Fukuanwuliao/${id}`);
  }
  create(data) {
    return http.post("/Fukuanwuliao", data);
  }
  update(id, data) {
    return http.put(`/Fukuanwuliao/${id}`, data);
  }
  delete(id) {
    return http.delete(`/Fukuanwuliao/${id}`);
  }
//   deleteAll() {
//     return http.delete(`/tutorials`);
//   }
//   findByTitle(title) {
//     return http.get(`/tutorials?title=${title}`);
//   }
}
export default new FukuanService();