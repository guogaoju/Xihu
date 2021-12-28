import http from "../http-common";
class ImageService {
  getAll() {
    return http.get("/Image");
  }
  get(id) {
    return http.get(`/Image/${id}`);
  }
  findByLog(jinduId) {
    return http.get(`/Image?jinduId=${jinduId}`);
  }
  getJian(deptId,name) {
    return http.get(`/Image/img/${logid}${name}`);
  }
  create(data) {
    return http.post("/Image", data);
  }
  update(id, data) {
    return http.put(`/Image/${id}`, data);
  }
  delete(id) {
    return http.delete(`/Image/${id}`);
  }
}
export default new ImageService();