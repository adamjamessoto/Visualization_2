const { random, atan2, cos, sin, hypot } = Math;

function Particle(){
};

Particle.prototype.init = function() {
  this.hue = 150;
  this.alpha = 0;
  this.size = this.random(1, 5);
  this.x = this.random(0, width);
  this.y = this.random(0, height);
  this.velocity = this.size * .5;
  this.changed = null;
  this.changedFrame = 0;
  this.maxChangedFrames = 25;
  return this;
};

Particle.prototype.draw = function() {
  $.strokeStyle = `hsla(${this.hue}, 100%, 50%, ${this.alpha})`;
  $.beginPath();
  $.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  $.stroke();
  this.update();
  this.hue +=.5;
};

Particle.prototype.update = function() {
  if(this.changed){
    this.alpha *= .92;
    this.size += 2;
    this.changedFrame++;

    if(this.changedFrame > this.maxChangedFrames){
      this.reset();
    }
  }
  else if(this.distance(point.x, point.y) < 25){
    this.changed = true;
  }
  else {
    let dx = point.x - this.x;
    let dy = point.y - this.y;
    let angle = atan2(dy, dx);
    
    this.alpha += .01;
    this.x += this.velocity * cos(angle);
    this.y += this.velocity * sin(angle);
    this.velocity += .02;
  } 
};

Particle.prototype.reset = function() {
  this.init();
};

Particle.prototype.distance = function(x, y) {
  return hypot(x - this.x, y - this.y); 
};

Particle.prototype.random = function(min, max) {
  return random() * (max - min) + min;
};
