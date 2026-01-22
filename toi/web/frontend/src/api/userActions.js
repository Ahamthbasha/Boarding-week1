import api from "../axios/axios";

const createUser = async(data)=>{
        const response = await api.post("/user/createUser",data)
        return response
}

export default createUser