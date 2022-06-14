class Player {
  constructor() {
    this._token = sessionStorage.getItem("token");
    this._isWin = false;
    this._gacha = [];
    this._Score = 0;
    this._Stop = 100;
  }

  set token(_token) {
    return (this._token = _token);
  }

  get token() {
    return this._token;
  }

  set register(_username) {
    const rand = ~~(Math.random() * _username.length * 100);
    const session = sessionStorage.setItem("token", `${_username}@${rand}`);
    return (this.token = session);
  }

  set gacha(option) {
    let gacha = [];
    for (let i = 0; i < option.length; i++) {
      const generating = option[~~(Math.random() * option.length)];
      gacha.push(generating);
    }
    return (this._gacha = gacha);
  }

  get gacha() {
    return this._gacha;
  }
  set stop(stop){
    return (this._Stop = stop);
  }
  get stop(){
    return this._Stop;
  }
  get start() {
    const rolling = setInterval(() => {
      this.gacha = default_option;
      nilai.textContent = this._Score;
      box1.textContent = this.gacha[0];
      box2.textContent = this.gacha[1];
      box3.textContent = this.gacha[2];
    }, 50);
    console.log(this.stop);
    setTimeout(() => {
      clearInterval(rolling);
      const box = [box1.textContent, box2.textContent, box3.textContent];
      this.scorePoin = box;
      this.winCheck = box;
      nilai.textContent = this.scorePoin;
      this.winCheck ? this.reward : null;
    },3500);
  } 



  set winCheck(box) {
    if (box[0] == box[1] && box[0] == box[2]) {
      console.log('Matching');
      return (this._isWin = true);
    } else {
      console.log("Not Matching");
      return (this._isWin = false);
    }
  }

  get winCheck() {
    return this._isWin;
  }
  
  set scorePoin(box){
    if (box[0] == box[1] && box[0] == box[2]) {
      console.log(++this._Score);
      return (this._Score);
    } else {
      console.log(this._Score);
      return (this._Score);
    }
  }
  get scorePoin(){
    return this._Score;
  }

  get reward() {
    fetch("https://zoo-animal-api.herokuapp.com/animals/rand")
      .then((x) => x.json())
      .then((data) => {
        const img = new Image(200, 200);
        img.src = data.image_link;
        imgReward.appendChild(img);
        rewardSection.style.display = "block";
        rewardNavbar.style.display = "block";
        setTimeout(() => {
          location.href = "#reward";
        }, 1000);
      });
  }

  logout() {
    return (this.token = sessionStorage.removeItem("token"));
  }
}
