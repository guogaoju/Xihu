import http from "../http-common";
class FinanceStatelogService {
  getAll() {
    return http.get("/FinanceStatelog");
  }
  findByLog(financeId) {
    return http.get(`/FinanceStatelog?financeId=${financeId}`);
  }
  get(id) {
    return http.get(`/FinanceStatelog/${id}`);
  }
  create(data) {
    return http.post("/FinanceStatelog", data);
  }
  update(id, data) {
    return http.put(`/FinanceStatelog/${id}`, data);
  }
  delete(id) {
    return http.delete(`/FinanceStatelog/${id}`);
  }
}
export default new FinanceStatelogService();