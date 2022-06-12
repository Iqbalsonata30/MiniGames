class Player{
  constructor(){
    this._username = "";
  }
  generateUsername(){
    const random =~~[Math.random() * 10000];
    const username = this.username + random.toString();
    return username;
  }

  set username(_username){
    return this._username = _username;
  }
  get username(){
    return this._username;
  }


  get Register(){
    this.generateUsername();
    sessionStorage.setItem('Username',this.generateUsername());
    setTimeout(()=>{
      location.href='#start'
    },500);
  }

  get logout(){
    sessionStorage.removeItem('Username');
    location.reload();
  }

}