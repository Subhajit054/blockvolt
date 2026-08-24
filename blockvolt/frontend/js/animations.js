const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

let nodes = [];
const NODE_COUNT = 100;

for (let i = 0; i < NODE_COUNT; i++) {
nodes.push({
x: Math.random() * canvas.width,
y: Math.random() * canvas.height,
vx: (Math.random() - 0.5) * 0.7,
vy: (Math.random() - 0.5) * 0.7,
size: Math.random() * 2 + 1
});
}

function draw() {

ctx.fillStyle = "rgba(2,6,23,0.9)";
ctx.fillRect(0, 0, canvas.width, canvas.height);

// connections
for (let i = 0; i < nodes.length; i++) {
for (let j = i + 1; j < nodes.length; j++) {

let dx = nodes[i].x - nodes[j].x;
let dy = nodes[i].y - nodes[j].y;
let dist = Math.sqrt(dx * dx + dy * dy);

if (dist < 120) {
ctx.strokeStyle = "rgba(0,170,255,0.2)";
ctx.lineWidth = 1;
ctx.beginPath();
ctx.moveTo(nodes[i].x, nodes[i].y);
ctx.lineTo(nodes[j].x, nodes[j].y);
ctx.stroke();
}
}
}

// nodes
nodes.forEach(node => {

node.x += node.vx;
node.y += node.vy;

if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

let gradient = ctx.createRadialGradient(node.x,node.y,0,node.x,node.y,6);
gradient.addColorStop(0,"#00ccff");
gradient.addColorStop(1,"transparent");

ctx.fillStyle = gradient;
ctx.beginPath();
ctx.arc(node.x,node.y,node.size*2,0,Math.PI*2);
ctx.fill();

});

requestAnimationFrame(draw);
}

draw();