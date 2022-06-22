var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["2b1bd060-0356-49b0-935a-e2d79f8cf6ef"],"propsByKey":{"2b1bd060-0356-49b0-935a-e2d79f8cf6ef":{"name":"golfball_1","sourceUrl":"assets/api/v1/animation-library/gamelab/HnGkChZ0Lf5fTeAmaQDwhmGSUiF59YcY/category_sports/golfball.png","frameSize":{"x":393,"y":394},"frameCount":1,"looping":true,"frameDelay":2,"version":"HnGkChZ0Lf5fTeAmaQDwhmGSUiF59YcY","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":394},"rootRelativePath":"assets/api/v1/animation-library/gamelab/HnGkChZ0Lf5fTeAmaQDwhmGSUiF59YcY/category_sports/golfball.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var placar = 0;

var estado_jogo = "iniciar";

var paddle = createSprite(200,390,80,10); //Faltava o "var" antes de paddle
var ball = createSprite(200,200,20,20); //Faltava o "var" antes de ball
ball.setAnimation("golfball_1"); //Adicionei uma animação para ela ficar redonda
ball.scale = 0.06; //Ajustei o tamanho da animação

var box1 = createSprite(25, 75, 50, 25);
box1.shapeColor = "green";
var box2 = createSprite(75, 75, 50, 25);
box2.shapeColor="blue";
var box3 = createSprite(125, 75, 50, 25);
box3.shapeColor="red";
var box4 = createSprite(175, 75, 50, 25);
box4.shapeColor="purple";
var box5 = createSprite(225, 75, 50, 25);
box5.shapeColor="pink";
var box6 = createSprite(275, 75, 50, 25);
box6.shapeColor="yellow";
var box7 = createSprite(325, 75, 50, 25);
box7.shapeColor = "cyan";
var box8 = createSprite(375, 75, 50, 25);
box8.shapeColor="purple";

var box9 = createSprite(25, 100, 50, 25);
box9.shapeColor="red";
var box10 = createSprite(75, 100, 50, 25);
box10.shapeColor="green";
var box11 = createSprite(125, 100, 50, 25);
box11.shapeColor="orange";
var box12 = createSprite(175, 100, 50, 25);
box12.shapeColor="write";
var box13 = createSprite(225,100, 50, 24);
box13.shapeColor="blue";
var box14 = createSprite(275, 100, 50, 25);
box14.shapeColor="marinBlue";
var box15 = createSprite(325, 100, 50, 25);
box15.shapeColor="pink";
var box16 = createSprite(375, 100, 50, 25);
box16.shapeColor="orange";

var box17 = createSprite(25, 125, 50, 25);
box17.shapeColor = "pink";
var box18 = createSprite(75, 125, 50, 25);
box18.shapeColor = "blue";
var box19 = createSprite(125, 125, 50, 25);
box19.shapeColor = "yellow";
var box20 = createSprite(175, 125, 50, 25);
box20.shapeColor = "orange";
var box21 = createSprite(225, 125, 50, 25);
box21.shapeColor = "purple";
var box22 = createSprite(275, 125, 50, 25);
box22.shapeColor = "marinBlue";
var box23 = createSprite(325, 125, 50, 25);
box23.shapeColor = "cyan";
var box24 = createSprite(375, 125, 50, 25);
box24.shapeColor = "red";


createEdgeSprites();


function draw() {
  background("black");
  if(keyDown("enter"))
  {
    ball.velocityX=9;
    ball.velocityY=10;
    
    estado_jogo = "jogar";
  }
  
  paddle.x = World.mouseX;
  
  ball.bounceOff(topEdge);
  ball.bounceOff(leftEdge);
  ball.bounceOff(rightEdge);
  ball.bounceOff(paddle);
  
  if (ball.bounceOff(box1)) { 
    placar = placar + 1;
    box1.destroy();
  }
  
  if (ball.bounceOff(box2)) {
    placar = placar + 1;
    box2.destroy();
  }
  
  if (ball.bounceOff(box3)) {
    placar = placar + 1;
    box3.destroy();
  }
  
  if (ball.bounceOff(box4)) {
    placar = placar + 1;
    box4.destroy();
  }
  
  if (ball.bounceOff(box5)) {
    placar = placar + 1;
    box5.destroy();
  }
  
  if (ball.bounceOff(box6)) {
    placar = placar + 1;
    box6.destroy();
  }
  
  if (ball.bounceOff(box7)) {
    placar = placar + 1;
    box7.destroy();
  }
  
  if (ball.bounceOff(box8)) {
    placar = placar + 1;
    box8.destroy();
  }
  
  if (ball.bounceOff(box9)) {
    placar = placar + 1;
    box9.destroy();
  }
  
  if (ball.bounceOff(box10)) {
    placar = placar + 1;
    box10.destroy();
  }
  
  if (ball.bounceOff(box11)) {
    placar = placar + 1;
    box11.destroy();
  }
  
  if (ball.bounceOff(box12)) {
    placar = placar + 1;
    box12.destroy();
  }
  
  if (ball.bounceOff(box13)) {
    placar = placar + 1;
    box13.destroy();
  }
  
  if (ball.bounceOff(box14)) {
    placar = placar + 1;
    box14.destroy();
  }
  
  if (ball.bounceOff(box15)) {
    placar = placar + 1;
    box15.destroy();
  }
  
  if (ball.bounceOff(box16)) {
    placar = placar + 1;
    box16.destroy();
  }
  
  if (ball.bounceOff(box17)) {
    placar = placar + 1;
    box17.destroy();
  }
  
  if (ball.bounceOff(box18)) {
    placar = placar + 1;
    box18.destroy();
  }
  
  if (ball.bounceOff(box19)) {
    placar = placar + 1;
    box19.destroy();
  }
  
  if (ball.bounceOff(box20)) {
    placar = placar + 1;
    box20.destroy();
  }
  
  if (ball.bounceOff(box21)) {
    placar = placar + 1;
    box21.destroy();
  }
  
  if (ball.bounceOff(box22)) {
    placar = placar + 1;
    box22.destroy();
  }
  
  if (ball.bounceOff(box23)) {
    placar = placar + 1;
    box23.destroy();
  }
  
  if (ball.bounceOff(box24)) {
    placar = placar + 1;
    box24.destroy();
  }
  
  textSize(15);
  text("Pontuação: " + placar, 10, 30);

  if (ball.isTouching(bottomEdge) || placar == 24){
    estado_jogo = "fim";
  }
  
  if (estado_jogo == "fim") {
    textSize(30);
    text("Game Over", 120, 200);
  }
  
  if (estado_jogo == "iniciar") {
    text("Bem-vindo! Aperte Enter para Começar", 70, 230);
  }
  
  drawSprites();
}






















// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
