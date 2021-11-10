 import  apiClient  from "./apiClient";

 
 export const  getAllUsers = () => apiClient().get("users");