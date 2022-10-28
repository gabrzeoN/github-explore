// import { useContext } from "react";

// import { UserContext } from "../contexts/UserContext";
// import githubProfile from "../services/githubProfile";
// import githubRepo from "../services/githubRepo";

// export default async function Request(){
//   const { setUser, setRepositories} = useContext(UserContext);
//     try {
//       const { data: user } = await githubProfile.get(username);
//       const { data: repositories } = await githubRepo.get(username);
//       localStorage.setItem("githubexplore_user", JSON.stringify(user));
//       localStorage.setItem("githubexplore_repositories", JSON.stringify(repositories));
//       setUser({...user});
//       setRepositories([...repositories]);
//       return user;
//     } catch (error) {
//       console.log(error.response.data);
//       alert("Profile not found!");
//     }
// }