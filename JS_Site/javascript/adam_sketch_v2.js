// const { random, atan2, cos, sin, hypot } = Math;
const max = 200;
const canvas = document.createElement("canvas");
const $ = canvas.getContext('2d');
const body = document.body;
const particles = [];

body.style.backgroundColor = 'black';
body.style.overflow = "hidden";
body.appendChild(canvas);

let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;
let point = { x: width/2, y: height/2 };
let hue = 0;

function animate(){
  $.fillStyle = `rgba(0,0,0, .2)`;
  $.fillRect(0, 0, width, height);
  particles.forEach((p) => {
    p.draw();
  });
  hue += .3;
  window.requestAnimationFrame(animate);
}

function setup(){
  for(let i=0; i<max; i++){
    setTimeout(() => {
      let p = new Particle().init();
      particles.push(p);
    }, i * 10);
  }
  
  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    point = { x: width/2, y: height/2 };
  });
  animate();
}

setup();