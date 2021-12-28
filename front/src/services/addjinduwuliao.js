import http from "../http-common";

class addjinduwuliao {
  getAll() {
    return http.get("/addjinduwuliao");
  }
  findByLog(jinduId) {
    return http.get(`/addjinduwuliao?jinduId=${jinduId}`);
  }
  get(id) {
    return http.get(`/addjinduwuliao/${id}`);
  }

  create(data) {
    return http.post("/addjinduwuliao", data);
  }

  update(id, data) {
    return http.put(`/addjinduwuliao/${id}`, data);
  }

  delete(id) {
    return http.delete(`/addjinduwuliao/${id}`);
  }

//   deleteAll() {
//     return http.delete(`/tutorials`);
//   }

//   findByTitle(title) {
//     return http.get(`/tutorials?title=${title}`);
//   }
}

export default new addjinduwuliao();