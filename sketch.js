var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;

var player, form,game;
var player1,player2;
var players;
var rewards;
var rewardGroup;
var player1_img, player2_img;
var coin_img, chocolate_img


function preload(){
  back_img = loadImage("images/Sidewalk 2.jpg");
  player1_img = loadImage("images/Boy 1.png");
  player2_img = loadImage("images/Girl 1.png");
  coin_img = loadImage("images/Coin.png");
  chocolate_img = loadImage("images/Chocolate.png");
  rewardGroup = new Group();
}
function setup() {
  createCanvas(1000, 600);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}

function draw() {
  background(back_img);
  
   if (playerCount === 2) {
     game.update(1);
   }
   if (gameState === 1) {
     clear(); 
     game.play();
   }
   if (gameState === 2) {
    
     game.end();
   }
}