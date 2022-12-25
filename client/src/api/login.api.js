import axios from "axios";
import {DOMINIO} from "../../../server/config.js"

export const getLoginCredentialsRequest = async (email, password) =>
  await axios.get(`${DOMINIO}/Login/${email}/${password}`);


  