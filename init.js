const username = document.getElementById('username');
const registerForm = document.getElementById('registerForm');
const logoutForm = document.getElementById('logout');
const startSession = document.getElementById('start');
const box1 = document.getElementById('box1')
const box2 = document.getElementById('box2');
const box3 = document.getElementById('box3');
const rewardImage = document.getElementById('imgReward');
const defaultOption = ['😍','😎','😯'];
const player = new Player();
box1.textContent = defaultOption[0];
box2.textContent = defaultOption[1];
box3.textContent = defaultOption[2];

const dice = ()=>{
  let gacha = [];
  for(let i =0;i<defaultOption.length;i++){
    const roll = defaultOption[~~(Math.random() * defaultOption.length)];
    gacha.push(roll);
  }
  return gacha;
}
const winner = ()=>{
  if(box1.textContent == box2.textContent && box1.textContent == box3.textContent){
    location.href='#reward';
    reward();
  }else{
    console.log('salah');
  }
}

const reward = ()=>{
  fetch('https://zoo-animal-api.herokuapp.com/animals/rand').then(x=> x.json()).then(result => {
    console.log(`Hasil reward anda`,result);
    let text = document.createElement('h1');
    text.textContent = result.name;
    const img = new Image(200,200);
    img.src = result.image_link
    rewardImage.appendChild(img)
    rewardImage.appendChild(text);
  })
}

const start = ()=>{
  const rolling = setInterval(()=>{
    const result = dice();
    console.log('acak Gambar...',result);
      box1.textContent = result[0];
      box2.textContent = result[1];
      box3.textContent = result[2];
  },100)
  setTimeout(()=>{
    clearInterval(rolling);
    winner()
  },2000)
} 

onload = ()=>{
  const Session = sessionStorage.getItem('Username');
  if(Session  && Session != "null" ){
    registerForm.style.display ='none';
    logoutForm.style.display ='block';
  }else{
    registerForm.style.display ='block';
    logoutForm.style.display ='none';
  }
}
const register = ()=>{
  player.username = username.value;
  player.Register();
}

const Logout = ()=>{
  player.logout();
}



