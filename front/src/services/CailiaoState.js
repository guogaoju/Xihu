import http from "../http-common";
class CailiaoStateService {
  getAll(data) {
    return http.get("/CailiaoState",data);
  }
  get(id) {
    return http.get(`/CailiaoState/${id}`);
  }
  create(data) {
    return http.post("/CailiaoState", data);
  }
  update(id, data) {
    return http.put(`/CailiaoState/${id}`, data);
  }
  delete(id) {
    return http.delete(`/CailiaoState/${id}`);
  }
}
export default new CailiaoStateService();