import api from "./api";

const get = (username: string) => {
  const profile = api.get(`/${username}`);
  return profile;
}

const githubProfile = {
  get
}

export default githubProfile;