class Player {
  constructor(){
    this.index = null;
    this.live = 1;
    this.name = null;
    this.rank=null;
    this.xdistance=0;
    
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      live:this.live,
      xdistance: this.xdistance      
    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
    getSurvivorsAtEnd(){
     var SurvivorsAtEndRef = database.ref('SurvivorsAtEnd');
     SurvivorsAtEndRef.on("value", (data)=>{
      this.rank = data.val();

     })
   }
   static updateSurvivorsAtEnd(rank){
    database.ref('/').update({
      SurvivorsAtEnd: rank
    })

   }
}
