import http from "../http-common";
class QiyepingjiStateService {
  getAll(data) {
    return http.get("/QiyepingjiState",data);
  }
  get(id) {
    return http.get(`/QiyepingjiState/${id}`);
  }
  create(data) {
    return http.post("/QiyepingjiState", data);
  }
  update(id, data) {
    return http.put(`/QiyepingjiState/${id}`, data);
  }
  delete(id) {
    return http.delete(`/QiyepingjiState/${id}`);
  }
}
export default new QiyepingjiStateService();