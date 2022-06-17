class Player {
  constructor() {
    this._token = sessionStorage.getItem("token");
    this._isWin = false;
    this._gacha = [];
    this._Score = 0;
    this._normalRolling = 'normal';
    this._quickRolling = 'quick';
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
  set normalRolling(param) {
    return (this._normalRolling = param);
  }
  get normalRolling() {
    return this._normalRolling;
  }
  set quickRolling(param) {
    return (this._quickRolling = param);
  }
  get quickRolling() {
    return this._quickRolling;
  }
  get gacha() {
    return this._gacha;
  }

  get normal() {
    const rolling = setInterval(() => {
      this.gacha = default_option;
      nilai.textContent = this._Score;
      box1.textContent = this.gacha[0];
      box2.textContent = this.gacha[1];
      box3.textContent = this.gacha[2];
    }, 50);
    if (this.normalRolling == 'normal' && this.quickRolling == 'quick') {
      setTimeout(() => {
        clearInterval(rolling);
        const box = [box1.textContent, box2.textContent, box3.textContent];
        this._quickRolling = 'quick';
        this.scorePoin = box;
        this.winCheck = box;
        nilai.textContent = this.scorePoin;
        this.winCheck ? this.reward : null;
      }, 3500);
    } else if (this.quickRolling == 'Quick') {
      setTimeout(() => {
        clearInterval(rolling);
        const box = [box1.textContent, box2.textContent, box3.textContent];
        this._quickRolling = 'quick';
        this.scorePoin = box;
        this.winCheck = box;
        nilai.textContent = this.scorePoin;
        this.winCheck ? this.reward : null;
      }, 100);
    }

  }

  set winCheck(box) {
    if (box[0] == box[1] && box[0] == box[2]) {
      return (this._isWin = true);
    } else {
      if (this.scorePoin < 1) {
        swal({
          title: "Anda Kalah Cuy!",
          text: "Silahkan Depo lagi!",
          icon: "error",
          button: "Yes",
        });
      } else {
        swal({
          title: "Score Anda Masih : " + this.scorePoin,
          text: "Semangat ! Coba lagi.",
          icon: "info",
          button: "Yes",
        });
      }
      return (this._isWin = false);
    }
  }

  get winCheck() {
    return this._isWin;
  }

  set scorePoin(box) {
    if (box[0] == box[1] && box[0] == box[2]) {
      console.log(++this._Score);
      return this._Score;
    } else {
      console.log(this._Score);
      return this._Score;
    }
  }
  get scorePoin() {
    return this._Score;
  }

  get reward() {
    fetch("https://zoo-animal-api.herokuapp.com/animals/rand")
      .then((x) => x.json())
      .then((data) => {
        const img = new Image(200, 200);
        let slideImage = document.getElementsByClassName('swiper-slide');
        img.src = data.image_link;
        for(let i =0;i<=this._Score;i++){
          slideImage[i].style.backgroundImage = 'url('+img.src+')';
          slideImage[i].style.backgroundSize = 'cover';
          slideImage[i].style.backgroundRepeat = 'no-repeat';
          slideImage[i].textContent = data.name;
          slideImage[i].style.fontSize = '30px';
          slideImage[i].style.color ='white';
        };
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
