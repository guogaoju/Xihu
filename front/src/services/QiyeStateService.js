import http from "../http-common";
class QiyeStateService {
  getAll(data) {
    return http.get("/QiyeState",data);
  }
  get(id) {
    return http.get(`/QiyeState/${id}`);
  }
  create(data) {
    return http.post("/QiyeState", data);
  }
  update(id, data) {
    return http.put(`/QiyeState/${id}`, data);
  }
  delete(id) {
    return http.delete(`/QiyeState/${id}`);
  }
}
export default new QiyeStateService();