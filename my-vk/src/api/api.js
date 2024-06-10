import axios from "axios";

const instance = axios.create({

    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "5e0dd846-f47c-4722-af37-a3cdaf183bd4"
      },

});

export const userAPI ={
    getUsers(currentPage=1, pageSize=10) {

    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return response.data;
        });
    },
    follow(userID) {
        return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userID}`)
    },
    unfollow(userID) {
        return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userID}`)
    },
}