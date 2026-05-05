let corkboard;

let pin1X = 280;
let pin1Y = 300;

let pin2X = 400;
let pin2Y = 365;

let polaroid1;
let polaroid2;

let petals = [];

let map1;
let map2;

let myFont;





// V A R I A B L E S

let scene = "corkboard";


// P R E L O A D

function preload() {

  corkboard = loadImage("images/FragmentsOfFirstYear.jpg");
  polaroid1 = loadImage("images/polaroid1.jpg");
  polaroid2 = loadImage("images/polaroid2.jpg");
  map1  = loadImage("images/map1.jpg");
  map2 = loadImage("images/map2.jpg");
  myFont = loadFont("fonts/studyfont.otf");
}


// S E T U P

function setup() {

  createCanvas(1280, 720);
  noSmooth();
  textFont(myFont);
  
}



// D R A W

function draw() {

  background(220);

 // D R A W C O R K B O A R D

  if (scene === "corkboard") {

    drawCorkboard();
  }
// D R A W I N S T R U C T I O N S

  else if (scene === "corkboardInstructions") {
   drawCorkboardInstructions();
  }

  else if (scene === "mapPhoto1") {
  drawMap1();
  }

  else if (scene === "mapPhoto2") {
  drawMap2();
  }

  // D R A W P O L A R O I D S

  else if (scene === "polaroid1") {
  drawPolaroid1();
  }

  else if (scene === "polaroid2") {
  drawPolaroid2();
  }

// D R A W P E T A L S

  
updatePetals();
}
  



// D R A W C O R K B O A R D

function drawCorkboard() {

  image(corkboard, 0, 0, width, height);


// W H I T E B O A R D / S T I C K Y N O T E H O V E R

  if (
    mouseX > 427 && mouseX < 552 && mouseY > 422 && mouseY < 537
  ) {

  noFill();
  stroke(255, 255, 150);
  strokeWeight(3);
  rect(427, 422, 125, 115);
  }


// P O L A R O I D 1 H O V E R

  if (
    mouseX > 912 && mouseX < 1043 && mouseY > 242 && mouseY < 372
  ) {

  noFill();
  stroke(255, 255, 155);
  strokeWeight(3);
  rect(912, 242, 130, 130);
  }


 // P O L A R O I D 2 H O V E R

  if (
    mouseX > 642 && mouseX < 772 && mouseY > 396 && mouseY < 526
  ) {

  noFill();
  stroke(255, 255, 155);
  strokeWeight(3);
  rect(642, 396, 130, 130);
  }


// M A P P I N 1 H O V E R


let hoverPin1 =
  dist(mouseX, mouseY, pin1X, pin1Y) < 10;

if (hoverPin1) {

  fill(255, 80, 80);
  ellipse(pin1X, pin1Y, 24);
}

else {

  fill(255, 0, 0);
  ellipse(pin1X, pin1Y, 16);
}


// M A P P I N 2 H O V E R

let hoverPin2 =
  dist(mouseX, mouseY, pin2X, pin2Y) < 10;

if (hoverPin2) {

  fill(255, 80, 80);
  ellipse(pin2X, pin2Y, 24);
}

else {

  fill(255, 0, 0);
  ellipse(pin2X, pin2Y, 16);
}
}

function updatePetals() {

  // create new petal
  if (frameCount % 8 === 0) {

    petals.push(new Petal());
  }

  // update petals
  for (let i = petals.length - 1; i >= 0; i--) {

    petals[i].update();

    petals[i].display();

    // remove offscreen petals
    if (petals[i].offscreen()) {

      petals.splice(i, 1);
    }
  }
}

// D R A W I N S T R U C T I O N S

function drawCorkboardInstructions() {

  // dark overlay
  background(0, 180);

  image(corkboard, 0, 0, width, height);
  filter(BLUR, 4);

  // paper
  fill(255);
  stroke(200);
  strokeWeight(20);
  rect(300, 120, 680, 420);

  // text
  noStroke();

  fill(0);

  textSize(34);
 text("How To Play", 500, 190);
 textSize(22);
textFont(myFont);

  text(
    `To Do: 
    1. Say goodbye to my friends.
    2. Finish that deadline!!
    3. Pack away my corkboard. 
    4. Escape to my Fragments of First Year.`, 390,
    300);

}

// D R A W M A P A N D P I N
function drawMap1() {
  background(0);

  image(map1, 0, 0, width, height);

  fill(255);
  textSize(28);
  textFont(myFont);
text(
    "'An insane place to walk by every day...' ",
    100, 600);

  textSize(25);






}
function drawMap2() {

  background(0);

image(map2, 0, 0, width, height);
fill(255);
textSize(28);
textFont(myFont);

  text(
    "'Met lifelong friends here...'",
    700, 600);

  textSize(18);


}



// M O U S E P R E S S E D

function mousePressed() {



  if (scene === "corkboard") {

  // WHITEBOARD / STICKY NOTE

    if (
      mouseX > 427 &&
      mouseX < 552 &&
      mouseY > 422 &&
      mouseY < 537
    ) {

      scene = "corkboardInstructions";
    }


    else if (
      dist(mouseX, mouseY, pin1X, pin1Y) < 12
    ) {

      scene = "mapPhoto1";
    }

    else if (
      dist(mouseX, mouseY, pin2X, pin2Y) < 12
    ) {
      scene = "mapPhoto2";

    }


  // P O L A R O I D 1

    else if (
      mouseX > 912 && mouseX < 1043 && mouseY > 242 && mouseY < 372
    ) 
    
    {

      scene = "polaroid1";
    }

// P O L A R O I D 2

    else if (
      mouseX > 642 && mouseX < 772 && mouseY > 396 && mouseY < 526
    ) 
    
    {

      scene = "polaroid2";
    }
  }

// B A C K T O C O R K B O A R D
  else {

    scene = "corkboard";
  }
}

// D R A W P O L A R O I D S

function drawPolaroid1() {

  background(20);

  image(corkboard, 0, 0, width, height);
  filter(BLUR, 4);


  
  image(polaroid1, width / 2 - 200, height / 2 - 200, 400, 400);

  fill(0);

  textSize(28);

  textFont(myFont);

  text(
    "'Peaceful forest'", 480, 515);
}



function drawPolaroid2() {

  background(20);

  image(corkboard, 0, 0, width, height);
  filter(BLUR, 4);

  image(polaroid2, width / 2 - 200, height / 2 - 200, 400, 400 );

  fill(0);
  textSize(28);
  textFont(myFont);
  text(
    "'Night out with friends <3'", 480, 515);
  
}

class Petal {

  constructor() {

    // spawn from left side
    this.x = -20;

    this.y = random(height);

    // movement
    this.speedX = random(1, 3);

    this.speedY = random(-0.5, 0.5);

    // appearance
    this.size = random(8, 16);

    this.rotation = random(TWO_PI);
  }


  update() {

    // move
    this.x += this.speedX;

    this.y += this.speedY;

    // floating motion
    this.y += sin(frameCount * 0.03 + this.x * 0.01) * 0.3;

    // rotate
    this.rotation += 0.02;
  }


  display() {

    push();
    translate(this.x, this.y);
    rotate(this.rotation);
    noStroke();
    fill(253, 228, 135);
    ellipse(0, 0, this.size, this.size * 0.6);
    pop();
  }


  offscreen() {
    return this.x > width + 20;
  }
}

