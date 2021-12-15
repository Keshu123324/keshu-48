var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var database;
var distance = 0;
var keyCount = 0;
var moneyCount = 0;


var form, player, game;

var survivors, survivor1, survivor2, survivor3, survivor4;        

var horror_house, survivor1_img, survivor2_img, survivor3_img, survivor4_img,survivor5_img;
var bg,backgroundImage,gameMap,gamePath;
var door, doorOpenImg, doorCloseImg;
var key, keyImage,keysGroup;
var money,moneyImage,moneyGroup;
var ghost, ghostImage,ghostGroup, weapon, weaponImage, weaponGroup;
var position;

function preload(){
  backgroundImage=loadImage("images/deadline image.png");
  gameMap = loadImage("images/haunted_bg.jpg");
  //gamePath = loadImage("images/ghost path.jpeg");
  
 // horror_house = loadImage("images/track.jpg");
  survivor1_img = loadImage("images/survivor1.jpg");
  survivor2_img = loadImage("images/survivor2.png");
  survivor3_img = loadImage("images/survivor3.png");
  survivor4_img = loadImage("images/survivor4.png");
  doorOpenImg = loadImage("images/dooropen.png");
  doorCloseImg = loadImage("images/doorclose.png");
  keyImage = loadImage("images/key.png");
  moneyImage = loadImage("images/money.png");
  ghostImage = loadImage("images/ghost.png");
  
  
}

function setup(){
  canvas = createCanvas(displayWidth, displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

  keysGroup = new Group();
  moneyGroup = new Group();
  ghostGroup = new Group();
  weaponGroup = new Group();


}


function draw(){

  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
    game.spawnKeys();
    game.spawnMoney();
    game.spawnGhost();
    
    
  }
  if(gameState === 2){
    game.end();
  }
}
