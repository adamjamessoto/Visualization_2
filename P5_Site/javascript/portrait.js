function setup() {
 createCanvas(500, 900);
 background(100, 100, 100);
 ellipseMode(CORNER);

// INTITALIZE VARIABLES

// HEAD
var headHeight = 450;
var headWidth = headHeight*4/5;
var head_x = (width-headWidth)/2;
var head_y = (height-headHeight)/2;

// JAW
var jawHeight = headHeight-50;
var jaw_y = head_y+50;

// EYES
var eyeHeight = headHeight/15;
var eyeWidth = headWidth/10;
var eye_y = head_y+headHeight/2.25-eyeHeight/2;
var reye_x = head_x+eyeWidth*3;
var leye_x = head_x+eyeWidth*6;


// HAIR
var hairHeight = headHeight/1.5;
var hairWidth = headWidth/1.7;
var hair_x = reye_x-(headWidth/10);
var hair_y = head_y-(headHeight/1.75);

// TORSO
var torsoHeight = head_x-headHeight*.8;
var torsoWidth = headWidth*0.8;
var torso_x = head_x*1.6;
var torso_y = head_y*4.1;


// ARMS
var armHeight = torsoHeight*0.9;
var armWidth = torsoWidth*0.2;
var arm_y = (height-head_y)*1.4;
var rarm_x = (width+torso_x)/1.75;
var larm_x = (width-torso_x)/3.5;


// SHIRT LETTER
var textHeight = torsoHeight/4;
var textWidth = torsoWidth/4;
var text_x = torso_x*1.75;
var text_y = torso_y/1.05;

// DRAWING

//TORSO
  stroke(7, 82, 111);
  fill(7, 82, 111);
  rect(torso_x, torso_y, torsoWidth, torsoHeight);

 // UPPER HEAD
  stroke(170, 108, 57);
  fill(170, 108, 57);
  arc(head_x, head_y, headWidth, headHeight, -3.5, QUARTER_PI/2, CHORD);

 // LOWER HEAD
  stroke(170, 108, 57);
  fill(170, 108, 57);
  arc(head_x, jaw_y, headWidth, jawHeight, .4, PI/1.13, CHORD);

 // RIGHT EYE
  stroke(0);
  fill(0);
  ellipse(reye_x, eye_y, eyeHeight, eyeWidth);

 // LEFT EYE
  ellipse(leye_x, eye_y, eyeHeight, eyeWidth);

// HAIR
  stroke(0);
  fill(0);
  rect(hair_x, hair_y, hairWidth, hairHeight);

// RIGHT ARM

  stroke(0, 0, 0);
  strokeWeight(3);
  fill(31, 169, 222);
  rect(rarm_x, arm_y, armWidth, armHeight);

// LEFT ARM
  stroke(0, 0, 0);
  strokeWeight(3);
  fill(31, 169, 222);
  rect(larm_x, arm_y, armWidth, armHeight);

// SHIRT LETTER
 textSize(220);
 fill(0);
 text("B", text_x, text_y);

}
