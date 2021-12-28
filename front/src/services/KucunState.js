import http from "../http-common";
class KucunStateService {
  getAll(data) {
    return http.get("/KucunState",data);
  }
  get(id) {
    return http.get(`/KucunState/${id}`);
  }
  create(data) {
    return http.post("/KucunState", data);
  }
  update(id, data) {
    return http.put(`/KucunState/${id}`, data);
  }
  delete(id) {
    return http.delete(`/KucunState/${id}`);
  }
}
export default new KucunStateService();