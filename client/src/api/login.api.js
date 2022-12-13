import axios from "axios";

export const getLoginCredentialsRequest = async (email, password) =>
  await axios.get(`http://localhost:4000/Login/${email}/${password}`);


  