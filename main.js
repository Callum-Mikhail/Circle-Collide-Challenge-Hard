// Circle Collide Challenge Hard

// Canvas
let cnv = document.getElementById("draw");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// Variables
let mouseX = 0,
  mouseY = 0;

// mouse move handler
document.addEventListener("mousemove", mousemoveHandler);
function mousemoveHandler(e) {
  let cnvRect = cnv.getBoundingClientRect();

  mouseX = e.clientX - cnvRect.left;
  mouseY = e.clientY - cnvRect.top;
}

let circleSize = 15;
let tealCircleX = 400;
let tealCircleY = 300;
let tealCircleSize = 50;

let circleX = 0;
let circleY = 0;

// Loop

requestAnimationFrame(loop);
function loop() {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, 800, 600);

  // Circle
  ctx.lineWidth = 5;
  ctx.fillStyle = "teal";
  ctx.beginPath();
  ctx.arc(tealCircleX, tealCircleY, tealCircleSize, 0, 2 * Math.PI);

  ctx.fill();

  // white
  ctx.lineWidth = 4;
  ctx.strokeStyle = "white";
  ctx.beginPath();
  ctx.arc(tealCircleX, tealCircleY, tealCircleSize, 0, 2 * Math.PI);
  ctx.stroke();

  // black
  ctx.lineWidth = 2;
  ctx.strokeStyle = "black";
  ctx.beginPath();
  ctx.arc(tealCircleX, tealCircleY, tealCircleSize, 0, 2 * Math.PI);
  ctx.stroke();

  // Mouse Circle
  ctx.lineWidth = 4;
  ctx.fillStyle = "pink";
  ctx.beginPath();
  ctx.arc(circleX, circleY, circleSize, 0, 2 * Math.PI);
  ctx.fill();

  // white
  ctx.lineWidth = 3;
  ctx.strokeStyle = "white";
  ctx.beginPath();
  ctx.arc(circleX, circleY, circleSize, 0, 2 * Math.PI);
  ctx.stroke();

  // black
  ctx.lineWidth = 2;
  ctx.strokeStyle = "black";
  ctx.beginPath();
  ctx.arc(circleX, circleY, circleSize, 0, 2 * Math.PI);
  ctx.stroke();

  // logic

  let tealdistance = Math.sqrt(
    (circleX - tealCircleX) ** 2 + (circleY - tealCircleY) ** 2
  );

  if (tealCircleSize + circleSize >= tealdistance) {
    tealCircleX = Math.random() * 750;
    tealCircleY = Math.random() * 550;
  }
  // Movement
  let distance = Math.sqrt((mouseX - circleX) ** 2 + (mouseY - circleY) ** 2);

  let dx = ((mouseX - circleX) / distance) * 5;
  let dy = ((mouseY - circleY) / distance) * 5;

  if (circleX !== mouseX) {
    circleX += dx;
  }
  if (circleY !== mouseY) {
    circleY += dy;
  }

  //  large run and rise = mouseX/Y - tealCircleX/Y (relates to small run and rise)
  // speed = hypotenuse of small triangle
  requestAnimationFrame(loop);
}
