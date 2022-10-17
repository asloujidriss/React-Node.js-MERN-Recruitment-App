import http from "./AxiosContext";
const getAll = () => {
  return http.get("/usersc/getAll");
};
const get = id => {
  return http.get(`/usersc/getByid/${id}`);
};
const create = data => {
  return http.post("/usersc/register", data);
};
const update = (id, data) => {
  return http.put(`/usersc/update/${id}`, data);
};
const remove = id => {
  return http.delete(`/usersc/delete/${id}`);
};
const findByName = title => {
    return http.get(`/usersc/getByname=${title}`);
  };
  export default {
    getAll,
    get,
    create,
    update,
    remove,
    findByName
  };