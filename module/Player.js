class Player {
  constructor() {
    this._token = sessionStorage.getItem("token");
    this._isWin = false;
    this._gacha = [];
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

  get start() {
    const rolling = setInterval(() => {
      this.gacha = default_option;
      box1.textContent = this.gacha[0];
      box2.textContent = this.gacha[1];
      box3.textContent = this.gacha[2];
    }, 50);

    setTimeout(() => {
      clearInterval(rolling);
      const box = [box1.textContent, box2.textContent, box3.textContent];
      this.winCheck = box;
      this.winCheck ? this.reward : null;
    }, 3500);
  }

  set winCheck(box) {
    if (box[0] == box[1] && box[0] == box[2]) {
      console.log("matching!");
      return (this._isWin = true);
    } else {
      console.log("not match");
      return (this._isWin = false);
    }
  }

  get winCheck() {
    return this._isWin;
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
