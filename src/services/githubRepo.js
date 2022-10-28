import api from "./api";

const get = (username) => {
  const profile = api.get(`/${username}/repos`);
  return profile;
}

const githubRepo = {
  get
}

export default githubRepo;