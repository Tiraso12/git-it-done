var getUserRepos = function() {
    fetch("https://api.github.com/users/octocat/repos");
};


getUserRepos();

var response = {
    location: "San Francisco",
}

console.log(response.location);