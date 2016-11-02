// utility function
function radians(deg){
	return deg*Math.PI/180.0;
}

var frameCount = 0;
var sideCount = 7;
var sideCount2 = 3;
var radius = 35;
function init(){
	window.requestAnimationFrame(draw);
}

function draw() {
	var ctx = document.getElementById('canvas').getContext('2d');
	ctx.save();
	ctx.fillStyle = 'rgba(100,55,185,1)';
	ctx.strokeStyle = 'rgba(200, 140, 0, 1)';
	ctx.linewidth = 9;
	ctx.translate(canvas.width/2, canvas.height/2);
	ctx.rotate(radians(++frameCount));
	var theta = 0;
	var rot = Math.PI*2/sideCount;
	ctx.beginPath();
	ctx.moveTo(Math.cos(theta)*radius, Math.sin(theta)*radius);
	for(i=0; i<sideCount; i++) {
		ctx.lineTo(Math.cos(theta)*radius, Math.sin(theta)*radius);
		theta += rot;
	}
	ctx.closePath();
	ctx.fill();
	ctx.stroke();
	ctx.restore();
	window.requestAnimationFrame(draw);
}

init();

function init1(){
	window.requestAnimationFrame(draw1);	
}

function draw1() {

	var ctx1 = document.getElementById('canvas3').getContext('2d');
	ctx1.save();
	ctx1.fillStyle = 'rgba(100,55,185,1)';
	ctx1.strokeStyle = 'rgba(200, 140, 0, 1)';
	ctx1.linewidth = 9;
	ctx1.translate(canvas3.width/2, canvas3.height/2);
	ctx1.rotate(radians(++frameCount));
		var theta = 0;
	var rot = Math.PI*2/sideCount;
	ctx1.beginPath();
	ctx1.moveTo(Math.cos(theta)*radius, Math.sin(theta)*radius);
	
	for(i=0; i<sideCount; i++) {
		ctx1.lineTo(Math.cos(theta)*radius, Math.sin(theta)*radius);
		theta += rot;
	}

	ctx1.closePath();
	ctx1.fill();
	ctx1.stroke();
	ctx1.restore();
	window.requestAnimationFrame(draw1);
}

init1();

function init2(){
	window.requestAnimationFrame(draw2);
		
}

function draw2() {

	var ctx2 = document.getElementById('canvas2').getContext('2d');
	ctx2.save();
	ctx2.fillStyle = 'rgba(100,55,185,1)';
	ctx2.strokeStyle = 'rgba(200, 140, 0, 1)';
	ctx2.linewidth = 9;
	ctx2.translate(canvas2.width/2, canvas2.height/2);
	//ctx2.rotate(radians(++frameCount));
		var theta = 0;
	var rot = Math.PI*2/sideCount2;
	ctx2.beginPath();
	ctx2.moveTo(Math.cos(theta)*radius, Math.sin(theta)*radius);
	
	for(i=0; i<sideCount2; i++) {
		ctx2.lineTo(Math.cos(theta)*radius, Math.sin(theta)*radius);
		theta += rot;
	}

	ctx2.closePath();
	ctx2.fill();
	ctx2.stroke();
	ctx2.restore();
	window.requestAnimationFrame(draw2);
}

init2();