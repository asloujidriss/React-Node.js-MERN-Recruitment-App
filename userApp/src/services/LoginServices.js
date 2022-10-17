import http from "./AxiosContext"
const create= data =>{
    return http.post("/user/login", data)
}
export default{
    create
}