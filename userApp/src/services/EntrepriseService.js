import http from "./AxiosContext";
const getAll = () => {
  return http.get("/usersr/getAll");
};
const get = id => {
  return http.get(`/usersr/getByid/${id}`);
};
const create = data => {
  return http.post("/usersr/register", data);
};
const update = (id, data) => {
  return http.put(`/usersr/update/${id}`, data);
};
const remove = id => {
  return http.delete(`/usersr/delete/${id}`);
};
const findByName = title => {
    return http.get(`/usersr/getByname=${title}`);
  };
  export default {
    getAll,
    get,
    create,
    update,
    remove,
    findByName
  };