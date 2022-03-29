import * as axios from "axios";

const axiosInstance = axios.create({
   withCredentials: true,
   baseURL: "https://social-network.samuraijs.com/api/1.0/",
   headers: {
      "API-KEY": "3181eb67-b057-4405-a492-ddce171ca073",
   },
});

export const usersAPI = {
   getUsers(currentPage, size) {
      return axiosInstance
         .get(`users?page=${currentPage}&count=${size}`)
         .then((res) => {
            return res.data;
         });
   },
   follow(id) {
      return axiosInstance.post(`follow/${id}`).then((res) => {
         return res.data;
      });
   },
   unFollow(id) {
      return axiosInstance.delete(`follow/${id}`).then((res) => {
         return res.data;
      });
   },
   getFollowedUsers() {
      return axiosInstance
         .get(`users/?page=1&count=99&friend=true`)
         .then((res) => {
            return res.data;
         });
   },
};
export const profileAPI = {
   getUserProfile(userId) {
      return axiosInstance.get(`profile/${userId}`).then((res) => {
         console.log(res.data);
         return res.data;
      });
   },
   getUserStatus(userId) {
      return axiosInstance.get(`profile/status/${userId}`).then((res) => {
         return res;
      });
   },
   updateUserStatus(status) {
      return axiosInstance.put(`profile/status`, { status: status });
   },
   setProfilePhoto(photoFile) {
      const form = new FormData();
      form.append("image", photoFile);
      return axiosInstance
         .put("/profile/photo", form, {
            headers: {
               "Content-Type": `multipart/form-data;`,
            },
         })
         .then((res) => {
            return res;
         });
   },
};
export const loginAPI = {
   authMe() {
      return axiosInstance.get("auth/me").then((res) => {
         return res;
      });
   },
   login(email, password, rememberMe) {
      return axiosInstance.post(`auth/login`, { email, password, rememberMe });
   },
   logout() {
      return axiosInstance.delete(`auth/login`);
   },
};
