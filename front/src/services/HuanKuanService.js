import http from "../http-common";
class HuanKuanService {
  getAll() {
    return http.get("/HuanKuan");
  }
  get(id) {
    return http.get(`/HuanKuan/${id}`);
  }
  create(data) {
    return http.post("/HuanKuan", data);
  }
  update(id, data) {
    return http.put(`/HuanKuan/${id}`, data);
  }
  delete(id) {
    return http.delete(`/HuanKuan/${id}`);
  }
//   deleteAll() {
//     return http.delete(`/tutorials`);
//   }
  findByTitle(HuankuanStateId) {
    return http.get(`/HuanKuan?HuankuanStateId=${HuankuanStateId}`);
  }
}
export default new HuanKuanService();