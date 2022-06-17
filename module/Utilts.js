//declaring
let title = document.getElementById("title");
let username = document.getElementById("username");
let registerForm = document.getElementById("registerForm");
let logoutButton = document.getElementById("logoutButton");
let startSection = document.getElementById("start");
let rewardSection = document.getElementById("reward");
let goTopSection = document.getElementById("top");
const stopButton = document.getElementById("stop");
const navbarName = document.getElementsByClassName("navigation")[0];
const startNavbar = document.getElementsByClassName("nav")[1];
const rewardNavbar = document.getElementsByClassName("nav")[2];
let imgReward = document.getElementById("imgReward");
let filSaldo = document.getElementById('dftr');
let saldo = document.getElementById("saldo");
let nilai = document.getElementById("nilai");
let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
let box3 = document.getElementById("box3");


const default_option = ["💀", "👽", "👻"];


function resetting() {
  startNavbar.style.display = "none";
  rewardNavbar.style.display = "none";
  startSection.style.display = "none";
  goTopSection.style.display = "none";
  rewardSection.style.display = "none";
}
filSaldo.addEventListener('click',()=>{
  swal({
    title: "Silahkan Deposit terlebih dahulu !",
    icon: "info",
    buttons: true,
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
      swal("  1x Spin = Rp.2000\n\tMinimal isi saldo Rp.2000 \n Jika saldo kurang dari 2000 akan dianggap habis", {
        content: "input",
      })
      .then((value) => {
        let tipeSaldo = parseInt(value);
        if(isNaN(tipeSaldo) || value == ''){
          sessionStorage.removeItem('token');
          location.reload();
        }else{
          if(value <= 2000){
            swal("Minimal Isi Saldo Rp 2000", "", "warning");
            sessionStorage.removeItem('token');
            setTimeout(()=>{
              location.reload();
            },1000);
          }else{
            player.saldo = value;
          }
        }
      });
    } else {
      location.reload();
    }
  });
})
function clearing() {
  username.value = "";
  registerForm.style.display = "none";
}

function displaying() {
  title.textContent = "Hi, " + sessionStorage.getItem("token");
  document.title = "MiniGames - " + sessionStorage.getItem("token");
  box1.textContent = default_option[0];
  box2.textContent = default_option[1];
  box3.textContent = default_option[2];
  startNavbar.style.display = "block";
  startSection.style.display = "block";
  logoutButton.style.display = "block";
  rewardNavbar.style.display = "none";
  rewardSection.style.display = "none";
  goTopSection.style.display = "flex";
}

function directing(url, time) {
  setTimeout(() => {
    location.href = url;
  }, time);
}
