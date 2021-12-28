import http from "../http-common";
class HexinStateService {
  getAll(data) {
    return http.get("/corefirmState",data);
  }
  get(id) {
    return http.get(`/corefirmState/${id}`);
  }
  create(data) {
    return http.post("/corefirmState", data);
  }
  update(id, data) {
    return http.put(`/corefirmState/${id}`, data);
  }
  delete(id) {
    return http.delete(`/corefirmState/${id}`);
  }
}
export default new HexinStateService();