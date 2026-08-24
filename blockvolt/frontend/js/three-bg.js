const container = document.getElementById("three-container");

// SCENE
const scene = new THREE.Scene();

// CAMERA
const camera = new THREE.PerspectiveCamera(
75,
window.innerWidth/window.innerHeight,
0.1,
1000
);
camera.position.z = 5;

// RENDERER
const renderer = new THREE.WebGLRenderer({alpha:true});
renderer.setSize(window.innerWidth,window.innerHeight);
container.appendChild(renderer.domElement);

// MAIN OBJECT
const geometry = new THREE.IcosahedronGeometry(2,1);
const material = new THREE.MeshBasicMaterial({
color:0x00ccff,
wireframe:true
});
const mesh = new THREE.Mesh(geometry,material);
scene.add(mesh);

// PARTICLES
const particlesGeometry = new THREE.BufferGeometry();
const particlesCount = 1500;

const posArray = new Float32Array(particlesCount * 3);

for(let i=0;i<particlesCount*3;i++){
posArray[i] = (Math.random()-0.5)*15;
}

particlesGeometry.setAttribute(
'position',
new THREE.BufferAttribute(posArray,3)
);

const particlesMaterial = new THREE.PointsMaterial({
size:0.02,
color:0x00ccff
});

const particles = new THREE.Points(particlesGeometry,particlesMaterial);
scene.add(particles);

// MOUSE INTERACTION
let mouseX=0;
let mouseY=0;

document.addEventListener("mousemove",(e)=>{
mouseX=(e.clientX/window.innerWidth)*2-1;
mouseY=(e.clientY/window.innerHeight)*2-1;
});

// ANIMATION
function animate(){
requestAnimationFrame(animate);

// rotation
mesh.rotation.x += 0.002;
mesh.rotation.y += 0.003;

// follow mouse
mesh.rotation.x += mouseY*0.01;
mesh.rotation.y += mouseX*0.01;

// particles rotate
particles.rotation.y += 0.0008;

renderer.render(scene,camera);
}

animate();

// RESIZE
window.addEventListener("resize",()=>{
renderer.setSize(window.innerWidth,window.innerHeight);
camera.aspect=window.innerWidth/window.innerHeight;
camera.updateProjectionMatrix();
});