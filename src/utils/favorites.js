function check(username, favorites){
  for(let i = 0; i < favorites.length; i++){
    if(favorites[i]?.login === username) return true;
  }
  console.log(favorites);
  return false;
}

function add(user, favorites, setFavorites){
  setFavorites([...favorites, {login: user.login, avatar_url: user.avatar_url}]);
  localStorage.setItem("githubexplore_favorites", JSON.stringify(user));
};

function remove(user, favorites, setFavorites){

};

const favoritesUtils = {
  check
}

export default favoritesUtils;