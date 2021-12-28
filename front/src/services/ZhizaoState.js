import http from "../http-common";
class ZhizaoStateService {
  getAll(data) {
    return http.get("/ZhizaoState",data);
  }
  get(id) {
    return http.get(`/ZhizaoState/${id}`);
  }
  create(data) {
    return http.post("/ZhizaoState", data);
  }
  update(id, data) {
    return http.put(`/ZhizaoState/${id}`, data);
  }
  delete(id) {
    return http.delete(`/ZhizaoState/${id}`);
  }
}
export default new ZhizaoStateService();