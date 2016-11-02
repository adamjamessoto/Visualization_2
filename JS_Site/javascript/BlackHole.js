var BlackHole = function (max){
	this.particles = new Array();
	this.max = max;
};

BlackHole.prototype.init = function(width, height) {
	this.width = width;
	this.height = height;
	this.randWidth = getRandomInt(0, width);
	this.randHeight = getRandomInt(0, height);
	this.point = { x: this.randWidth, y: this.randHeight };
	this.hue = 0;
	this.setup();
};

BlackHole.prototype.animate = function() {
	$.fillStyle = `rgba(0,0,0, .2)`;
  	$.fillRect(0, 0, this.width, this.height);
  	for(var i=0; i<this.max; i++){
  		console.log(this.particles[i] instanceof Particle);
  		var part = this.particles[i].draw();
  	}
  	this.hue += .3;
  	window.requestAnimationFrame(this.animate);
};

BlackHole.prototype.setup = function() {
	for(let i=0; i<this.max; i++){
    	setTimeout(() => {
      		let p = new Particle().init();
      		this.particles.push(p);
      		// console.log(this.particles[i] instanceof Particle);
    	}, i * 10);
  	}
  
  	window.addEventListener("resize", () => {
    	this.width = canvas.width = window.innerWidth;
    	this.height = canvas.height = window.innerHeight;
    	this.point = { x: this.randWidth, y: this.randHeight };
  	});
  	this.animate();
};

function getRandomInt(min, max) {
 	min = Math.ceil(min);
 	max = Math.floor(max);
 	return Math.floor(Math.random() * (max - min)) + min;
};


