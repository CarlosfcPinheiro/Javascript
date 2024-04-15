//This is a copy of Pong. Use the arrows to move up and down, press CONTROL to active the multiplayer mode. Use 'w' and 's' to move up and down, respectively. Enjoy the game :)

// -------------- Ball variables ------------
let ball_x = 350;
let ball_y = 200;

let ball_diameter = 25;

let ball_x_spd = 6;
let ball_y_spd = 6;

// ------- racket_player variables ------------
let racket_x = 15;
let racket_y = 150;

let iscolliding_top_player = false;
let iscolliding_bottom_player = false;

let racket_y_spd = 10;

// ------------- Racket opponent ---------------
let racket_op_x = 685;
let racket_op_y = 150;
let racket_op_spd;

// ---------- both rackets -------------
let racket_width = 20;
let racket_height = 100;

let hit_racket = false;

// -------- scoreboard and font --------
let fontscore;
let player_points = 0;
let opponent_points = 0;

// ------ multiplayer -------
let multiplayer = false;

function setup() { //create canvas size
  createCanvas(700, 400);
}

function draw() { //Execute loop game
  background(0);
  //racket player call func
  create_Rackets(racket_x, racket_y, racket_width, racket_height);
  collision_limitRacket();
  move_Racket();

  //ball call func
  create_Ball();
  move_Ball();
  collision_Ball();

  //both rackets collision
  collision_Rackets(racket_x, racket_y);
  collision_Rackets(racket_op_x-racket_width, racket_op_y);

  //racket opponent call func
  create_Rackets(racket_op_x-racket_width, racket_op_y-(racket_height/2), racket_width, racket_height);
  move_Racket_op();
  racket_op_y = constrain(racket_op_y, 0+(racket_height/2), height-(racket_height/2));

  //scoreboard
  include_Scoreboard();
  goal_Points();

  //multiplayer
  multiplayer_Mode();
}

// --------------------------------- functions created ---------------------------------

// ------------------ BALL FUNCTIONS -------------
function initialstate_Ball(){
  ball_x = 200;
  ball_y = 350;
}
function create_Ball(){
  circle(ball_x, ball_y, ball_diameter);
}
function move_Ball(){
  ball_x += ball_x_spd;
  ball_y += ball_y_spd;
}
function collision_Ball(){
  if (ball_x > width-(ball_diameter/2) || ball_x < 0+ball_diameter/2){
    ball_x_spd *= -1;
  }

  if (ball_y > height-(ball_diameter/2) || ball_y < 0+ball_diameter/2){
    ball_y_spd *= -1;
  }
}

// ---------------- RACKET FUNCTIONS --------------------
function create_Rackets(x, y, width, height){
  rect(x, y, width, height);
}
function move_Racket(){
  if (keyIsDown(UP_ARROW) && iscolliding_top_player == false){
    racket_y -= racket_y_spd;
  }
  if (keyIsDown(DOWN_ARROW) && iscolliding_bottom_player == false){
    racket_y += racket_y_spd;
  }
}
function collision_limitRacket(){
  racket_y == 0 ? iscolliding_top_player = true : iscolliding_top_player = false;
  racket_y == height-racket_height ? iscolliding_bottom_player = true : iscolliding_bottom_player = false;
}
// ---------- RACKET OPPONENT FUNCTIONS ----------------
function move_Racket_op(){
  if (multiplayer == false){
    racket_op_spd = ball_y-racket_op_y;
    racket_op_y += racket_op_spd;
  }
}
// ----------------- BOTH RACKET FUNCTIONS -------------
function collision_Rackets(pos_x, pos_y){
  hit_racket = collideRectCircle(pos_x, pos_y, racket_width, racket_height, ball_x, ball_y, (ball_diameter/2));
  if (hit_racket == true){
    ball_x_spd *= -1;
  }
}
// --------------- SCOREBOARD FUNCTION --------
function include_Scoreboard(){
  textSize(24);
  textFont('Nippo');

  stroke(255);
  fill(50);
  rect(125, 16, 60, 30);
  rect(525, 16, 60, 30);
  fill(255);
  text(player_points, 150, 40);
  text(opponent_points, 550, 40);
}
function goal_Points(){
  if (ball_x > 690){
    player_points += 1;
    initialstate_Ball();
  }
  if (ball_x < 10){
    opponent_points += 1;
    initialstate_Ball();
  }
}
// ------- MULTIPLAYER MODE -------
function multiplayer_Mode(){
  if (keyIsDown(CONTROL)){
    multiplayer = true;
  }
  if (multiplayer == true){
    if (keyIsDown(87)){
      racket_op_y -= 10;
    }
    if (keyIsDown(83)){
      racket_op_y += 10;
    }
  }
}