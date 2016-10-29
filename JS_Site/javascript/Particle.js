const { random, atan2, cos, sin, hypot } = Math;

class Particle {
	constructor(){}

	init() {
		this.hue = hue;
	    this.alpha = 0;
	    this.size = this.random(1, 5);
	    this.x = this.random(0, width);
	    this.y = this.random(0, height);
	    this.velocity = this.size * .5;
	    this.changed = null;
	    this.changedFrame = 0;
	    this.maxChangedFrames = 50;
	    return this;
	}

	draw() {
	    $.strokeStyle = `hsla(${this.hue}, 100%, 50%, ${this.alpha})`;
	    $.beginPath();
	    $.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
	    $.stroke();
	    this.update();
	  }

	update() {
	    if(this.changed) {
		    this.alpha *= .92;
		    this.size += 2;
		    this.changedFrame++;
		    if(this.changedFrame > this.maxChangedFrames) {
		    	this.reset();
		    }
	    }

	    else if(this.distance(point.x, point.y) < 50) {
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
	}

	reset() {
		this.init();
	}

	distance(x, y) {
		return hypot(x - this.x, y - this.y); 
	}

	random(min, max) {
		return random() * (max - min) + min;
	}
}