const player = new Player();

onload = () => {
  if (player.token && player.token != "") {
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
  player.register = username.value;

  //use utils
  clearing();
  displaying();
  directing("#start", 1000);
}

function normal(param) {
  player.normalRolling = param
  player.normal ;
}
function quick(param){
  player.quickRolling = param;
  player.normal;
}

function logout() {
  player.logout();
  location.reload();
}
