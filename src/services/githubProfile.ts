import api from "./api";

const getGithubProfile = (username: string) => {
  const profile = api.get(`/${username}`);
}

export default getGithubProfile;