import axios from "axios";

export function Getuser(){
    return axios.get("https://manageusers-be.herokuapp.com/user")
}

export function Getuserbyid(id){
    return axios.get(`https://manageusers-be.herokuapp.com/user/${id}`);
}

export function Postuser(data){
    return axios.post("https://manageusers-be.herokuapp.com/user",data)
}

export function Deleteuserbyid(id){
    return axios.delete(`https://manageusers-be.herokuapp.com/user/${id}`);
}

export function Updateuserbyid(id,data){
    return axios.put(`https://manageusers-be.herokuapp.com/user/${id}`,data)
}