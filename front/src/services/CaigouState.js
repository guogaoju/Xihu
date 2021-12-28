import http from "../http-common";
class CaigouStateService {
  getAll(data) {
    return http.get("/CaigouState",data);
  }
  get(id) {
    return http.get(`/CaigouState/${id}`);
  }
  create(data) {
    return http.post("/CaigouState", data);
  }
  update(id, data) {
    return http.put(`/CaigouState/${id}`, data);
  }
  delete(id) {
    return http.delete(`/CaigouState/${id}`);
  }
}
export default new CaigouStateService();