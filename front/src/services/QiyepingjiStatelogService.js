import http from "../http-common";
class QiyepingjiStatelogService {
  getAll() {
    return http.get("/QiyepingjiStatelog");
  }
  findByLog(qiyepingjiId) {
    return http.get(`/QiyepingjiStatelog?qiyepingjiId=${qiyepingjiId}`);
  }
  get(id) {
    return http.get(`/QiyepingjiStatelog/${id}`);
  }
  create(data) {
    return http.post("/QiyepingjiStatelog", data);
  }
  update(id, data) {
    return http.put(`/QiyepingjiStatelog/${id}`, data);
  }
  delete(id) {
    return http.delete(`/QiyepingjiStatelog/${id}`);
  }
}
export default new QiyepingjiStatelogService();