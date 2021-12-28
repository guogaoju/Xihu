import http from "../http-common";
class FinanceStateService {
  getAll(data) {
    return http.get("/FinanceState",data);
  }
  get(id) {
    return http.get(`/FinanceState/${id}`);
  }
  create(data) {
    return http.post("/FinanceState", data);
  }
  update(id, data) {
    return http.put(`/FinanceState/${id}`, data);
  }
  delete(id) {
    return http.delete(`/FinanceState/${id}`);
  }
}
export default new FinanceStateService();