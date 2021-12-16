class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){     
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
    survivor1 = createSprite(120,480,20,20);
    survivor1.shapeColor = "blue";
    //survivor1.addImage();
    survivor2 = createSprite(300,500,20,20);
    survivor2.shapeColor = "blue";
    //survivor2.addImage();
    survivor3 = createSprite(500,500,20,20);
    survivor3.shapeColor = "blue";
    //survivor3.addImage();
    survivor4 = createSprite(700,500,20,20);
    survivor4.shapeColor = "blue";
    //survivor4.addImage();
    
    survivors = [survivor1,survivor2,survivor3,survivor4];
   }

  play(){
    image(gameMap,0,0,displayWidth,displayHeight-50);
  
  //  image(gamePath,0,0,displayWidth,displayHeight);

    form.hide();

   
    Player.getPlayerInfo();
    player.getSurvivorsAtEnd();
   
    
    if(allPlayers !== undefined){
     // background(rgb(198,135,103));
      
      //var display_position = 100;
      
      //index of the array
      var index = 0;

      //x and y position of the cars
      var x=-200;
      var y = displayHeight+500;

      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the cars a little away from each other in x direction
        x = displayWidth - allPlayers[plr].xdistance;
        //use data form the database to display the cars in y direction
       // y = displayHeight - allPlayers[plr].ydistance;
        survivors[index-1].x = x;
        survivors[index-1].y = y;

        if (index === player.index){
          stroke(10);
          fill("red");
        //  ellipse(x,y,60,60);
          survivors[index - 1].shapeColor = "red";
          camera.position.x = survivors[index-1].x;
          camera.position.y = survivors[index-1].y;
        }
       
      }

    }

   
      
      if(keyIsDown(RIGHT_ARROW) && player.index !== null){
  
        player.xdistance =  player.xdistance-3;
        player.update();
       
      }
    if(player.live === 0){
      gameState = 2;
      player.rank = player.rank + 1;
      Player.updateSurvivorsAtEnd(player.rank);
    }
   
    drawSprites();
  }


  end(){
    console.log("Game Ended");
    console.log("Your rank is "+player.rank);
  }
}
