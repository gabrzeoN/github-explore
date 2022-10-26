import api from "./api";

const getProfile = (username: string) => {
  const profile = api.get(`/${username}`);
}