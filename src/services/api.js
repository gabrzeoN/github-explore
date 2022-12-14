import axios from "axios";

const instance = axios.create({
  baseURL: (process.env.REACT_APP_BASE_URL || "https://api.github.com/users")
});

export default instance;
