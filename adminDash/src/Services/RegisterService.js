import http from  "./AxiosContext"

const create = data =>{

    return http.post('/userc/register',data)
}


export default {
 create
}