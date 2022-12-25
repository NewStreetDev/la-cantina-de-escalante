import axios from "axios";

export const getLoginCredentialsRequest = async (email, password) => 
  await axios.get(`/Login/${email}/${password}`);

