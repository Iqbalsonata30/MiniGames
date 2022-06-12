const player = new Player();

onload = () => {
  if (player.token && player.token != "") {
    console.log("token: ", player.token);
    //use utils
    clearing();
    displaying();
    directing("#start", 1000);
  } else {
    resetting();
  }
};

function register() {
  //initiating
  player.register = usernameInput.value;

  //use utils
  clearing();
  displaying();
  directing("#start", 1000);
}

function start() {
  player.start;
}

function logout() {
  player.logout();
  location.reload();
}
