import axios from "axios";

export function Getuser(){
    return axios.get("http://localhost:3000/user")
}

export function Getuserbyid(id){
    return axios.get(`http://localhost:3000/user/${id}`);
}

export function Postuser(data){
    return axios.post("http://localhost:3000/user",data)
}

export function Deleteuserbyid(id){
    return axios.delete(`http://localhost:3000/user/${id}`);
}

export function Updateuserbyid(id,data){
    return axios.put(`http://localhost:3000/user/${id}`,data)
}